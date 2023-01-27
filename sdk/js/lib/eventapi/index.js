"use strict";
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * @summary an API for creating cloud video applications
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventApi = void 0;
const EventApiModel = __importStar(require("@api.stream/protocol-event-api"));
const isomorphic_ws_1 = __importDefault(require("isomorphic-ws")); // cross-platform ws
const uuid_1 = require("uuid");
const NiceGrpc = __importStar(require("nice-grpc-web"));
const matcher_1 = require("matcher");
const api_1 = require("../api");
const clientVersion = require("../version/index.js");
// Constants
const WS_PING_INTERVAL = 20000;
const WS_PING_TIMEOUT = 10000;
const WS_RECONNECT_DELAY = 2000;
const WS_MAX_BADAUTH_ATTEMPTS = 3;
const LOG_CATEGORY = 'EventApi';
class EventApi extends api_1.ApiClient {
    constructor(sessionId, server, websocketServer, sdkVersion, apiLogCallback, eventLogCallback) {
        super(sessionId, server, sdkVersion, LOG_CATEGORY, apiLogCallback, eventLogCallback);
        this.websocketServer = websocketServer;
        // Cached subscriptions.
        this.subscriptions = new Set();
        // Event handlers
        this.eventHandlers = {};
        // Map of async calls.
        this.calls = {};
        this.messageQueue = [];
        this.websocketReady = false;
        this.reconnectionAttempts = 0;
        this.badAuthentication = false;
        this.eventsClient = null;
    }
    /**
     * Publish a custom event
     *
     * note: if this session has an established stream, all custom
     * events will use that transport.
     *
     * @param request
     * @returns
     */
    publish(...request) {
        if (this.websocketReady) {
            return this.call('publish', request[0]);
        }
        else {
            return this.eventsClient.publish(...request);
        }
    }
    /**
     * Open the connection
     */
    connect() {
        if (!this.ws) {
            // Cleanup existing connection state
            this.cleanup();
            const currentAccessToken = this.accessToken;
            // Open new connection
            const query = [`version=${clientVersion}`, `sessionid=${this.sessionId}`];
            if (this.sdkVersion) {
                query.push(`sdkversion=${this.sdkVersion}`);
            }
            this.ws = new isomorphic_ws_1.default(`${this.websocketServer}/stream?${query.join('&')}`, [
                'Bearer', this.accessToken
            ]);
            let error;
            this.ws.addEventListener('message', (msg) => {
                const data = JSON.parse(msg.data.toString());
                const message = data.result;
                if (data.error) {
                    error = data.error;
                    this.handleEvent('error', {
                        error: {
                            code: data.code,
                            message: data.message,
                        }
                    });
                    // Track disconnects caused by a bad authentication token.
                    if (['You do not have permission to this resource', 'You do not have permission to this resource'].includes(data.message)) {
                        this.badAuthentication = true;
                    }
                }
                if (!message) {
                    return;
                }
                if (message.reconnectBefore && message.reconnectBefore.reauthenticate && this.accessToken === currentAccessToken) {
                    this.badAuthentication = true;
                }
                // Check we're exposing a type the SDK recognizes.
                const eventName = EventApiModel.eventsApiSupportedEvents.find(name => !!message[name]);
                if (eventName) {
                    this.handleEvent(eventName, message);
                }
            });
            this.ws.addEventListener('open', () => {
                this.log.info("websocket connected");
                this.call('ping', 'hello', { timeout: WS_PING_TIMEOUT, skipQueue: true })
                    .then(() => {
                    this.ready();
                })
                    .catch((e) => {
                    if (!error && e.message !== 'Stream connection closed') {
                        this.disconnect('hello timeout');
                    }
                });
            });
            // Handle disconnection
            this.ws.addEventListener('close', (event) => {
                var _a;
                if (error) {
                    this.reconnect(`${(_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'unknown'}`);
                }
                else {
                    this.reconnect(`closed - ${event.reason || event.code}`);
                }
            });
            // Catch errors for logging
            this.ws.addEventListener('error', (err) => {
                error = err;
            });
        }
    }
    /**
     * Subscribe to an event
     *
     * note: if a connection does not exist, one will be established.
     *
     * @param type
     * @param payload
     */
    async subscribe(name, payload = {}) {
        return this.call('subscribe', { name, ...payload })
            .then(() => {
            this.subscriptions.add(JSON.stringify({ name, ...payload }));
        });
    }
    /**
     * Unsubscribe from an event
     * @param type
     * @param payload
     */
    async unsubscribe(name, payload = {}) {
        this.subscriptions.delete(JSON.stringify({ name, payload }));
        await this.call('unsubscribe', { name, ...payload });
    }
    on(type, dataOrFn, fn) {
        const handler = fn ? fn : dataOrFn;
        const options = {
            ignoreSessionEvents: false,
            allowedSessionEvents: [],
            ...(fn ? dataOrFn : {}),
        };
        if (!this.eventHandlers[type]) {
            this.eventHandlers[type] = [];
        }
        this.eventHandlers[type].push({
            ...options,
            handler,
        });
    }
    off(type, dataOrFn, fn) {
        var _a;
        const handler = fn ? fn : dataOrFn;
        const options = {
            ignoreSessionEvents: false,
            allowedSessionEvents: [],
            ...(fn ? dataOrFn : {}),
        };
        this.eventHandlers[type] = ((_a = this.eventHandlers[type]) !== null && _a !== void 0 ? _a : []).filter(eventHandler => {
            // Check if we're de-registering the same event handler.
            if (eventHandler.ignoreSessionEvents === options.ignoreSessionEvents &&
                eventHandler.allowedSessionEvents === options.allowedSessionEvents &&
                eventHandler.handler === handler &&
                eventHandler.name === options.name) {
                return false;
            }
            return true;
        });
    }
    /**
     * Disconnect the websocket connection
     */
    disconnect(reason) {
        this.log.warn(`disconnected from events reason=${reason}`);
        // Cleanup RPC calls that were made during this request.
        Object.values(this.calls).forEach(i => {
            clearTimeout(i.timeout);
            i.reject(new Error('Stream connection closed'));
        });
        this.calls = {};
        this.cleanup();
    }
    _setup(options) {
        this.eventsClient = this.clientFactory.create(EventApiModel.EventServiceDefinition, this.channel, {
            '*': options,
        });
        // If the socket is marked as having bad authentication,
        // clear the state and enable the websocket to reconnect.
        if (this.badAuthentication) {
            this.badAuthentication = false;
            this.reconnectionAttempts = 0;
            this.reconnect('updated token');
        }
    }
    /**
     * Called when the websocket is ready.
     */
    ready() {
        this.reconnectionAttempts = 0;
        this.badAuthentication = false;
        this.websocketReady = true;
        this.handleEvent('connected', { connected: undefined });
        // Re-emit any subscriptions
        for (const sub of this.subscriptions.values()) {
            this.send({ subscribe: JSON.parse(sub), correlationId: (0, uuid_1.v4)() });
        }
        for (const msg of this.messageQueue) {
            this.send(msg);
        }
        this.messageQueue = [];
        this.pingLoop = setInterval(() => {
            this.ping();
        }, WS_PING_INTERVAL);
    }
    ping() {
        this.call('ping', `${+new Date()}`, { timeout: WS_PING_TIMEOUT })
            .catch(() => {
            // Timeout or failed ping
            this.reconnect('connection stalled');
        });
    }
    /**
     * Reconnect event stream
     *
     * @param reason Rec
     */
    reconnect(reason) {
        this.disconnect(reason);
        this.reconnectTimeout = setTimeout(() => {
            this.reconnectionAttempts++;
            if (this.badAuthentication && this.reconnectionAttempts >= WS_MAX_BADAUTH_ATTEMPTS) {
                this.log.warn('Maximum number of reconnection attempts reached with bad authentication, please re-authenticate the SDK');
                return;
            }
            this.connect();
        }, WS_RECONNECT_DELAY);
    }
    /**
     * Send a raw message to the websocket.
     *
     * @param data
     */
    send(data) {
        if (this.ws && this.ws.readyState === this.ws.OPEN) {
            this.ws.send(JSON.stringify(data));
        }
        else {
            this.log.warn('Message sent to a disconnected stream');
        }
    }
    /**
     * Process a stream event
     *
     * @param name the name of the event
     * @param payload the full event stream payload
     *
     * @returns void
     */
    handleEvent(name, payload) {
        var _a;
        // Check if this is part of a socket call and the correct payload is being correlated
        if (this.calls[payload.correlationId]) {
            const isMatchingResponse = EventApiModel.eventsApiEventRpcCalls[this.calls[payload.correlationId].method] === name;
            const isError = !!payload.error;
            // Only resolve the handler if it's a valid return type or an error.
            if (isMatchingResponse || isError) {
                this.resolveCall(name, payload);
                return;
            }
        }
        // Pass through to event handlers
        for (const handler of ((_a = this.eventHandlers[name]) !== null && _a !== void 0 ? _a : [])) {
            if (name === 'event' && payload.event) {
                if (payload.sessionId === this.sessionId && handler.ignoreSessionEvents && !handler.allowedSessionEvents.includes(payload.event.name)) {
                    this.log.trace("ignorning user event from self: " + payload.event.name + ", payload.sessionId=" + payload.sessionId + ", this.sessionId");
                    continue;
                }
                if (handler.name && !(0, matcher_1.isMatch)(payload.event.name, handler.name)) {
                    continue;
                }
                if (this.eventLogCallback) {
                    let eventService = undefined;
                    let eventType = payload.event.name;
                    let eventSubType = undefined;
                    // apistream:live:EVENT_TYPE_PROJECT:EVENT_SUB_TYPE_UPDATE
                    if (payload.event.name.startsWith(EventApi.APISTREAM_EVENT_PREFIX)) {
                        let parts = payload.event.name.split(':');
                        if (parts.length == 4) {
                            eventService = parts[1];
                            eventType = parts[2];
                            eventSubType = parts[3];
                        }
                        this.eventLogCallback(eventService, eventType, eventSubType, payload);
                    }
                }
            }
            else {
                if (payload.sessionId === this.sessionId && handler.ignoreSessionEvents) {
                    this.log.trace("ignorning event from self: " + payload.event.name + ", payload.sessionId=" + payload.sessionId + ", this.sessionId");
                    continue;
                }
            }
            this.log.trace("processing event: payload.sessionId=" + payload.sessionId + ", this.sessionId");
            handler.handler(payload ? payload[name] : undefined, { isFromCurrentSession: payload.sessionId === this.sessionId });
        }
    }
    /**
     * Make an RPC call
     *
     * Initiates an async request via the stream. A correlationId is generated and used to track
     * responses and errors. A handler is registered
     *
     * @param method request method to call
     * @param payload payload to send
     * @param opts timeout
     * @returns
     */
    async call(method, payload, opts = { timeout: 20000, skipQueue: false }) {
        if (!this.ws) {
            this.connect();
        }
        const correlationId = (0, uuid_1.v4)();
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                // Cleanup the request
                delete this.calls[correlationId];
                // Reject the request.
                reject(new Error('Request timed out'));
            }, opts.timeout);
            this.calls[correlationId] = { resolve, reject, timeout, method };
            if (this.websocketReady || opts.skipQueue) {
                this.send({ [method]: payload, correlationId });
            }
            else {
                this.messageQueue.push({ [method]: payload, correlationId });
            }
        });
    }
    /**
     * Handler for `.call()`
     *
     * Handle response events for a socket call.
     *
     * @param name name of responding event
     * @param payload payload of the event
     * @returns void
     */
    resolveCall(name, payload) {
        const callHandler = this.calls[payload.correlationId];
        if (!callHandler) {
            return;
        }
        // Remove timeout expiry since we received a response
        clearTimeout(callHandler.timeout);
        // Remove callHandler registration
        delete this.calls[payload.correlationId];
        // Use `error` to denote a rejection.
        if (name === 'error' && payload.error) {
            callHandler.reject(new NiceGrpc.ClientError('error', payload.error.code, payload.error.message));
            return;
        }
        // Pass through value with a resolve.
        callHandler.resolve(payload[name]);
    }
    /**
     * Cleanup connection
     *
     * This cleans up the local state for a given websocket connection.
     */
    cleanup() {
        clearTimeout(this.pingLoop);
        clearTimeout(this.reconnectTimeout);
        this.websocketReady = false;
        // Cleanup the existing websocket connection.
        if (this.ws) {
            // this.ws.removeAllListeners();
            this.ws.onclose = function () { };
            this.ws.close();
            this.ws = null;
        }
    }
}
exports.EventApi = EventApi;
EventApi.APISTREAM_EVENT_PREFIX = "apistream";
//# sourceMappingURL=index.js.map
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
exports.ApiStream = exports.LiveKitUtils = exports.EventApiModel = exports.LayoutApiModel = exports.LiveApiModel = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const uuid_1 = require("uuid");
const typescript_logging_1 = require("typescript-logging");
const layoutapi_1 = require("./layoutapi");
const liveapi_1 = require("./liveapi");
const eventapi_1 = require("./eventapi");
const LiveApiModel = __importStar(require("./liveapi/proto/ts/live/v21/api"));
exports.LiveApiModel = LiveApiModel;
const LayoutApiModel = __importStar(require("@api.stream/protocol-layout-api"));
exports.LayoutApiModel = LayoutApiModel;
const EventApiModel = __importStar(require("@api.stream/protocol-event-api"));
exports.EventApiModel = EventApiModel;
const livekit_1 = require("./livekit");
Object.defineProperty(exports, "LiveKitUtils", { enumerable: true, get: function () { return livekit_1.LiveKitUtils; } });
const logger_1 = require("./api/logger");
const CLIENT_VERSION = require("./version/index.js");
const LIVEAPI_SERVERS = {
    "dev": "http://127.0.0.1:8081",
    "stage": "https://live.stream.horse/grpcweb/live/v2",
    "prod": "https://live.api.stream/grpcweb/live/v2"
};
const LAYOUTAPI_SERVERS = {
    "dev": 'https://live.stream.horse/grpcweb/layout/v2',
    "stage": 'https://live.stream.horse/grpcweb/layout/v2',
    "prod": 'https://live.api.stream/grpcweb/layout/v2'
};
const EVENTAPI_WS_SERVERS = {
    "dev": 'wss://live.stream.horse/event/v2',
    "stage": 'wss://live.stream.horse/event/v2',
    "prod": 'wss://live.api.stream/event/v2'
};
const EVENTAPI_SERVERS = {
    "dev": 'https://live.stream.horse/grpcweb/event/v2',
    "stage": 'https://live.stream.horse/grpcweb/event/v2',
    "prod": 'https://live.api.stream/grpcweb/event/v2'
};
const LIVEKIT_SERVERS = {
    "dev": "wss://live.stream.horse/webrtc/v2",
    "stage": "wss://live.stream.horse/webrtc/v2",
    "prod": "wss://live.api.stream/webrtc/v2"
};
const LIVEKIT_ADMIN_SERVERS = {
    "dev": "https://live.stream.horse/webrtc/v2",
    "stage": "https://live.stream.horse/webrtc/v2",
    "prod": "https://live.api.stream/webrtc/v2"
};
class ApiStream {
    /**
     * Create an ApiStream API Client
     */
    constructor(opts = {}) {
        var _a;
        const options = {
            env: 'prod',
            logLevel: 'Warn',
            ...opts,
        };
        this.env = options.env;
        let sessionId = (0, uuid_1.v4)();
        if (options.sessionId != undefined)
            sessionId = options.sessionId;
        this.log = logger_1.logger.getCategory('ApiStream');
        this.setLogLevel((options.env == 'dev') ? 'Trace' : options.logLevel);
        const overrideEndpoints = (_a = options.overrideEndpoints) !== null && _a !== void 0 ? _a : {};
        if (overrideEndpoints.liveApiServer == undefined)
            overrideEndpoints.liveApiServer = LIVEAPI_SERVERS[this.env];
        if (overrideEndpoints.layoutApiServer == undefined)
            overrideEndpoints.layoutApiServer = LAYOUTAPI_SERVERS[this.env];
        if (overrideEndpoints.eventApiServer == undefined)
            overrideEndpoints.eventApiServer = EVENTAPI_SERVERS[this.env];
        if (overrideEndpoints.eventApiWebSocketServer == undefined)
            overrideEndpoints.eventApiWebSocketServer = EVENTAPI_WS_SERVERS[this.env];
        this.eventApi = new eventapi_1.EventApi(sessionId, overrideEndpoints.eventApiServer, overrideEndpoints.eventApiWebSocketServer, options.sdkVersion, options.apiLogCallback, options.eventLogCallback);
        this.layoutApi = new layoutapi_1.LayoutApi(sessionId, this.eventApi, overrideEndpoints.layoutApiServer, options.sdkVersion, options.apiLogCallback);
        this.liveApi = new liveapi_1.LiveApi(sessionId, this.eventApi, overrideEndpoints.liveApiServer, this.setAccessToken.bind(this), options.apiKey, options.sdkVersion, options.apiLogCallback);
        // Handle the event api's authentication expiring
        // this handles the case where no calls have been made to the live API but the access
        // token is coming up for expiration. (e.g a browser left open)
        this.eventApi.on('reconnectBefore', evt => {
            if (evt.reauthenticate) {
                // Fire _a_ request to the live API so we get an updated access token.
                this.liveApi.authentication.refreshAccessToken({})
                    .catch(() => { });
            }
        });
        this.log.info("api.stream: sessionid=" + sessionId + ", version=" + CLIENT_VERSION + ", sdkVersion=" + options.sdkVersion);
    }
    /**
     * Returns the live api client
     *
     * @returns the live api client
     */
    LiveApi() {
        return this.liveApi;
    }
    /**
     * Returns the layout api client
     *
     * @returns the layout api client
     */
    LayoutApi() {
        return this.layoutApi;
    }
    /**
     * Returns the layout api client
     *
     * @returns the layout api client
     */
    EventApi() {
        return this.eventApi;
    }
    setLogLevel(level) {
        try {
            let logLevel = typescript_logging_1.LogLevel.toLogLevel(level);
            logger_1.logger.updateRuntimeSettings({
                level: logLevel,
            });
        }
        catch (err) {
            this.log.warn(`unknown logging level ${level}`);
        }
    }
    setAccessToken(accessToken) {
        this.decodedAccessToken = ApiStream.decodeAccessToken(accessToken);
        this.log.debug("setting accessToken", accessToken, this.decodedAccessToken);
        this.layoutApi.setAccessToken(accessToken);
        this.liveApi.setAccessToken(accessToken);
        this.eventApi.setAccessToken(accessToken);
    }
    getAccessToken() {
        return this.decodedAccessToken;
    }
    /**
     * Are we running as a guest role?
     *
     * @returns {(ApiStream.GuestProject | null)} return the active project if running as a guest role
     */
    getGuestProject() {
        return this.decodedAccessToken.guestControl;
    }
    /**
     * Initialize the api library and check if we are running inside of the rendering engine
     * @async
     * @param {string} accessToken - a valid ApiStream access token
     * @returns {(ApiStream.GuestProject | null)} if we are operating inside of the rendering engine, this is the active project
     */
    async load(accessToken) {
        // not specified, check if it is in the query params
        if ((accessToken == undefined) && (typeof window != 'undefined')) {
            let queryParameters = this.parseQuery();
            if (queryParameters.get(ApiStream.ACCESS_TOKEN_QUERY_PARAM) != null) {
                accessToken = queryParameters.get(ApiStream.ACCESS_TOKEN_QUERY_PARAM);
            }
        }
        // load access token
        if (accessToken != undefined) {
            this.setAccessToken(accessToken);
            // check for guest project control
            if (this.decodedAccessToken.guestControl != undefined) {
                this.log.info("loading guest token and exchanging");
                // this will in turn call set access token
                await this.LiveApi().authentication.refreshAccessToken({});
                this.log.info("auto-loading project = " + JSON.stringify(this.decodedAccessToken.guestControl));
                return this.decodedAccessToken.guestControl;
            }
        }
        return null;
    }
    /**
     * get the signaling address of the appropriate livekit webrtc server
     *
     * @param {boolean} admin - if true, return the admin (vs. client) address
     * @returns {string} the address of the appropriate livekit webrtc server
     */
    getLiveKitServer(admin = false) {
        if (admin)
            return LIVEKIT_ADMIN_SERVERS[this.env];
        else
            return LIVEKIT_SERVERS[this.env];
    }
    parseQuery() {
        let queryString = window.location.search;
        let query = new Map();
        let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            if (pair.length == 2) {
                query.set(decodeURIComponent(pair[0]), decodeURIComponent(pair[1] || ''));
                this.log.debug(`found query param: ${decodeURIComponent(pair[0])}=${decodeURIComponent(pair[1] || '')}`);
            }
        }
        return query;
    }
    static decodeAccessToken(accessToken) {
        let rawDecodedAccessToken = (0, jwt_decode_1.default)(accessToken, { header: false });
        let decodedAccessToken = {
            serviceUserId: rawDecodedAccessToken.user.serviceUserId,
            userId: rawDecodedAccessToken.user.userId,
            displayName: rawDecodedAccessToken.user.displayName,
            trial: rawDecodedAccessToken.user.trial,
            demo: rawDecodedAccessToken.user.demo,
        };
        if (rawDecodedAccessToken.guestControl != null) {
            decodedAccessToken.guestControl = {
                collectionId: rawDecodedAccessToken.guestControl.collectionId,
                projectId: rawDecodedAccessToken.guestControl.projectId,
                role: LiveApiModel.roleFromJSON(rawDecodedAccessToken.guestControl.role)
            };
        }
        return decodedAccessToken;
    }
}
exports.ApiStream = ApiStream;
ApiStream.ACCESS_TOKEN_QUERY_PARAM = "at";
//# sourceMappingURL=index.js.map
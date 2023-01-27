"use strict";
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveApi = void 0;
/**
 * @summary an API for creating cloud video applications
 */
const NiceGrpc = __importStar(require("nice-grpc-web"));
const api_1 = require("../api");
const LiveApiModel = __importStar(require("./proto/ts/live/v21/api"));
const decorator_1 = require("../api/decorator");
const LOG_CATEGORY = 'LiveApi';
class LiveApi extends api_1.ApiClient {
    constructor(sessionId, eventApi, server, onAccessTokenRefresh, apiKey, sdkVersion, apiLogCallback) {
        super(sessionId, server, sdkVersion, LOG_CATEGORY, apiLogCallback);
        this.handlers = {};
        this.eventApi = eventApi;
        this.accessTokenRefreshCallback = onAccessTokenRefresh;
        this.publicAuthentication = this.clientFactory.create(LiveApiModel.PublicAuthenticationServiceDefinition, this.channel);
        if (apiKey != undefined) {
            this.backendAuthentication = this.clientFactory.create(LiveApiModel.BackendAuthenticationServiceDefinition, this.channel, {
                '*': { metadata: NiceGrpc.Metadata({ 'X-Api-Key': apiKey }) }
            });
        }
        this.eventApi.on('event', { name: `${LiveApi.LIVEAPI_EVENT_PREFIX}:*`, ignoreSessionEvents: true, allowedSessionEvents: [`${LiveApi.LIVEAPI_EVENT_PREFIX}:EVENT_TYPE_PROJECT:EVENT_SUB_TYPE_STATE`] }, this.eventCallback.bind(this));
    }
    /**
   * Register an event handler
   *
   * @param type Type of event
   * @param handler
   */
    on(type, handler) {
        var _a;
        this.handlers[type] = (_a = this.handlers[type]) !== null && _a !== void 0 ? _a : [];
        this.handlers[type].push(handler);
    }
    /**
     * Unregister an event handler
     *
     * @param type Type of event
     * @param handler
     */
    off(type, handler) {
        this.handlers[type] = this.handlers[type].filter(i => i !== handler);
    }
    emitToHandlers(name, subType, payload) {
        var _a;
        for (const handler of ((_a = this.handlers[name]) !== null && _a !== void 0 ? _a : [])) {
            handler(Object.values(payload).find(i => !!i), subType);
        }
    }
    async subscribeToCollection(collectionId) {
        await this.eventApi.subscribe(`${LiveApi.LIVEAPI_EVENT_PREFIX}:*`, { target: { collectionId: collectionId } });
    }
    async unsubscribeFromCollection(collectionId) {
        await this.eventApi.unsubscribe(`${LiveApi.LIVEAPI_EVENT_PREFIX}:*`, { target: { collectionId: collectionId } });
    }
    async subscribeToProject(collectionId, projectId) {
        await this.eventApi.subscribe(`${LiveApi.LIVEAPI_EVENT_PREFIX}:*`, { target: { collectionId: collectionId, projectId: projectId } });
    }
    async unsubscribeFromProject(collectionId, projectId) {
        await this.eventApi.unsubscribe(`${LiveApi.LIVEAPI_EVENT_PREFIX}:*`, { target: { collectionId: collectionId, projectId: projectId } });
    }
    eventCallback(event) {
        let typeAndSubType = event.name.split(`${LiveApi.LIVEAPI_EVENT_PREFIX}:`)[1];
        let parts = typeAndSubType.split(':');
        let eventType = LiveApiModel.eventTypeFromJSON(parts[0]);
        let eventSubType = LiveApiModel.eventSubTypeFromJSON(parts[1]);
        this.log.info("processing event: " + eventType + "/" + eventSubType);
        if (LiveApi.liveApiEventMap[eventType]) {
            this.emitToHandlers(eventType, eventSubType, event.payload);
        }
    }
    _setup(options) {
        let self = this;
        options.onHeader = function (header) {
            let jwtHeader = header.get('Authorization');
            if (jwtHeader != null) {
                // split it apart
                const headerParts = jwtHeader.split(' ');
                // is it malformed?
                if ((headerParts.length == 2) && (headerParts[0] == 'Bearer')) {
                    let accessToken = headerParts[1];
                    self.log.info("received refresh token");
                    self.accessTokenRefreshCallback(accessToken);
                }
            }
        };
        this.collection = this.clientFactory.create(LiveApiModel.CollectionServiceDefinition, this.channel, {
            '*': options,
        });
        this.project = this.clientFactory.create(LiveApiModel.ProjectServiceDefinition, this.channel, {
            '*': options,
        });
        this.source = this.clientFactory.create(LiveApiModel.SourceServiceDefinition, this.channel, {
            '*': options,
        });
        this.destination = this.clientFactory.create(LiveApiModel.DestinationServiceDefinition, this.channel, {
            '*': options,
        });
        this.authentication = this.clientFactory.create(LiveApiModel.AuthenticationServiceDefinition, this.channel, {
            '*': options,
        });
    }
}
LiveApi.LIVEAPI_EVENT_PREFIX = 'apistream:live';
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LiveApi.prototype, "collection", void 0);
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LiveApi.prototype, "project", void 0);
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LiveApi.prototype, "source", void 0);
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LiveApi.prototype, "destination", void 0);
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LiveApi.prototype, "authentication", void 0);
exports.LiveApi = LiveApi;
(function (LiveApi) {
    LiveApi.liveApiEventMap = {
        [LiveApiModel.EventType.EVENT_TYPE_COLLECTION]: 'collection',
        [LiveApiModel.EventType.EVENT_TYPE_PROJECT]: 'project',
        [LiveApiModel.EventType.EVENT_TYPE_SOURCE]: 'source',
        [LiveApiModel.EventType.EVENT_TYPE_DESTINATION]: 'destination',
        [LiveApiModel.EventType.EVENT_TYPE_UNSPECIFIED]: 'unspecified',
    };
})(LiveApi = exports.LiveApi || (exports.LiveApi = {}));
//# sourceMappingURL=index.js.map
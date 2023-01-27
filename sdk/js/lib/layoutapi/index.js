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
exports.LayoutApi = void 0;
const NiceGrpc = __importStar(require("nice-grpc-web"));
const LayoutApiModel = __importStar(require("@api.stream/protocol-layout-api"));
const api_1 = require("../api");
const decorator_1 = require("../api/decorator");
const LOG_CATEGORY = 'LayoutApi';
class LayoutApi extends api_1.ApiClient {
    constructor(sessionId, eventApi, server, sdkVersion, apiLogCallback) {
        super(sessionId, server, sdkVersion, LOG_CATEGORY, apiLogCallback);
        this.handlers = {};
        this.eventApi = eventApi;
        this.eventApi.on('event', { name: `${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:*`, ignoreSessionEvents: true }, (evt) => {
            var _a;
            const [, eventName] = evt.name.split(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:`);
            const [type, subtype] = eventName.split(':');
            const payload = evt.payload;
            for (const handler of ((_a = this.handlers[type]) !== null && _a !== void 0 ? _a : [])) {
                handler(Object.values(payload).find(i => !!i), subtype);
            }
        });
    }
    _setup(options) {
        this.layer = this.clientFactory.create(LayoutApiModel.LayerServiceDefinition, this.channel, {
            '*': options,
        });
        this.layout = this.clientFactory.create(LayoutApiModel.LayoutServiceDefinition, this.channel, {
            '*': options,
        });
    }
    /**
     * Subscribe to all events for a given layout.
     *
     * @param layoutId - the id of the layout to which you want to subscribe to layout events
     */
    async subscribeToLayout(layoutId) {
        await Promise.all([
            this.eventApi.subscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYER}:*`, { target: { layoutId } }),
            this.eventApi.subscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYOUT}:*`, { target: { layoutId } }),
        ]);
    }
    ;
    /**
     * Unsubscribe from all events for a given layout.
     *
     * @param layoutId - the id of the layout to which you want to unsubscribe to layout events
     */
    async unsubscribeFromLayout(layoutId) {
        await Promise.all([
            this.eventApi.unsubscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYER}:*`, { target: { layoutId } }),
            this.eventApi.unsubscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYOUT}:*`, { target: { layoutId } }),
        ]);
    }
    /**
     * Subscribe to all events for layouts in a project.
     *
     * @param collectionId - the id of the collection the layouts are in.
     * @param projectId - the id of the project the layouts are in.
     */
    async subscribeToLayoutsInProject(collectionId, projectId) {
        await Promise.all([
            this.eventApi.subscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYER}:*`, { target: { collectionId, projectId } }),
            this.eventApi.subscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYOUT}:*`, { target: { collectionId, projectId } }),
        ]);
    }
    ;
    /**
     * Unsubscribe from all events for layouts in a project.
     *
     * @param collectionId - the id of the collection the layouts are in.
     * @param projectId - the id of the project the layouts are in.
     */
    async unsubscribeFromLayoutsInProject(collectionId, projectId) {
        await Promise.all([
            this.eventApi.unsubscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYER}:*`, { target: { collectionId, projectId } }),
            this.eventApi.unsubscribe(`${LayoutApi.LAYOUTAPI_EVENT_PREFIX}:${LayoutApiModel.EventType.EVENT_TYPE_LAYOUT}:*`, { target: { collectionId, projectId } }),
        ]);
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
}
LayoutApi.LAYOUTAPI_EVENT_PREFIX = 'apistream:layout';
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LayoutApi.prototype, "layout", void 0);
__decorate([
    (0, decorator_1.RequiresSdkAuthentication)(),
    __metadata("design:type", Object)
], LayoutApi.prototype, "layer", void 0);
exports.LayoutApi = LayoutApi;
//# sourceMappingURL=index.js.map
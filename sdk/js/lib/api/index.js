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
exports.ApiClient = void 0;
const NiceGrpc = __importStar(require("nice-grpc-web"));
const abort_controller_x_1 = require("abort-controller-x");
const detect_node_1 = __importDefault(require("detect-node"));
const NodeTransport = __importStar(require("@improbable-eng/grpc-web-node-http-transport"));
const logger_1 = require("./logger");
const clientVersion = require("../version/index.js");
class ApiClient {
    constructor(sessionId, server, sdkVersion, logCategory, apiLogCallback, eventLogCallback) {
        this.sessionId = sessionId;
        this.sdkVersion = sdkVersion;
        this.version = clientVersion;
        this.apiLogCallback = apiLogCallback;
        this.eventLogCallback = eventLogCallback;
        this.log = logger_1.logger.getCategory(logCategory);
        // If we're running under node, we need to use a specific transport (nice-grpc-web doesn't work natively).
        this.channel = NiceGrpc.createChannel(server, detect_node_1.default ? NodeTransport.NodeHttpTransport() : undefined);
        this.clientFactory = NiceGrpc.createClientFactory().use(this.logMiddleware.bind(this));
    }
    async *logMiddleware(call, options) {
        const { path } = call.method;
        try {
            const result = yield* call.next(call.request, options);
            this.log.debug(`-> ${path}: ok`);
            this.log.trace(`${JSON.stringify(call.request)} -> ${path}: ${JSON.stringify(result)}`);
            if (this.apiLogCallback) {
                let parts = path.split("/");
                let serviceParts = parts[1].split(".");
                let service = serviceParts[serviceParts.length - 1];
                let version = serviceParts[serviceParts.length - 2];
                let api = serviceParts[serviceParts.length - 3];
                let func = parts[2];
                this.apiLogCallback(api, service, func, call.request, result);
            }
            return result;
        }
        catch (error) {
            this.log.trace(`${JSON.stringify(call.request)} -> ${path}`);
            if (error instanceof NiceGrpc.ClientError) {
                this.log.warn(`-> ${path}: error: ${NiceGrpc.Status[error.code]}: ${error.details}`);
            }
            else if ((0, abort_controller_x_1.isAbortError)(error)) {
                this.log.warn(`-> ${path}: cancel`);
            }
            else {
                this.log.warn(`-> ${path}: error: ${error === null || error === void 0 ? void 0 : error.stack}`);
            }
            throw error;
        }
    }
    setAccessToken(accessToken) {
        if ((this.accessToken == undefined) || (this.accessToken != accessToken)) {
            this.log.debug("access token refreshed");
            this.accessToken = accessToken;
            this.setup();
        }
    }
    makeGrpcMetadata() {
        let metadata = NiceGrpc.Metadata({
            Authorization: `Bearer ${this.accessToken}`,
            Version: this.version,
            SessionId: this.sessionId
        });
        if (this.sdkVersion != undefined) {
            metadata.set("SdkVersion", this.sdkVersion);
        }
        return metadata;
    }
    setup() {
        let options = {
            metadata: this.makeGrpcMetadata(),
        };
        this._setup(options);
    }
    _setup(options) {
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=index.js.map
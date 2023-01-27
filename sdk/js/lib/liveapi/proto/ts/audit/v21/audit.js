"use strict";
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
exports.Audit = exports.protobufPackage = void 0;
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const struct_1 = require("../../google/protobuf/struct");
exports.protobufPackage = "audit.v21";
function createBaseAudit() {
    return {
        serviceId: "",
        serviceUserId: "",
        userId: "",
        operation: "",
        projectId: undefined,
        request: undefined,
        response: undefined,
    };
}
exports.Audit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.serviceId !== "") {
            writer.uint32(10).string(message.serviceId);
        }
        if (message.serviceUserId !== "") {
            writer.uint32(18).string(message.serviceUserId);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        if (message.operation !== "") {
            writer.uint32(34).string(message.operation);
        }
        if (message.projectId !== undefined) {
            writer.uint32(42).string(message.projectId);
        }
        if (message.request !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.request), writer.uint32(50).fork()).ldelim();
        }
        if (message.response !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.response), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAudit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceId = reader.string();
                    break;
                case 2:
                    message.serviceUserId = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.operation = reader.string();
                    break;
                case 5:
                    message.projectId = reader.string();
                    break;
                case 6:
                    message.request = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.response = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
            serviceUserId: isSet(object.serviceUserId)
                ? String(object.serviceUserId)
                : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            operation: isSet(object.operation) ? String(object.operation) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : undefined,
            request: isSet(object === null || object === void 0 ? void 0 : object.request) ? object.request : undefined,
            response: isSet(object === null || object === void 0 ? void 0 : object.response) ? object.response : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.serviceUserId !== undefined &&
            (obj.serviceUserId = message.serviceUserId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.operation !== undefined && (obj.operation = message.operation);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.request !== undefined && (obj.request = message.request);
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAudit();
        message.serviceId = (_a = object.serviceId) !== null && _a !== void 0 ? _a : "";
        message.serviceUserId = (_b = object.serviceUserId) !== null && _b !== void 0 ? _b : "";
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : "";
        message.operation = (_d = object.operation) !== null && _d !== void 0 ? _d : "";
        message.projectId = (_e = object.projectId) !== null && _e !== void 0 ? _e : undefined;
        message.request = (_f = object.request) !== null && _f !== void 0 ? _f : undefined;
        message.response = (_g = object.response) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=audit.js.map
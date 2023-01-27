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
exports.MessageOptions = exports.FieldOptions = exports.protobufPackage = void 0;
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "common.v21";
function createBaseFieldOptions() {
    return {
        future: undefined,
        databaseId: undefined,
        databaseReferenceFrom: undefined,
        databaseReference: undefined,
        databaseOwnerReference: undefined,
        databaseReferenceDeep: undefined,
        databaseReferenceFromArray: undefined,
        databaseReferenceTo: undefined,
        databaseIgnore: undefined,
        databaseOptimizeSearch: undefined,
        urlProtocols: undefined,
        databaseAutoDelete: undefined,
    };
}
exports.FieldOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.future !== undefined) {
            writer.uint32(8).bool(message.future);
        }
        if (message.databaseId !== undefined) {
            writer.uint32(16).bool(message.databaseId);
        }
        if (message.databaseReferenceFrom !== undefined) {
            writer.uint32(24).bool(message.databaseReferenceFrom);
        }
        if (message.databaseReference !== undefined) {
            writer.uint32(34).string(message.databaseReference);
        }
        if (message.databaseOwnerReference !== undefined) {
            writer.uint32(42).string(message.databaseOwnerReference);
        }
        if (message.databaseReferenceDeep !== undefined) {
            writer.uint32(48).bool(message.databaseReferenceDeep);
        }
        if (message.databaseReferenceFromArray !== undefined) {
            writer.uint32(56).bool(message.databaseReferenceFromArray);
        }
        if (message.databaseReferenceTo !== undefined) {
            writer.uint32(64).bool(message.databaseReferenceTo);
        }
        if (message.databaseIgnore !== undefined) {
            writer.uint32(72).bool(message.databaseIgnore);
        }
        if (message.databaseOptimizeSearch !== undefined) {
            writer.uint32(80).bool(message.databaseOptimizeSearch);
        }
        if (message.urlProtocols !== undefined) {
            writer.uint32(90).string(message.urlProtocols);
        }
        if (message.databaseAutoDelete !== undefined) {
            writer.uint32(96).bool(message.databaseAutoDelete);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.future = reader.bool();
                    break;
                case 2:
                    message.databaseId = reader.bool();
                    break;
                case 3:
                    message.databaseReferenceFrom = reader.bool();
                    break;
                case 4:
                    message.databaseReference = reader.string();
                    break;
                case 5:
                    message.databaseOwnerReference = reader.string();
                    break;
                case 6:
                    message.databaseReferenceDeep = reader.bool();
                    break;
                case 7:
                    message.databaseReferenceFromArray = reader.bool();
                    break;
                case 8:
                    message.databaseReferenceTo = reader.bool();
                    break;
                case 9:
                    message.databaseIgnore = reader.bool();
                    break;
                case 10:
                    message.databaseOptimizeSearch = reader.bool();
                    break;
                case 11:
                    message.urlProtocols = reader.string();
                    break;
                case 12:
                    message.databaseAutoDelete = reader.bool();
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
            future: isSet(object.future) ? Boolean(object.future) : undefined,
            databaseId: isSet(object.databaseId)
                ? Boolean(object.databaseId)
                : undefined,
            databaseReferenceFrom: isSet(object.databaseReferenceFrom)
                ? Boolean(object.databaseReferenceFrom)
                : undefined,
            databaseReference: isSet(object.databaseReference)
                ? String(object.databaseReference)
                : undefined,
            databaseOwnerReference: isSet(object.databaseOwnerReference)
                ? String(object.databaseOwnerReference)
                : undefined,
            databaseReferenceDeep: isSet(object.databaseReferenceDeep)
                ? Boolean(object.databaseReferenceDeep)
                : undefined,
            databaseReferenceFromArray: isSet(object.databaseReferenceFromArray)
                ? Boolean(object.databaseReferenceFromArray)
                : undefined,
            databaseReferenceTo: isSet(object.databaseReferenceTo)
                ? Boolean(object.databaseReferenceTo)
                : undefined,
            databaseIgnore: isSet(object.databaseIgnore)
                ? Boolean(object.databaseIgnore)
                : undefined,
            databaseOptimizeSearch: isSet(object.databaseOptimizeSearch)
                ? Boolean(object.databaseOptimizeSearch)
                : undefined,
            urlProtocols: isSet(object.urlProtocols)
                ? String(object.urlProtocols)
                : undefined,
            databaseAutoDelete: isSet(object.databaseAutoDelete)
                ? Boolean(object.databaseAutoDelete)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.future !== undefined && (obj.future = message.future);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseReferenceFrom !== undefined &&
            (obj.databaseReferenceFrom = message.databaseReferenceFrom);
        message.databaseReference !== undefined &&
            (obj.databaseReference = message.databaseReference);
        message.databaseOwnerReference !== undefined &&
            (obj.databaseOwnerReference = message.databaseOwnerReference);
        message.databaseReferenceDeep !== undefined &&
            (obj.databaseReferenceDeep = message.databaseReferenceDeep);
        message.databaseReferenceFromArray !== undefined &&
            (obj.databaseReferenceFromArray = message.databaseReferenceFromArray);
        message.databaseReferenceTo !== undefined &&
            (obj.databaseReferenceTo = message.databaseReferenceTo);
        message.databaseIgnore !== undefined &&
            (obj.databaseIgnore = message.databaseIgnore);
        message.databaseOptimizeSearch !== undefined &&
            (obj.databaseOptimizeSearch = message.databaseOptimizeSearch);
        message.urlProtocols !== undefined &&
            (obj.urlProtocols = message.urlProtocols);
        message.databaseAutoDelete !== undefined &&
            (obj.databaseAutoDelete = message.databaseAutoDelete);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseFieldOptions();
        message.future = (_a = object.future) !== null && _a !== void 0 ? _a : undefined;
        message.databaseId = (_b = object.databaseId) !== null && _b !== void 0 ? _b : undefined;
        message.databaseReferenceFrom = (_c = object.databaseReferenceFrom) !== null && _c !== void 0 ? _c : undefined;
        message.databaseReference = (_d = object.databaseReference) !== null && _d !== void 0 ? _d : undefined;
        message.databaseOwnerReference = (_e = object.databaseOwnerReference) !== null && _e !== void 0 ? _e : undefined;
        message.databaseReferenceDeep = (_f = object.databaseReferenceDeep) !== null && _f !== void 0 ? _f : undefined;
        message.databaseReferenceFromArray =
            (_g = object.databaseReferenceFromArray) !== null && _g !== void 0 ? _g : undefined;
        message.databaseReferenceTo = (_h = object.databaseReferenceTo) !== null && _h !== void 0 ? _h : undefined;
        message.databaseIgnore = (_j = object.databaseIgnore) !== null && _j !== void 0 ? _j : undefined;
        message.databaseOptimizeSearch = (_k = object.databaseOptimizeSearch) !== null && _k !== void 0 ? _k : undefined;
        message.urlProtocols = (_l = object.urlProtocols) !== null && _l !== void 0 ? _l : undefined;
        message.databaseAutoDelete = (_m = object.databaseAutoDelete) !== null && _m !== void 0 ? _m : undefined;
        return message;
    },
};
function createBaseMessageOptions() {
    return { databaseModel: undefined, databaseCustomId: undefined };
}
exports.MessageOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseModel !== undefined) {
            writer.uint32(8).bool(message.databaseModel);
        }
        if (message.databaseCustomId !== undefined) {
            writer.uint32(56).bool(message.databaseCustomId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseModel = reader.bool();
                    break;
                case 7:
                    message.databaseCustomId = reader.bool();
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
            databaseModel: isSet(object.databaseModel)
                ? Boolean(object.databaseModel)
                : undefined,
            databaseCustomId: isSet(object.databaseCustomId)
                ? Boolean(object.databaseCustomId)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.databaseModel !== undefined &&
            (obj.databaseModel = message.databaseModel);
        message.databaseCustomId !== undefined &&
            (obj.databaseCustomId = message.databaseCustomId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMessageOptions();
        message.databaseModel = (_a = object.databaseModel) !== null && _a !== void 0 ? _a : undefined;
        message.databaseCustomId = (_b = object.databaseCustomId) !== null && _b !== void 0 ? _b : undefined;
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
//# sourceMappingURL=ext.js.map
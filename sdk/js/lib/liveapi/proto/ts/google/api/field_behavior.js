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
exports.fieldBehaviorToNumber = exports.fieldBehaviorToJSON = exports.fieldBehaviorFromJSON = exports.FieldBehavior = exports.protobufPackage = void 0;
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "google.api";
/**
 * An indicator of the behavior of a given field (for example, that a field
 * is required in requests, or given as output but ignored as input).
 * This **does not** change the behavior in protocol buffers itself; it only
 * denotes the behavior and may affect how API tooling handles the field.
 *
 * Note: This enum **may** receive new values in the future.
 */
var FieldBehavior;
(function (FieldBehavior) {
    /** FIELD_BEHAVIOR_UNSPECIFIED - Conventional default for enums. Do not use this. */
    FieldBehavior["FIELD_BEHAVIOR_UNSPECIFIED"] = "FIELD_BEHAVIOR_UNSPECIFIED";
    /**
     * OPTIONAL - Specifically denotes a field as optional.
     * While all fields in protocol buffers are optional, this may be specified
     * for emphasis if appropriate.
     */
    FieldBehavior["OPTIONAL"] = "OPTIONAL";
    /**
     * REQUIRED - Denotes a field as required.
     * This indicates that the field **must** be provided as part of the request,
     * and failure to do so will cause an error (usually `INVALID_ARGUMENT`).
     */
    FieldBehavior["REQUIRED"] = "REQUIRED";
    /**
     * OUTPUT_ONLY - Denotes a field as output only.
     * This indicates that the field is provided in responses, but including the
     * field in a request does nothing (the server *must* ignore it and
     * *must not* throw an error as a result of the field's presence).
     */
    FieldBehavior["OUTPUT_ONLY"] = "OUTPUT_ONLY";
    /**
     * INPUT_ONLY - Denotes a field as input only.
     * This indicates that the field is provided in requests, and the
     * corresponding field is not included in output.
     */
    FieldBehavior["INPUT_ONLY"] = "INPUT_ONLY";
    /**
     * IMMUTABLE - Denotes a field as immutable.
     * This indicates that the field may be set once in a request to create a
     * resource, but may not be changed thereafter.
     */
    FieldBehavior["IMMUTABLE"] = "IMMUTABLE";
    /**
     * UNORDERED_LIST - Denotes that a (repeated) field is an unordered list.
     * This indicates that the service may provide the elements of the list
     * in any arbitrary  order, rather than the order the user originally
     * provided. Additionally, the list's order may or may not be stable.
     */
    FieldBehavior["UNORDERED_LIST"] = "UNORDERED_LIST";
    /**
     * NON_EMPTY_DEFAULT - Denotes that this field returns a non-empty default value if not set.
     * This indicates that if the user provides the empty value in a request,
     * a non-empty value will be returned. The user will not be aware of what
     * non-empty value to expect.
     */
    FieldBehavior["NON_EMPTY_DEFAULT"] = "NON_EMPTY_DEFAULT";
})(FieldBehavior = exports.FieldBehavior || (exports.FieldBehavior = {}));
function fieldBehaviorFromJSON(object) {
    switch (object) {
        case 0:
        case "FIELD_BEHAVIOR_UNSPECIFIED":
            return FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED;
        case 1:
        case "OPTIONAL":
            return FieldBehavior.OPTIONAL;
        case 2:
        case "REQUIRED":
            return FieldBehavior.REQUIRED;
        case 3:
        case "OUTPUT_ONLY":
            return FieldBehavior.OUTPUT_ONLY;
        case 4:
        case "INPUT_ONLY":
            return FieldBehavior.INPUT_ONLY;
        case 5:
        case "IMMUTABLE":
            return FieldBehavior.IMMUTABLE;
        case 6:
        case "UNORDERED_LIST":
            return FieldBehavior.UNORDERED_LIST;
        case 7:
        case "NON_EMPTY_DEFAULT":
            return FieldBehavior.NON_EMPTY_DEFAULT;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldBehavior");
    }
}
exports.fieldBehaviorFromJSON = fieldBehaviorFromJSON;
function fieldBehaviorToJSON(object) {
    switch (object) {
        case FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED:
            return "FIELD_BEHAVIOR_UNSPECIFIED";
        case FieldBehavior.OPTIONAL:
            return "OPTIONAL";
        case FieldBehavior.REQUIRED:
            return "REQUIRED";
        case FieldBehavior.OUTPUT_ONLY:
            return "OUTPUT_ONLY";
        case FieldBehavior.INPUT_ONLY:
            return "INPUT_ONLY";
        case FieldBehavior.IMMUTABLE:
            return "IMMUTABLE";
        case FieldBehavior.UNORDERED_LIST:
            return "UNORDERED_LIST";
        case FieldBehavior.NON_EMPTY_DEFAULT:
            return "NON_EMPTY_DEFAULT";
        default:
            return "UNKNOWN";
    }
}
exports.fieldBehaviorToJSON = fieldBehaviorToJSON;
function fieldBehaviorToNumber(object) {
    switch (object) {
        case FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED:
            return 0;
        case FieldBehavior.OPTIONAL:
            return 1;
        case FieldBehavior.REQUIRED:
            return 2;
        case FieldBehavior.OUTPUT_ONLY:
            return 3;
        case FieldBehavior.INPUT_ONLY:
            return 4;
        case FieldBehavior.IMMUTABLE:
            return 5;
        case FieldBehavior.UNORDERED_LIST:
            return 6;
        case FieldBehavior.NON_EMPTY_DEFAULT:
            return 7;
        default:
            return 0;
    }
}
exports.fieldBehaviorToNumber = fieldBehaviorToNumber;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=field_behavior.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiresSdkAuthentication = void 0;
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * Wrap class property with error handler.
 *
 * This decorator wraps a given class property, informing the consumer why this property isn't set. It provides
 * a slightly cleaner user experience than making every property optional.
 */
function RequiresSdkAuthentication() {
    return function (target, propertyKey) {
        const _internalPropertyKey = Symbol(propertyKey);
        Object.defineProperty(target, propertyKey, {
            get: function () {
                if (!this[_internalPropertyKey]) {
                    throw new Error('Please authenticate ApiStream by calling apiStream.load( accessToken )');
                }
                return this[_internalPropertyKey];
            },
            set: function (val) {
                this[_internalPropertyKey] = val;
            },
        });
    };
}
exports.RequiresSdkAuthentication = RequiresSdkAuthentication;
//# sourceMappingURL=decorator.js.map
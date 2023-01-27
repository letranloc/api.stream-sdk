"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
const typescript_logging_1 = require("typescript-logging");
const typescript_logging_category_style_1 = require("typescript-logging-category-style");
// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
exports.logger = typescript_logging_category_style_1.CategoryProvider.createProvider("ApiStream", { allowSameCategoryName: true, level: typescript_logging_1.LogLevel.Warn });
//# sourceMappingURL=logger.js.map
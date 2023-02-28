"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
// import { composeWithDevTools } from 'redux-devtools-extension';
const index_1 = __importDefault(require("./reducers/index"));
const store = (0, toolkit_1.configureStore)({
    reducer: index_1.default
});
exports.default = store;
//# sourceMappingURL=store.js.map
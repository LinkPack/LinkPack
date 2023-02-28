"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const generatedLinkPackReducer_1 = __importDefault(require("./generatedLinkPackReducer"));
const linkPackReducer_1 = __importDefault(require("./linkPackReducer"));
const reducers = (0, redux_1.combineReducers)({
    linkPack: linkPackReducer_1.default,
    generatedLinkPack: generatedLinkPackReducer_1.default
});
exports.default = reducers;
//# sourceMappingURL=index.js.map
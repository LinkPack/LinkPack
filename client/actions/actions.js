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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntryActionCreator = exports.getEntriesActionCreator = exports.generateLinkPackActionCreator = exports.addEntryActionCreator = void 0;
const types = __importStar(require("../constants/actionTypes.js"));
const addEntryActionCreator = (label, link, keyId) => ({
    type: types.ADD_ENTRY,
    payload: {
        label,
        link,
        keyId
    }
});
exports.addEntryActionCreator = addEntryActionCreator;
const generateLinkPackActionCreator = () => ({
    type: types.GENERATE_LINKPACK
});
exports.generateLinkPackActionCreator = generateLinkPackActionCreator;
const getEntriesActionCreator = (receivedEntries) => ({
    type: types.GET_ENTRIES,
    payload: {
        receivedEntries
    }
});
exports.getEntriesActionCreator = getEntriesActionCreator;
const deleteEntryActionCreator = (keyId) => ({
    type: types.DELETE_ENTRY,
    payload: keyId
});
exports.deleteEntryActionCreator = deleteEntryActionCreator;
//# sourceMappingURL=actions.js.map
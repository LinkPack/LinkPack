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
const types = __importStar(require("../constants/actionTypes"));
const initialState = {
    entries: [],
};
const generatedLinkPackReducer = (state = initialState, action) => {
    let entries;
    switch (action.type) {
        case types.GET_ENTRIES:
            // add link to list
            // add label to label list
            console.log('im in reducer');
            entries = [];
            const payloadObj = action.payload.receivedEntries;
            //console.log('new entries equal to entries? ', newEntries === state.entries);
            for (const key in payloadObj) {
                const linkObj = {
                    label: key,
                    link: payloadObj[key]
                };
                entries.push(linkObj);
            }
            console.log('im entries', entries);
            return Object.assign(Object.assign({}, state), { entries });
        default: {
            return state;
        }
    }
};
exports.default = generatedLinkPackReducer;
//# sourceMappingURL=generatedLinkPackReducer.js.map
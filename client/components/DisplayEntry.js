"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function DisplayEntry({ link, label }) {
    return (react_1.default.createElement("div", { className: 'diplayLinkGroup' },
        react_1.default.createElement("div", { className: 'displayLabel' }, label),
        react_1.default.createElement("a", { className: 'displayLink', href: '//' + link, target: '_blank' }, link)));
}
exports.default = DisplayEntry;
//# sourceMappingURL=DisplayEntry.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const EntryCreator_1 = __importDefault(require("../components/EntryCreator"));
const EntriesDisplay_1 = __importDefault(require("../components/EntriesDisplay"));
function EntriesContainer(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "LinkPack will package all entered links and give you a short link to send to all your friends."),
        react_1.default.createElement("h3", null, "Enter your links here"),
        react_1.default.createElement(EntryCreator_1.default, { onClick: props.onClick }),
        react_1.default.createElement(EntriesDisplay_1.default, { entries: props.entries })));
}
exports.default = (EntriesContainer);
//# sourceMappingURL=EntriesContainer.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Entry_1 = __importDefault(require("../components/Entry"));
function EntriesDisplay(props) {
    const allEntries = [];
    for (let i = 0; i < props.entries.length; i++) {
        allEntries.push(react_1.default.createElement(Entry_1.default, { keyId: props.entries[i].keyId, label: props.entries[i].label, link: props.entries[i].link }));
    }
    console.log('im props.entries in display', props.entries);
    return (react_1.default.createElement("div", { className: 'display-box' }, allEntries));
}
// const mapStateToProps = state => ({
//   entries: state.entries,
// });
exports.default = (EntriesDisplay);
//# sourceMappingURL=EntriesDisplay.js.map
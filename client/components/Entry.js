"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions/actions");
function Entry(props) {
    console.log('im props in entry', props);
    const deleteEntry = () => {
        console.log('im in delete', props.keyId);
        props.deleteEntry(props.keyId);
    };
    return (react_1.default.createElement("div", { className: 'entry-box' },
        react_1.default.createElement("div", { className: 'label link-bubble' }, props.label),
        react_1.default.createElement("div", { className: 'link link-bubble' }, props.link),
        react_1.default.createElement("button", { onClick: deleteEntry }, "-")));
}
const mapDispatchToProps = (dispatch) => ({
    deleteEntry: (keyId) => dispatch((0, actions_1.deleteEntryActionCreator)(keyId))
});
exports.default = (0, react_redux_1.connect)(null, mapDispatchToProps)(Entry);
//# sourceMappingURL=Entry.js.map
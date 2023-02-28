"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GeneratorContainer_1 = __importDefault(require("./GeneratorContainer"));
const EntriesContainer_1 = __importDefault(require("./EntriesContainer"));
const react_redux_1 = require("react-redux");
const actions_js_1 = require("../actions/actions.js");
function MainContainer(props) {
    const handleClick = (label, link, keyId) => {
        props.newEntry(label, link, keyId);
    };
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "LINKPACK"),
        react_1.default.createElement(EntriesContainer_1.default, { onClick: handleClick, entries: props.linkPack.entries }),
        react_1.default.createElement(GeneratorContainer_1.default, { entries: props.linkPack.entries })));
}
;
const mapStateToProps = (state) => ({
    linkPack: state.linkPack,
});
const mapDispatchToProps = (dispatch) => ({
    newEntry: (label, link, keyId) => dispatch((0, actions_js_1.addEntryActionCreator)(label, link, keyId))
});
exports.default = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(MainContainer);
//# sourceMappingURL=MainContainer.js.map
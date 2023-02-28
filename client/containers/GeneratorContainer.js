"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GeneratorCreator_1 = __importDefault(require("../components/GeneratorCreator"));
function GeneratorContainer(props) {
    return (react_1.default.createElement("div", { id: 'gen-box' },
        react_1.default.createElement("p", null, "Package your links!"),
        react_1.default.createElement(GeneratorCreator_1.default, { entries: props.entries })));
}
exports.default = GeneratorContainer;
//# sourceMappingURL=GeneratorContainer.js.map
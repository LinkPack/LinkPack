"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainContainer_1 = __importDefault(require("./containers/MainContainer"));
const react_router_dom_1 = require("react-router-dom");
const DisplayContainer2_1 = __importDefault(require("./containers/DisplayContainer2"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(DisplayContainer2_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/l", element: react_1.default.createElement(DisplayContainer2_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(MainContainer_1.default, null) })));
}
exports.default = App;
//# sourceMappingURL=App.js.map
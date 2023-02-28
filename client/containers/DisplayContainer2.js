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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const actions_js_1 = require("../actions/actions.js");
const DisplayEntry_js_1 = __importDefault(require("../components/DisplayEntry.js"));
function DisplayContainer2() {
    //fetch to receive all links
    // const entries = useSelector(state => state.linkPack.entries);
    // console.log('entries: ', entries);
    // console.log('window.location.href', window.location.pathname);
    // const dispatch = useDispatch();
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        console.log('begining of useEffect');
        function getEntries() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`getList/${window.location.pathname}`);
                    const data = yield response.json();
                    console.log(data);
                    dispatch((0, actions_js_1.getEntriesActionCreator)(data));
                    return data;
                }
                catch (_a) {
                    console.log('error in displayContainer');
                }
            });
        }
        getEntries();
    }, []);
    const info = [];
    const entries = (0, react_redux_1.useSelector)((state) => state.generatedLinkPack.entries);
    console.log(entries);
    for (let i = 0; i < entries.length; i++) {
        info.push(react_1.default.createElement(DisplayEntry_js_1.default, { label: entries[i].label, link: entries[i].link }));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Links"),
        react_1.default.createElement(react_1.default.Fragment, null, info)));
}
exports.default = DisplayContainer2;
//# sourceMappingURL=DisplayContainer2.js.map
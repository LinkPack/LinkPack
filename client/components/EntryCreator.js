"use strict";
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
const react_1 = __importDefault(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const hooks_1 = require("../hooks");
const short_uuid_1 = __importDefault(require("short-uuid"));
function EntryCreator(props) {
    const [label, labelOnChange, resetLabel] = (0, hooks_1.useInput)('');
    const [link, linkOnChange, resetLink] = (0, hooks_1.useInput)('');
    const handleButtonClick = () => __awaiter(this, void 0, void 0, function* () {
        const keyId = short_uuid_1.default.generate();
        console.log('i gen key', keyId);
        if (link !== '')
            props.onClick(label, link, keyId);
        resetLabel();
        resetLink();
        console.log("hello");
    });
    return (react_1.default.createElement("div", { id: 'linkAddBar' },
        react_1.default.createElement(TextField_1.default, { id: "outlined-basic", label: "Label", variant: "outlined", value: label, onChange: labelOnChange }),
        react_1.default.createElement(TextField_1.default, { className: 'linkEntryField', id: "outlined-basic", label: "Link", variant: "outlined", value: link, onChange: linkOnChange }),
        react_1.default.createElement("button", { onClick: handleButtonClick }, "Add Link ")));
}
;
exports.default = (EntryCreator);
//# sourceMappingURL=EntryCreator.js.map
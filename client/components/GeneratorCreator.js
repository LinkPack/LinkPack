"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const hooks_js_1 = require("../hooks.js");
function GeneratorCreator(props) {
    const [text, textOnChange, resetText] = (0, hooks_js_1.useInput)('');
    const fetchLink = () => {
        if (text)
            return;
        console.log('im in generatorcreator and i found entires', props.entries);
        fetch('/genlink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ links: props.entries }) // hope this works
        })
            .then(response => response.json())
            .then(key => {
            resetText(`${window.location.origin}/${key.link}`);
            console.log(key.link);
        });
    };
    function copyToClipboard() {
        // Copy the text inside the text field
        navigator.clipboard.writeText(text);
        const copiedBanner = document.querySelector('.copiedBanner');
        if (copiedBanner !== null) {
            copiedBanner.style.display = 'block';
            copiedBanner.style.opacity = '1';
            setTimeout(hide, 500);
        }
    }
    function hide() {
        const copiedBanner = document.querySelector('.copiedBanner');
        if (copiedBanner !== null) {
            copiedBanner.style.opacity = '0';
            setTimeout(reshow, 500);
        }
    }
    function reshow() {
        const copiedBanner = document.querySelector('.copiedBanner');
        if (copiedBanner !== null) {
            copiedBanner.style.display = 'none';
            copiedBanner.style.opacity = '1';
        }
    }
    return (react_1.default.createElement("div", { className: 'output-container' },
        react_1.default.createElement("div", { className: 'copiedBanner' }, "copied to clipboard"),
        react_1.default.createElement("button", { onClick: fetchLink }, "Generate"),
        react_1.default.createElement("div", { onClick: copyToClipboard, id: 'generatedLink' }, text)));
}
exports.default = GeneratorCreator;
//# sourceMappingURL=GeneratorCreator.js.map
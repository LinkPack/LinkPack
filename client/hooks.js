"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
const react_1 = require("react");
const useInput = (init) => {
    // custom hook
    const [value, setValue] = (0, react_1.useState)(init);
    const onChange = (e) => {
        setValue(e.target.value ? e.target.value : '');
    };
    const reset = (newInit = '') => {
        setValue(newInit);
    };
    // return the value with the onChange function instead of setValue function
    return [value, onChange, reset];
};
exports.useInput = useInput;
//# sourceMappingURL=hooks.js.map
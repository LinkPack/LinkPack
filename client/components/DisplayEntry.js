import React from 'react';
function DisplayEntry({ link, label }) {
    return (React.createElement("div", { className: 'diplayLinkGroup' },
        React.createElement("div", { className: 'displayLabel' }, label),
        React.createElement("a", { className: 'displayLink', href: '//' + link, target: '_blank' }, link)));
}
export default DisplayEntry;
//# sourceMappingURL=DisplayEntry.js.map
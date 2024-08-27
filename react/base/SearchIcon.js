const React = require("react");
function SearchIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.165 4.709a4.458 4.458 0 1 0 0 8.917 4.458 4.458 0 0 0 0-8.917ZM3.207 9.167a5.958 5.958 0 1 1 10.669 3.65l2.695 2.695a.75.75 0 1 1-1.061 1.06l-2.695-2.694a5.958 5.958 0 0 1-9.608-4.71Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SearchIcon);
module.exports = ForwardRef;
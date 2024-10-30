const React = require("react");
function ChevronLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 21",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.591 7.115a.75.75 0 0 1-.039 1.06l-2.325 2.158 2.325 2.16a.75.75 0 0 1-1.02 1.098l-2.917-2.708a.75.75 0 0 1 0-1.1l2.916-2.708a.75.75 0 0 1 1.06.04Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronLeftIcon);
module.exports = ForwardRef;
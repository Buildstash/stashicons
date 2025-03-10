const React = require("react");
function CheckSmallIcon({
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
    d: "M14.77 6.21a.75.75 0 0 1 .02 1.06l-6.25 6.5a.75.75 0 0 1-1.097-.018l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.711 1.901L13.71 6.23a.75.75 0 0 1 1.06-.02Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CheckSmallIcon);
module.exports = ForwardRef;
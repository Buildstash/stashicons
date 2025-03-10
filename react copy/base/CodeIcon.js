const React = require("react");
function CodeIcon({
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
    d: "M3.207 5.626a2.417 2.417 0 0 1 2.417-2.417h8.75a2.417 2.417 0 0 1 2.416 2.417v8.75a2.417 2.417 0 0 1-2.416 2.416h-8.75a2.417 2.417 0 0 1-2.417-2.416v-8.75Zm2.417-.917a.917.917 0 0 0-.917.917v8.75c0 .506.41.916.917.916h8.75c.506 0 .916-.41.916-.916v-8.75a.917.917 0 0 0-.916-.917h-8.75Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.733 8.457a.75.75 0 0 1 1.06-.055l2.082 1.875a.75.75 0 0 1 0 1.115l-2.083 1.875a.75.75 0 0 1-1.003-1.115l1.464-1.318-1.464-1.318a.75.75 0 0 1-.056-1.059Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CodeIcon);
module.exports = ForwardRef;
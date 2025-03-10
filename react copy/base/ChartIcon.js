const React = require("react");
function ChartIcon({
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
    d: "M3.21 5.626a2.417 2.417 0 0 1 2.418-2.417h8.75a2.417 2.417 0 0 1 2.416 2.417v8.75a2.417 2.417 0 0 1-2.416 2.416h-8.75a2.417 2.417 0 0 1-2.417-2.416v-8.75Zm2.418-.917a.917.917 0 0 0-.917.917v8.75c0 .506.41.916.917.916h8.75c.506 0 .916-.41.916-.916v-8.75a.917.917 0 0 0-.916-.917h-8.75Zm4.374 2.041a.75.75 0 0 1 .75.75v5.208a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75ZM7.293 9.902a.75.75 0 0 1 .75.75v2.056a.75.75 0 0 1-1.5 0v-2.056a.75.75 0 0 1 .75-.75Zm5.418 0a.75.75 0 0 1 .75.75v2.056a.75.75 0 1 1-1.5 0v-2.056a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChartIcon);
module.exports = ForwardRef;
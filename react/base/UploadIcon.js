const React = require("react");
function UploadIcon({
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
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3.957 12.292v1.25a2.5 2.5 0 0 0 2.5 2.5h7.083a2.5 2.5 0 0 0 2.5-2.5v-1.25M10 11.876V4.167M7.29 6.876 10 3.959l2.708 2.917"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UploadIcon);
module.exports = ForwardRef;
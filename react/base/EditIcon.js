const React = require("react");
function EditIcon({
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
    d: "m3.957 16.041 3.542-.833 7.744-7.744a.833.833 0 0 0 0-1.178l-1.53-1.53a.833.833 0 0 0-1.179 0L4.79 12.5l-.833 3.541ZM16.04 16.041h-4.583"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EditIcon);
module.exports = ForwardRef;
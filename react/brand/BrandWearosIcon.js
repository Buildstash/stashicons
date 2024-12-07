const React = require("react");
function BrandWearosIcon({
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
    d: "M8.208 14.567c-.484 0-.947-.28-1.157-.75L4.11 7.21A1.265 1.265 0 0 1 6.42 6.18l2.942 6.607a1.265 1.265 0 0 1-1.155 1.78Zm3.598.018c-.446 0-.871-.257-1.064-.69L7.695 7.05a1.164 1.164 0 0 1 2.125-.947l3.048 6.844a1.164 1.164 0 0 1-1.062 1.637ZM16 6.597a1.163 1.163 0 1 1-2.327 0 1.163 1.163 0 0 1 2.327 0Zm-1.306 2.558a1.242 1.242 0 0 1-1.245 1.245 1.246 1.246 0 0 1-.88-2.125 1.245 1.245 0 0 1 2.125.88Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandWearosIcon);
module.exports = ForwardRef;
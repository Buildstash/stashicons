const React = require("react");
function BrandDroneIcon({
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
    d: "M11.816 10.966a1.816 1.816 0 1 1-3.632 0 1.816 1.816 0 0 1 3.632 0ZM10 4c3.17.025 6.773 2.26 7.097 6.47h-4.291S12.253 8.146 10 8.16c-2.253.015-2.806 2.31-2.806 2.31H2.903C3.11 6.335 6.655 3.975 10 4Zm.03 12c-2.364.006-4.572-1.778-5.477-4.54h2.641s.57 2.3 2.823 2.285c2.254-.015 2.79-2.284 2.79-2.284h2.64c-.588 2.921-3.055 4.533-5.417 4.539Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandDroneIcon);
module.exports = ForwardRef;
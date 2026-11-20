const React = require("react");
function BrandAsanaIcon({
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
    d: "M13.39 10.326a2.61 2.61 0 1 0 0 5.22 2.61 2.61 0 0 0 0-5.22zm-6.78 0a2.61 2.61 0 1 0 0 5.22 2.61 2.61 0 0 0 0-5.22zm6-3.262a2.61 2.61 0 1 1-5.22 0 2.61 2.61 0 0 1 5.22 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAsanaIcon);
module.exports = ForwardRef;
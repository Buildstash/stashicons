const React = require("react");
function BrandAppveyorIcon({
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
    d: "M10 4c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6Zm1.47 7.17c.66-.84.57-2.04-.27-2.67-.81-.63-2.01-.48-2.7.36-.66.84-.57 2.04.27 2.67.84.63 2.04.48 2.7-.36Zm-3.21 3.9c.36.15 1.14.3 1.53.3l2.61-3.78c.84-1.26.63-2.97-.54-3.9-1.05-.84-2.52-.81-3.57 0l-3.63 2.79c.09.96.36 1.44.36 1.47L7.09 9.7c-.15.99.21 2.01 1.05 2.64.72.57 1.59.72 2.43.54l-2.31 2.19Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAppveyorIcon);
module.exports = ForwardRef;
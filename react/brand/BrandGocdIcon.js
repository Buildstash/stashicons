const React = require("react");
function BrandGocdIcon({
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
    d: "m13.021 10.618-4.453 2.968a.735.735 0 0 1-.76.038.74.74 0 0 1-.391-.654V10a.74.74 0 1 1 1.478 0v1.582L11.268 10 7.74 7.652a.745.745 0 0 1 .826-1.24l4.457 2.97a.746.746 0 0 1 0 1.236ZM10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGocdIcon);
module.exports = ForwardRef;
const React = require("react");
function BrandThreadxIcon({
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
    d: "M4.44 8.858c2.116-2.115 6.654-1.007 10.137 2.476.604.604 1.135 1.24 1.591 1.889A6.997 6.997 0 0 1 9.955 17a7.003 7.003 0 0 1-6.543-4.508c-.171-1.463.151-2.757 1.029-3.634ZM9.956 3a7 7 0 0 1 6.5 9.599 15.499 15.499 0 0 0-1.678-2.138 15.144 15.144 0 0 0-2.826-2.374l2.886-2.875-2.878-.024-1.9 1.891c-.245-.103-.49-.194-.732-.275l.026.009-1.631-1.625-2.87.023a6.978 6.978 0 0 1 5.103-2.21Zm-5.112 9.28 2.878.025 2.118-2.112 2.12 2.112 2.877-.025-2.303-2.295c-1.408-.686-2.832-1.098-4.147-1.239L4.843 12.28ZM6.08 6.446l.007-.001c-.81.127-1.526.448-2.095.98-.427.4-.74.891-.947 1.45a6.977 6.977 0 0 1 1.802-3.659l1.233 1.23Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandThreadxIcon);
module.exports = ForwardRef;
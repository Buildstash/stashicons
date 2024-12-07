const React = require("react");
function BrandCircleciIcon({
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
    d: "M8.458 10a1.45 1.45 0 1 1 2.898 0 1.45 1.45 0 0 1-2.898 0Zm1.45-6.093A6.1 6.1 0 0 0 4.002 8.49c-.005.019-.005.036-.005.061 0 .16.128.293.292.293h2.455a.28.28 0 0 0 .262-.17 3.2 3.2 0 0 1 2.9-1.864 3.195 3.195 0 0 1 3.192 3.192 3.196 3.196 0 0 1-3.193 3.194 3.188 3.188 0 0 1-2.9-1.865.301.301 0 0 0-.262-.17H4.29a.292.292 0 0 0-.292.292c0 .019.007.037.007.061a6.092 6.092 0 1 0 5.902-7.606Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCircleciIcon);
module.exports = ForwardRef;
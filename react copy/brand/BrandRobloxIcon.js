const React = require("react");
function BrandRobloxIcon({
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
    d: "M14.04 17 3 14.021 5.96 3 17 5.979 14.04 17Zm-2.087-8.114-3.081-.848-.825 3.076 3.081.848.825-3.076Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRobloxIcon);
module.exports = ForwardRef;
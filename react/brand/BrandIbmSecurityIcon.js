const React = require("react");
function BrandIbmSecurityIcon({
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
    d: "m9.965 2.96-5.25 2.615v6.154a5.25 5.25 0 0 0 10.5 0V5.575L9.965 2.96Zm2.988 11.95-2.988-1.49v.976l2.203 1.097A4.376 4.376 0 0 1 5.59 11.73V6.114l4.375-2.18 4.375 2.18v1.64l-4.375-2.18v.976l4.375 2.179v1.64L9.965 8.19v.975l4.375 2.18v.384c0 .397-.055.793-.162 1.175l-4.213-2.098v.974l3.891 1.939c-.23.446-.536.848-.903 1.19Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandIbmSecurityIcon);
module.exports = ForwardRef;
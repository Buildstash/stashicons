const React = require("react");
function BrandRetroarchIcon({
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
    d: "m6.99 6.36.91 1.12H6.08l-.42 1.68H4.54l.42-1.68H3.84L3 10.84h2.24l-.28 1.12h1.96l-1.47 1.68h1.645l1.365-1.68h3.08l1.365 1.68h1.645l-1.47-1.68h1.96l-.28-1.12H17l-.84-3.36h-1.12l.42 1.68h-1.12l-.42-1.68H12.1l.91-1.12h-1.19l-.98 1.12H9.16l-.98-1.12H6.99Zm.14 2.24h1.12v1.12H7.13V8.6Zm4.623 0h1.12v1.12h-1.12V8.6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRetroarchIcon);
module.exports = ForwardRef;
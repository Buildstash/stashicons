const React = require("react");
function BrandLastpassIcon({
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
    d: "M17.086 6.571a.456.456 0 1 1 .914 0v6.858a.456.456 0 0 1-.457.457.46.46 0 0 1-.458-.457l.001-6.858ZM3.371 8.857a1.371 1.371 0 1 1 0 2.743 1.371 1.371 0 0 1 0-2.743Zm5.029 0a1.371 1.371 0 1 1 0 2.743 1.371 1.371 0 0 1 0-2.743Zm5.029 0a1.371 1.371 0 1 1 0 2.743 1.371 1.371 0 0 1 0-2.743Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandLastpassIcon);
module.exports = ForwardRef;
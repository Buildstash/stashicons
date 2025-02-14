const React = require("react");
function BrandPicoIcon({
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
    d: "M10.59 3.277a7 7 0 1 0-.649 13.985 7 7 0 0 0 .65-13.985Zm-.082 1.782a5.217 5.217 0 0 1 4.386 7.62l-3.4-4.317a5.23 5.23 0 0 0-4.849-1.846 5.202 5.202 0 0 1 3.863-1.456V5.06Zm-.484 10.421A5.217 5.217 0 0 1 5.33 8.58l.027-.02a3.539 3.539 0 0 1 4.874.663l3.727 4.732a5.203 5.203 0 0 1-3.935 1.526Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.447 11.077a.809.809 0 1 0 0-1.618.809.809 0 0 0 0 1.618Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPicoIcon);
module.exports = ForwardRef;
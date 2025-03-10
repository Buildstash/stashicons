const React = require("react");
function BrandCodebergIcon({
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
    d: "M9.977 4.245a6 6 0 0 0-5.061 9.186l5.003-6.467c.008-.01.02-.02.034-.026a.119.119 0 0 1 .094 0 .086.086 0 0 1 .034.026l5.003 6.467a6 6 0 0 0-5.107-9.186Zm.188 3.234 2.208 8.276a6 6 0 0 0 2.569-2.107l-4.777-6.17Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCodebergIcon);
module.exports = ForwardRef;
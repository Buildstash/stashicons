const React = require("react");
function BrandBuildkiteIcon({
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
    d: "M16.774 7.75 12.301 5.5V10l4.473-2.25Zm-9.01 4.5v-4.5L3.226 5.5V10l4.537 2.25ZM3.107 5.309a.223.223 0 0 1 .22-.01l4.436 2.2 4.438-2.2a.225.225 0 0 1 .202 0l4.473 2.25a.225.225 0 0 1 .124.2v4.498a.226.226 0 0 1-.124.202l-4.473 2.252a.227.227 0 0 1-.328-.201v-4.136l-4.211 2.088a.23.23 0 0 1-.2 0l-4.539-2.25A.226.226 0 0 1 3 10V5.5a.225.225 0 0 1 .107-.191Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandBuildkiteIcon);
module.exports = ForwardRef;
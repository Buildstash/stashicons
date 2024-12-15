const React = require("react");
function PackageIcon({
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
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.728,
    d: "m4 6.932 6 3.245M4 6.932v6.72l6 3.245M4 6.932l3-1.498m9 1.498-6-2.995-3 1.497m9 1.498v6.72l-6 3.245m6-9.965-3 1.622m-3 1.623v6.72m0-6.72 3-1.623m0 0-6-3.12"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PackageIcon);
module.exports = ForwardRef;
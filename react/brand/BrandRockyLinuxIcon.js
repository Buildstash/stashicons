const React = require("react");
function BrandRockyLinuxIcon({
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
    d: "M15.666 11.979A5.985 5.985 0 0 0 16 10a6 6 0 1 0-10.277 4.209l6.087-6.087 1.502 1.503zm-1.096 1.909-2.76-2.76-4.323 4.322c.764.353 1.615.55 2.513.55 1.83 0 3.47-.82 4.57-2.112z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRockyLinuxIcon);
module.exports = ForwardRef;
const React = require("react");
function BrandArtixLinuxIcon({
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
    d: "M10 4 7.937 8.231l5.679 3.182zM7.313 9.509 4.148 16l9.393-3.881zm6.923 3.176-2.963 1.701L15.853 16Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandArtixLinuxIcon);
module.exports = ForwardRef;
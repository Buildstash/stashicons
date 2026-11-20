const React = require("react");
function BrandAsahiLinuxIcon({
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
    d: "m10.918 4-.86.661v.486h1.089zm-.975.029-1.038.519 1.038 2.076zm.115 1.884V7.11l-.529-1.057-2.314.786L10 8.004l2.785-1.165zM7.105 6.917l-2.839 5.06L9.942 16V8.105L7.111 6.92Zm5.79 0-.006.002-2.8 1.172 3.756 5.224 1.888-1.337zm-1.978 3.963v2.71l.977-1.355zm1.433 1.99-2.206 3.068 2.923-2.07z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAsahiLinuxIcon);
module.exports = ForwardRef;
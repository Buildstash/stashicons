const React = require("react");
function BrandXmppIcon({
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
    d: "m5.7 6.297.513.183 1.54.456c-.005.09-.008.18-.008.272 0 1.676.847 3.722 2.255 5.193 1.409-1.472 2.255-3.517 2.255-5.194 0-.09-.003-.181-.008-.271l1.54-.456.512-.183L16 5.638c-.073 2.851-2.427 5.812-5.249 7.447a5.86 5.86 0 0 0 2.194 1.107v.058h.002v.112a7.275 7.275 0 0 1-2.414-.64 10.454 10.454 0 0 1-.533-.239 9.621 9.621 0 0 1-.532.238 7.275 7.275 0 0 1-2.415.641v-.112h.002v-.057a5.874 5.874 0 0 0 2.195-1.108C6.427 11.45 4.073 8.489 4 5.638l1.7.659Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandXmppIcon);
module.exports = ForwardRef;
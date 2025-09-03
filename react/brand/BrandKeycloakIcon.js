const React = require("react");
function BrandKeycloakIcon({
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
    d: "M13.933 3.69H6.645C5.424 5.79 4.213 7.897 3 10.002c1.208 2.107 2.428 4.208 3.647 6.31l7.286-.003 1.802-3.152h1.259v-.001H17l-.002-6.31h-1.265l-1.8-3.155ZM7.857 5.795h1.214l.607 1.05-1.82 3.158 1.818 3.152-.604 1.056H7.857a1194.48 1194.48 0 0 0-2.43-4.203l2.43-4.213Zm3.641 0 1.217.002c.812 1.403 1.621 2.808 2.43 4.213l-2.43 4.2H11.5c-.223-.328-.606-1.055-.606-1.055l1.822-3.153-1.822-3.157.603-1.05Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandKeycloakIcon);
module.exports = ForwardRef;
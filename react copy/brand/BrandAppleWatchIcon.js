const React = require("react");
function BrandAppleWatchIcon({
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
    fillRule: "evenodd",
    d: "M8.65 3.5a.25.25 0 0 0-.229.148l-.167.378C8.417 4.009 8.582 4 8.75 4h2.5c.168 0 .333.009.496.026l-.167-.378a.25.25 0 0 0-.229-.148h-2.7Zm5.02 1.162-.72-1.623A1.75 1.75 0 0 0 11.35 2h-2.7a1.75 1.75 0 0 0-1.6 1.04l.686.304-.685-.305-.722 1.623A4.748 4.748 0 0 0 4 8.75v2.5c0 1.74.935 3.26 2.33 4.088l.72 1.623A1.75 1.75 0 0 0 8.65 18h2.7a1.75 1.75 0 0 0 1.6-1.04l.72-1.622A4.748 4.748 0 0 0 16 11.25v-2.5c0-1.74-.935-3.26-2.33-4.088Zm-1.924 11.312a4.813 4.813 0 0 1-.496.026h-2.5c-.168 0-.333-.009-.496-.026l.167.378c.04.09.13.148.229.148h2.7a.25.25 0 0 0 .229-.148l.167-.378ZM8.75 5.5A3.25 3.25 0 0 0 5.5 8.75v2.5a3.25 3.25 0 0 0 3.25 3.25h2.5a3.25 3.25 0 0 0 3.25-3.25v-2.5a3.25 3.25 0 0 0-3.25-3.25h-2.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAppleWatchIcon);
module.exports = ForwardRef;
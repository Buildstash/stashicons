import * as React from "react";
function BrandTockOsIcon({
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
    d: "M2.5 10c0-1.546.469-2.984 1.271-4.178l.415.28.415.278a6.5 6.5 0 1 0 5.9-2.86v.24h-1V2.5h.5A7.5 7.5 0 1 1 2.5 10Zm8-5.618V9.7h-1V4.382h1Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandTockOsIcon);
export default ForwardRef;
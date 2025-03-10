import * as React from "react";
function BrandSteamdeckIcon({
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
    d: "M8.5 4v2.154A3.85 3.85 0 0 1 12.346 10a3.85 3.85 0 0 1-3.848 3.845V16c3.309 0 6-2.691 6-6s-2.691-6-6-6Zm0 3.005a2.999 2.999 0 1 0 0 5.998 2.999 2.999 0 0 0 0-5.998Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSteamdeckIcon);
export default ForwardRef;
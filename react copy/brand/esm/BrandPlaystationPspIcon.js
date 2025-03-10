import * as React from "react";
function BrandPlaystationPspIcon({
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
    d: "M2 8.62v.197h4.788v1.084H2.001v1.478h.196V10.1h4.788v-1.48H2Zm7.527 0v2.563H6.985v.197h2.75V8.817h2.542V8.62h-2.75Zm3.488 0v.197h4.788v1.084h-4.788v1.478h.198V10.1H18v-1.48h-4.985Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPlaystationPspIcon);
export default ForwardRef;
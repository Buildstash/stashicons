import * as React from "react";
function BrandSlackIcon({
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
    d: "M6.134 11.758a1.405 1.405 0 0 1-1.4 1.402 1.404 1.404 0 0 1-1.4-1.402 1.404 1.404 0 0 1 1.4-1.4h1.4v1.4Zm.707 0a1.404 1.404 0 0 1 1.4-1.4 1.404 1.404 0 0 1 1.4 1.4v3.508a1.404 1.404 0 0 1-1.4 1.4 1.404 1.404 0 0 1-1.4-1.4v-3.508Zm1.4-5.624a1.404 1.404 0 0 1-1.4-1.4 1.404 1.404 0 0 1 1.4-1.4 1.404 1.404 0 0 1 1.4 1.4v1.4h-1.4Zm0 .706a1.404 1.404 0 0 1 1.4 1.401 1.404 1.404 0 0 1-1.4 1.4H4.734a1.404 1.404 0 0 1-1.4-1.4 1.404 1.404 0 0 1 1.4-1.4h3.507Zm5.623 1.401a1.404 1.404 0 0 1 1.402-1.4 1.405 1.405 0 0 1 1.4 1.4 1.405 1.405 0 0 1-1.4 1.4h-1.402v-1.4Zm-.704 0a1.404 1.404 0 0 1-1.402 1.4 1.404 1.404 0 0 1-1.4-1.4V4.734a1.404 1.404 0 0 1 1.4-1.4 1.404 1.404 0 0 1 1.402 1.4v3.507Zm-1.402 5.623a1.404 1.404 0 0 1 1.402 1.401 1.404 1.404 0 0 1-1.402 1.402 1.404 1.404 0 0 1-1.4-1.402v-1.4h1.4Zm0-.704a1.404 1.404 0 0 1-1.4-1.402 1.403 1.403 0 0 1 1.4-1.4h3.508a1.404 1.404 0 0 1 1.4 1.4 1.405 1.405 0 0 1-1.4 1.402h-3.508Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSlackIcon);
export default ForwardRef;
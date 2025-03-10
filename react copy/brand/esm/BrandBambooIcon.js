import * as React from "react";
function BrandBambooIcon({
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
    d: "M15.667 10.959h-2.91a.38.38 0 0 0-.383.323 2.4 2.4 0 0 1-2.369 2.06l.787 3.6a6.051 6.051 0 0 0 5.255-5.568.382.382 0 0 0-.38-.415Zm-5.036-.093 4.2-3.6a.378.378 0 0 0 0-.574l-4.2-3.599a.378.378 0 0 0-.627.282v7.2a.38.38 0 0 0 .626.291Zm-6.624.878a6.058 6.058 0 0 0 6 5.256v-3.657a2.387 2.387 0 0 1-2.392-2.384l-3.608.785Zm-.056-.844v.059h3.664a2.387 2.387 0 0 1 2.39-2.385l-.786-3.599A6.049 6.049 0 0 0 3.95 10.9Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandBambooIcon);
export default ForwardRef;
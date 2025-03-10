import * as React from "react";
function BrandWindowsIcon({
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
    d: "M4 9.793h5.793V4H4v5.793Zm6.207 0H16V4h-5.793v5.793ZM4 16h5.793v-5.793H4V16Zm6.207 0H16v-5.793h-5.793V16Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandWindowsIcon);
export default ForwardRef;
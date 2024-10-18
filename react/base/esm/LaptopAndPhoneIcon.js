import * as React from "react";
function LaptopAndPhoneIcon({
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
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16.042 6.04v-.416c0-.92-.746-1.667-1.666-1.667H6.459c-.92 0-1.667.746-1.667 1.667v7.083m0 0h-.179a.625.625 0 0 0-.625.625c0 1.036.84 1.875 1.875 1.875h2.68m-3.75-2.5h3.75m4.791 1.458h.008m-1.05 1.875h2.084c.92 0 1.667-.746 1.667-1.666V9.79c0-.92-.747-1.666-1.667-1.666h-2.083c-.921 0-1.667.746-1.667 1.666v4.584c0 .92.746 1.666 1.667 1.666Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LaptopAndPhoneIcon);
export default ForwardRef;
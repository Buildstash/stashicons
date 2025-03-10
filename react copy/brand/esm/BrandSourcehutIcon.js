import * as React from "react";
function BrandSourcehutIcon({
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
    d: "M10 4c-3.314 0-6 2.686-6 6 0 3.315 2.686 6 6 6 3.315 0 6-2.685 6-6 0-3.314-2.685-6-6-6Zm0 10.838a4.838 4.838 0 1 1-.002-9.676A4.838 4.838 0 0 1 10 14.839Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSourcehutIcon);
export default ForwardRef;
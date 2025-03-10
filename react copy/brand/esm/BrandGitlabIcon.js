import * as React from "react";
function BrandGitlabIcon({
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
    d: "m15.8 8.796-.016-.043L14.15 4.49a.426.426 0 0 0-.422-.268.438.438 0 0 0-.246.092.438.438 0 0 0-.145.22L12.234 7.91H7.768L6.665 4.534a.429.429 0 0 0-.813-.045L4.216 8.75l-.017.043A3.033 3.033 0 0 0 5.205 12.3l.006.005.015.01 2.488 1.864 1.232.931.75.566a.504.504 0 0 0 .61 0l.75-.566 1.23-.931 2.504-1.875.006-.005A3.035 3.035 0 0 0 15.8 8.796Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGitlabIcon);
export default ForwardRef;
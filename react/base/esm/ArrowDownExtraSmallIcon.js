import * as React from "react";
function ArrowDownExtraSmallIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m6 8.5 3-4H3l3 4Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownExtraSmallIcon);
export default ForwardRef;
import * as React from "react";
function XSmallIcon({
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
    fillRule: "evenodd",
    d: "M5.97 5.97a.75.75 0 0 1 1.06 0L10 8.94l2.97-2.97a.75.75 0 1 1 1.06 1.06L11.06 10l2.97 2.97a.75.75 0 1 1-1.06 1.06L10 11.06l-2.97 2.97a.75.75 0 0 1-1.06-1.06L8.94 10 5.97 7.03a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(XSmallIcon);
export default ForwardRef;
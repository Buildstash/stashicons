import * as React from "react";
function ChevronRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 21",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.407 7.447a.75.75 0 0 1 1.06-.04l2.917 2.709a.75.75 0 0 1 0 1.099l-2.917 2.708a.75.75 0 0 1-1.02-1.099l2.325-2.159-2.325-2.158a.75.75 0 0 1-.04-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronRightIcon);
export default ForwardRef;
import * as React from "react";
function PlusCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.05 3.05a7 7 0 1 0 9.9 9.9 7 7 0 0 0-9.9-9.9Zm2.122 4.2a.75.75 0 0 0 0 1.5H7.25v2.078a.75.75 0 1 0 1.5 0V8.75h2.078a.75.75 0 1 0 0-1.5H8.75V5.172a.75.75 0 0 0-1.5 0V7.25H5.172Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PlusCircleIcon);
export default ForwardRef;
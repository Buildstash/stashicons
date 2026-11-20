import * as React from "react";
function BrandTrelloIcon({
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
    d: "M14.573 4H5.427A1.43 1.43 0 0 0 4 5.426v9.148A1.43 1.43 0 0 0 5.426 16h9.148A1.43 1.43 0 0 0 16 14.573V5.427A1.43 1.43 0 0 0 14.573 4zM9.17 12.643a.476.476 0 0 1-.476.477h-2a.477.477 0 0 1-.477-.476V6.69a.476.476 0 0 1 .477-.477h2a.477.477 0 0 1 .476.477zm4.617-2.733a.472.472 0 0 1-.477.473h-2a.473.473 0 0 1-.476-.473V6.69a.476.476 0 0 1 .476-.477h2a.477.477 0 0 1 .476.477z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandTrelloIcon);
export default ForwardRef;
import * as React from "react";
function StreamIcon({
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
    d: "M3.207 6.458A2.417 2.417 0 0 1 5.624 4.04h8.75a2.417 2.417 0 0 1 2.416 2.417v7.083a2.417 2.417 0 0 1-2.416 2.417h-.417a.75.75 0 0 1 0-1.5h.417c.506 0 .916-.41.916-.917V6.458a.917.917 0 0 0-.916-.917h-8.75a.917.917 0 0 0-.917.917v7.083c0 .506.41.917.917.917h.416a.75.75 0 0 1 0 1.5h-.416a2.417 2.417 0 0 1-2.417-2.417V6.458Zm9.944 5.389a4.458 4.458 0 0 0-6.305 0 .75.75 0 0 1-1.06-1.06 5.958 5.958 0 0 1 8.426 0 .75.75 0 1 1-1.06 1.06Zm-1.768 1.768a1.958 1.958 0 0 0-2.769 0 .75.75 0 1 1-1.06-1.061 3.458 3.458 0 0 1 4.89 0 .75.75 0 0 1-1.06 1.06ZM10 14.249a.75.75 0 0 1 .75.75v.009a.75.75 0 0 1-1.5 0v-.009a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StreamIcon);
export default ForwardRef;
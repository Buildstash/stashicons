import * as React from "react";
function UploadIcon({
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
    d: "M9.999 3.209a.75.75 0 0 1 .55.24l2.708 2.916a.75.75 0 1 1-1.1 1.021L10.75 5.869v6.007a.75.75 0 0 1-1.5 0V5.869L7.84 7.386a.75.75 0 1 1-1.1-1.02l2.71-2.917a.75.75 0 0 1 .549-.24Zm-6.042 8.333a.75.75 0 0 1 .75.75v1.25c0 .967.784 1.75 1.75 1.75h7.083a1.75 1.75 0 0 0 1.75-1.75v-1.25a.75.75 0 0 1 1.5 0v1.25a3.25 3.25 0 0 1-3.25 3.25H6.457a3.25 3.25 0 0 1-3.25-3.25v-1.25a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UploadIcon);
export default ForwardRef;
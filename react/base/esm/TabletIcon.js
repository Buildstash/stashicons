import * as React from "react";
function TabletIcon({
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
    d: "M3.333 5.625q0-2.292 2.292-2.292h8.75q2.292 0 2.292 2.292v8.75q0 2.292-2.292 2.292h-8.75q-2.292 0-2.292-2.292Zm1.25 0v8.75q0 1.042 1.042 1.042h8.75q1.042 0 1.042-1.042v-8.75q0-1.042-1.042-1.042h-8.75q-1.042 0-1.042 1.042Zm5.625 8.958h-.416q-.625 0-.625-.625t.625-.625h.416q.625 0 .625.625t-.625.625Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TabletIcon);
export default ForwardRef;
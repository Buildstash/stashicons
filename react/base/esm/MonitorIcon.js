import * as React from "react";
function MonitorIcon({
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
    d: "M3.333 5.625q0-2.292 2.292-2.292h8.75q2.292 0 2.292 2.292v6.25q0 2.292-2.292 2.292h-3.521l2.182 1.342q.532.328.205.86-.164.266-.379.318-.215.051-.481-.113L10 15.109l-2.381 1.465q-.266.164-.481.113-.215-.052-.379-.318-.327-.532.205-.86l2.182-1.342H5.625q-2.292 0-2.292-2.292Zm1.25 0v6.25q0 1.042 1.042 1.042h8.75q1.042 0 1.042-1.042v-6.25q0-1.042-1.042-1.042h-8.75q-1.042 0-1.042 1.042Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MonitorIcon);
export default ForwardRef;
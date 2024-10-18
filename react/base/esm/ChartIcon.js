import * as React from "react";
function ChartIcon({
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
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.25,
    d: "M3.96 5.626c0-.92.747-1.667 1.668-1.667h8.75c.92 0 1.666.746 1.666 1.667v8.75c0 .92-.746 1.666-1.666 1.666h-8.75c-.92 0-1.667-.746-1.667-1.666v-8.75ZM7.29 12.709v-2.057M12.71 12.709v-2.057M10 12.708V7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChartIcon);
export default ForwardRef;
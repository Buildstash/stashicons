import * as React from "react";
function BrandGooglePlayIcon({
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
    d: "m15.579 10.723-2.183 1.235-1.957-1.945 1.973-1.96 2.167 1.225a.83.83 0 0 1 0 1.445ZM4.062 3.833A.827.827 0 0 0 4 4.148v11.703c0 .121.025.233.069.334l6.212-6.174-6.219-6.18Zm6.798 5.604 1.814-1.803-7.435-4.208a.816.816 0 0 0-.527-.1l6.148 6.111Zm0 1.151-6.126 6.088c.166.02.341-.009.505-.102l7.42-4.198-1.8-1.788Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGooglePlayIcon);
export default ForwardRef;
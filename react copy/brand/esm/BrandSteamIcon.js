import * as React from "react";
function BrandSteamIcon({
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
    d: "M9.99 4A5.999 5.999 0 0 0 4.01 9.518l3.216 1.33c.272-.186.601-.296.956-.296.031 0 .062.003.094.004l1.43-2.071v-.03a2.264 2.264 0 0 1 2.262-2.262 2.266 2.266 0 0 1 2.263 2.264 2.265 2.265 0 0 1-2.262 2.262h-.053l-2.038 1.456.002.079a1.696 1.696 0 0 1-3.36.335l-2.303-.954A6 6 0 1 0 9.989 4Zm-2.22 9.105-.737-.305c.131.271.357.5.657.625a1.276 1.276 0 0 0 .98-2.354 1.274 1.274 0 0 0-.939-.014l.762.314a.939.939 0 0 1-.723 1.734Zm5.707-4.652a1.509 1.509 0 1 0-1.507 1.508c.832 0 1.507-.675 1.507-1.507Zm-2.636-.002a1.132 1.132 0 1 1 2.264-.002 1.132 1.132 0 0 1-2.264.002Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSteamIcon);
export default ForwardRef;
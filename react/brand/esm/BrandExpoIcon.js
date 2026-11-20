import * as React from "react";
function BrandExpoIcon({
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
    d: "M4 14.042c.021.265.115.531.359.889.29.424.788.657 1.151.283.246-.252 2.898-4.888 4.176-6.645a.38.38 0 0 1 .624 0c1.278 1.757 3.93 6.393 4.175 6.645.363.374.861.141 1.151-.283.285-.417.364-.71.364-1.023 0-.213-4.13-7.899-4.546-8.539-.4-.615-.522-.749-1.198-.771H9.74c-.677.022-.799.155-1.2.771-.406.627-4.375 8.01-4.54 8.516Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandExpoIcon);
export default ForwardRef;
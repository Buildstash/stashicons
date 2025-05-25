import * as React from "react";
function BrandAzureDevopsIcon({
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
    d: "m16.002 13.559-3 2.46-4.653-1.695v1.68L5.715 12.56l7.676.601V6.628l.053-.01-.053-.032V6.58l2.611-.33v7.308Zm-2.61-6.973v.042l-7.7 1.55v4.435l-1.694-.75V8.404l1.185-1.523 3.954-1.163V4l4.254 2.586Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAzureDevopsIcon);
export default ForwardRef;
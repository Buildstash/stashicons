import * as React from "react";
function BrandShortcutIcon({
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
    d: "M7.832 4.274H16l-3.698 3.948 3.627 3.518-3.737 3.989L4 15.727l3.713-3.964-3.612-3.504Zm.548 8.136L6.142 14.8h4.703Zm3.595 2.193 2.652-2.832-2.96-2.87-2.652 2.831ZM11 8.253 8.055 5.396 5.403 8.228l2.946 2.857Zm.635-.678 2.223-2.372H9.189Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandShortcutIcon);
export default ForwardRef;
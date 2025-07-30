import * as React from "react";
function BrandVoidLinuxIcon({
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
    d: "M12.227 10a2.228 2.228 0 1 1-4.455 0 2.228 2.228 0 0 1 4.455 0Zm1.855 5.676-1.59-1.59A4.79 4.79 0 0 1 10 14.79 4.79 4.79 0 0 1 5.21 10a4.79 4.79 0 0 1 .705-2.49L4.322 5.917A7 7 0 0 0 3 10a7 7 0 0 0 7 7 7 7 0 0 0 4.082-1.324ZM10 3a7 7 0 0 0-4.082 1.324L7.51 5.913A4.79 4.79 0 0 1 10 5.21 4.79 4.79 0 0 1 14.79 10a4.79 4.79 0 0 1-.705 2.49l1.593 1.593A7 7 0 0 0 17 10a7 7 0 0 0-7-7Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandVoidLinuxIcon);
export default ForwardRef;
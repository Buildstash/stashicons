import * as React from "react";
function BrandAuth0Icon({
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
    d: "M15.822 7.345 14.445 3H5.536L4.179 7.345c-.79 2.515.017 5.37 2.225 7.008l3.6 2.647 3.592-2.655c2.19-1.64 3.023-4.485 2.225-7.01l-3.593 2.673 1.367 4.345-3.592-2.681-3.592 2.671 1.375-4.335-3.61-2.655 4.452-.026L10.005 3l1.374 4.319 4.443.026Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAuth0Icon);
export default ForwardRef;
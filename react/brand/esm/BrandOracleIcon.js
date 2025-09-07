import * as React from "react";
function BrandOracleIcon({
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
    d: "M7.373 14.744h5.51c2.62-.064 4.68-2.252 4.616-4.856a4.75 4.75 0 0 0-4.616-4.631h-5.51c-2.62-.064-4.808 1.996-4.871 4.615a4.732 4.732 0 0 0 4.615 4.856c.08.016.16.016.256.016Zm5.382-1.677h-5.27c-1.693-.048-3.019-1.47-2.971-3.163.064-1.613 1.358-2.923 2.97-2.97h5.271c1.693-.048 3.115 1.277 3.162 2.97.048 1.693-1.277 3.115-2.97 3.163h-.192Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandOracleIcon);
export default ForwardRef;
const React = require("react");
function BrandIbmAixIcon({
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
    d: "M7.981 12.98H6.63l-.428-1.437H4.209l-.428 1.436H2.465L4.43 6.94H6.04l1.941 6.04Zm3.438-4.994h-.77v3.946h.77v1.047h-2.84v-1.046h.77V7.985h-.77V6.94h2.84v1.047Zm3.334.995h.026l1.18-2.042h1.402l-1.839 2.943 1.943 3.097H15.96l-1.292-2.223h-.026l-1.258 2.223h-1.402l1.916-3.124-1.822-2.916h1.514l1.163 2.042ZM4.516 10.428h1.37l-.667-2.293h-.043l-.66 2.293Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandIbmAixIcon);
module.exports = ForwardRef;
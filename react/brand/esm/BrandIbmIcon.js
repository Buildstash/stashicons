import * as React from "react";
function BrandIbmIcon({
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
    d: "M10.81 7.016V8.23h.862v3.543h-.862v1.212h2.107V9.548l1.226 3.437 1.25-3.437v3.436H17.5v-1.212h-.862V8.229h.862V7.016h-2.386l-.965 2.66-.953-2.66zM2.5 7.016V8.23h.862v3.543H2.5v1.212h2.921v-1.212h-.814V8.229h.814V7.016zM5.87 7.016V8.23h.814v3.543H5.87v1.212h3.123c.77 0 1.534-.69 1.534-1.471v-.106a1.472 1.472 0 0 0-1.023-1.404 1.472 1.472 0 0 0 1.023-1.405v-.106c0-.782-.602-1.417-1.37-1.471L7.92 7.016H6.684zM7.92 8.23h1.237v1.163H7.92zm0 2.376h1.237v1.167H7.92z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandIbmIcon);
export default ForwardRef;
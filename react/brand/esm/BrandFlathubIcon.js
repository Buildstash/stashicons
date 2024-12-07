import * as React from "react";
function BrandFlathubIcon({
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
    d: "M7.017 3.967a3.017 3.017 0 1 0 0 6.033 3.017 3.017 0 0 0 0-6.033Zm4.601.04a.832.832 0 0 0-.832.832v4.098a.833.833 0 0 0 1.249.721l3.548-2.048a.832.832 0 0 0 0-1.443l-.524-.303-3.024-1.745a.835.835 0 0 0-.417-.112Zm1.797 6.604a.41.41 0 0 0-.41.411v1.233h-1.234a.41.41 0 1 0 0 .822h1.234v1.234a.411.411 0 1 0 .822 0v-1.233h1.233a.411.411 0 0 0 0-.822h-1.233v-1.234a.409.409 0 0 0-.412-.411Zm-8.008.143A1.406 1.406 0 0 0 4 12.162v2.464c0 .779.627 1.407 1.408 1.407H7.87c.78 0 1.408-.628 1.408-1.407v-2.464c0-.78-.628-1.408-1.408-1.408H5.407Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandFlathubIcon);
export default ForwardRef;
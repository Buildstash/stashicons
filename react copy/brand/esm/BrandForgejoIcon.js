import * as React from "react";
function BrandForgejoIcon({
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
    d: "M12.489 3.748A1.511 1.511 0 1 1 11.17 6h-.697a2.222 2.222 0 0 0-2.222 2.185V9.29a3.686 3.686 0 0 1 2.16-.74H11.172a1.51 1.51 0 1 1 0 1.48h-.697a2.222 2.222 0 0 0-2.222 2.186v1.208a1.51 1.51 0 1 1-1.482 0v-5.2a3.704 3.704 0 0 1 3.643-3.704h.758c.26-.46.752-.771 1.318-.771ZM7.51 14.118a.622.622 0 1 0 0 1.245.622.622 0 0 0 0-1.245Zm4.978-5.451a.622.622 0 1 0 0 1.244.622.622 0 0 0 0-1.244Zm0-4.03a.622.622 0 1 0 0 1.244.622.622 0 0 0 0-1.244Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandForgejoIcon);
export default ForwardRef;
const React = require("react");
function BrandPikeOsIcon({
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
    d: "M15.326 3.27a1.991 1.991 0 0 1 1.94 1.99v10.018l-.001.052-.015.195a1.99 1.99 0 0 1-1.924 1.744H5.257l-.2-.01a1.992 1.992 0 0 1-1.776-1.73l-.014-.199-.001-.052V5.261c0-1.03.783-1.879 1.787-1.98l.204-.011H15.326Zm-10.07 1a.992.992 0 0 0-.99.99V15.317c.02.53.456.954.99.954h10.006l.05-.001a.99.99 0 0 0 .952-.953l.002-.038V5.261a.992.992 0 0 0-.953-.991H5.256Zm2.488 1.598c.544 0 .956.037 1.234.11.28.074.527.212.74.416.373.352.56.797.56 1.334 0 .575-.2 1.03-.598 1.367-.399.336-.936.505-1.612.505h-.81v2.268h-.98v-6h1.466Zm-.486 2.853h.722c.9 0 1.351-.335 1.351-1.005 0-.648-.465-.973-1.393-.973h-.68v1.978Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPikeOsIcon);
module.exports = ForwardRef;
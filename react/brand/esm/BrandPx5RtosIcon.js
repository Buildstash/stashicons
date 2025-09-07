import * as React from "react";
function BrandPx5RtosIcon({
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
    d: "M13.86 13.32h-2.603l-1.342-1.628 1.297-1.583 2.647 3.21Zm-5.385-.089H5.872l5.295-6.462h2.603l-5.295 6.462Zm8.435-3.95h-2.962v.45h1.84a1.212 1.212 0 1 1 0 2.423h-1.625a1.112 1.112 0 0 1-1.111-1.112v-.145h.896v.145c0 .118.097.214.215.215h1.625a.315.315 0 0 0 0-.628h-2.736V8.384h3.858v.898ZM5.737 8.296a1.301 1.301 0 0 1 0 2.602h-1.84v1.167H3V10h2.737a.403.403 0 1 0 0-.808h-1.84v.54H3V8.294h2.737Zm3.99.012L8.429 9.89 5.782 6.68h2.603l1.342 1.627Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPx5RtosIcon);
export default ForwardRef;
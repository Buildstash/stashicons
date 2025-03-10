import * as React from "react";
function BrandXiaomiIcon({
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
    d: "M10 4c-1.992 0-3.622.128-4.753 1.258C4.115 6.388 4 8.017 4 10.006c0 1.99.115 3.617 1.247 4.748C6.378 15.886 8.008 16 10 16s3.621-.115 4.753-1.245C15.885 13.623 16 11.995 16 10.006c0-1.992-.117-3.622-1.251-4.752C13.617 4.126 11.989 4 10 4ZM6.453 7.702h2.812c.735 0 1.503.035 1.882.414.373.373.413 1.117.415 1.838v2.27a.075.075 0 0 1-.076.073h-.974a.075.075 0 0 1-.076-.074V9.915c0-.403-.024-.817-.232-1.025-.179-.18-.513-.221-.86-.23H7.58a.075.075 0 0 0-.075.074v3.49a.075.075 0 0 1-.076.074h-.975a.075.075 0 0 1-.075-.074V7.777a.075.075 0 0 1 .075-.075Zm6.065 0h.975a.075.075 0 0 1 .075.075v4.446a.075.075 0 0 1-.075.074h-.975a.075.075 0 0 1-.075-.074V7.777a.076.076 0 0 1 .022-.053.074.074 0 0 1 .053-.022ZM8.46 9.474h1.023c.041 0 .075.033.075.073v2.676a.075.075 0 0 1-.075.074H8.46a.077.077 0 0 1-.053-.02.074.074 0 0 1-.023-.053V9.546a.075.075 0 0 1 .076-.073Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandXiaomiIcon);
export default ForwardRef;
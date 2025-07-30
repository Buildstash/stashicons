import * as React from "react";
function BrandLgIcon({
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
    d: "M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm4.18 11.189a5.881 5.881 0 0 0 1.734-4.182v-.32h-4.187v.654h3.521l-.001.02a5.272 5.272 0 0 1-5.246 4.906 5.226 5.226 0 0 1-3.719-1.541 5.228 5.228 0 0 1-1.54-3.72c0-1.403.548-2.723 1.54-3.717A5.227 5.227 0 0 1 10 4.749l.333.004v-.655l-.332-.004a5.92 5.92 0 0 0-5.913 5.913c0 1.58.615 3.064 1.731 4.182A5.879 5.879 0 0 0 10 15.922a5.88 5.88 0 0 0 4.183-1.733m-3.85-1.716v-5.59h-.665v6.245h2.059v-.655h-1.394Zm-1.673-4.7a.894.894 0 1 0-1.789-.005.894.894 0 0 0 1.789.005Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandLgIcon);
export default ForwardRef;
import * as React from "react";
function BrandChromeWebstoreIcon({
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
    d: "M4 4.819v9.545c0 .45.368.818.818.818h.066a5.15 5.15 0 0 1 .769-3.638l2.1 3.638h.564A1.885 1.885 0 0 1 10 12.479a1.885 1.885 0 0 1 1.683 2.703h.524a2.35 2.35 0 0 0-.793-2.703h3.415a5.17 5.17 0 0 1 .288 2.703h.065a.82.82 0 0 0 .818-.818V4.819H4Zm4.636 1.09h2.728a.545.545 0 1 1 0 1.091H8.636a.546.546 0 0 1 0-1.09ZM10 9.182a5.18 5.18 0 0 1 4.617 2.826H10a2.355 2.355 0 0 0-2.338 2.075l-1.707-2.958A5.17 5.17 0 0 1 10 9.182Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandChromeWebstoreIcon);
export default ForwardRef;
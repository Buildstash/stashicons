import * as React from "react";
function BrandGithubIcon({
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
    d: "M10 4.148a6 6 0 0 0-1.898 11.693c.3.056.41-.13.41-.289 0-.142-.005-.52-.007-1.02-1.669.362-2.021-.805-2.021-.805-.273-.692-.668-.877-.668-.877-.543-.372.043-.365.043-.365.602.042.918.618.918.618.535.918 1.405.653 1.748.5.054-.389.208-.653.38-.803-1.332-.15-2.733-.666-2.733-2.965 0-.655.232-1.19.618-1.61-.068-.152-.27-.762.052-1.588 0 0 .503-.161 1.65.615.48-.134.99-.2 1.5-.203.51.003 1.02.07 1.5.203 1.14-.776 1.642-.615 1.642-.615.323.826.12 1.436.06 1.588.383.42.615.955.615 1.61 0 2.305-1.402 2.812-2.737 2.96.21.18.405.548.405 1.11 0 .803-.008 1.448-.008 1.643 0 .157.106.345.413.285A5.98 5.98 0 0 0 16 10.148a6 6 0 0 0-6-6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGithubIcon);
export default ForwardRef;
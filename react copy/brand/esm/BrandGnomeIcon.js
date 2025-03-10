import * as React from "react";
function BrandGnomeIcon({
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
    d: "M14.493 3c-2.91 0-3.457 4.148-1.82 4.148 1.64 0 4.733-4.148 1.82-4.148Zm-4.499.509c-.046 0-.095.002-.146.009-1.64.212-1.061 3.063-.189 3.115.845.053 1.769-3.12.335-3.124ZM7.155 4.635a.817.817 0 0 0-.285.067c-1.317.544-.2 2.786.538 2.636.68-.14.769-2.726-.253-2.703Zm-2.1 1.76a.613.613 0 0 0-.37.125c-1.054.728.354 2.49.975 2.216.542-.24.197-2.314-.605-2.342Zm5.852 1.346c-2.237.02-5.084 1.154-5.58 3.374C4.775 13.582 7.593 17 10.533 17c1.446 0 3.115-1.307 3.427-2.962.238-1.261-2.806-.755-2.697.08.131 1-.734 1.494-1.581.848-2.697-2.053 4.467-3.077 3.994-5.883-.154-.91-1.336-1.354-2.77-1.342Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGnomeIcon);
export default ForwardRef;
import * as React from "react";
function BrandKaiOsIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.67 4a1.837 1.837 0 1 0 .027 3.674A1.837 1.837 0 0 0 12.671 4Zm-6.358.08a1.373 1.373 0 0 0-1.374 1.374v9.083a1.374 1.374 0 1 0 2.747 0V5.454A1.374 1.374 0 0 0 6.312 4.08Zm3.474 3.604A1.364 1.364 0 0 0 8.668 9.83l3.905 5.577a1.362 1.362 0 0 0 1.907.345 1.366 1.366 0 0 0 .329-1.91l-3.906-5.577a1.364 1.364 0 0 0-1.117-.582Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h12v12H4z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandKaiOsIcon);
export default ForwardRef;
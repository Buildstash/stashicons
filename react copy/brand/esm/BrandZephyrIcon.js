import * as React from "react";
function BrandZephyrIcon({
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
    d: "m9.886 11.823-1.603.677 1.363.688.24-1.365ZM6.426 12.72l-1.71-.64.397 1.344 1.313-.704Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.237 11.517 1.046.983-1.857.22.81-1.203ZM4.923 10.594l-.206 1.486-1.292-1.29 1.498-.196ZM9.886 11.823l4.218-3.88L16 10.456l-6.114 1.367Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9.886 11.823 1.801-5.71 2.417 1.83-4.218 3.88Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.687 6.114H16l-1.896 1.829-2.417-1.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10.456V6.114l-1.896 1.829L16 10.456Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandZephyrIcon);
export default ForwardRef;
import * as React from "react";
function EyeIcon({
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
    fillRule: "evenodd",
    d: "M4.708 9.977 4.707 10l.001.022a2.331 2.331 0 0 0 .049.263c.04.164.104.37.197.605.186.47.478 1.03.896 1.565.826 1.055 2.133 2.004 4.149 2.004 2.015 0 3.322-.949 4.149-2.004.418-.534.71-1.094.895-1.565.093-.235.157-.441.197-.605a2.335 2.335 0 0 0 .049-.263L15.29 10l-.001-.022a2.337 2.337 0 0 0-.049-.263 4.766 4.766 0 0 0-.197-.604 6.376 6.376 0 0 0-.895-1.565c-.826-1.056-2.134-2.004-4.15-2.004-2.015 0-3.322.948-4.148 2.004a6.379 6.379 0 0 0-.896 1.565 4.767 4.767 0 0 0-.197.605 2.334 2.334 0 0 0-.049.262Zm-.04-3.357c1.05-1.34 2.763-2.579 5.33-2.579 2.569 0 4.282 1.24 5.33 2.58.52.663.88 1.353 1.11 1.937.221.56.352 1.093.352 1.441 0 .349-.13.882-.352 1.441a7.878 7.878 0 0 1-1.11 1.938c-1.048 1.34-2.761 2.58-5.33 2.58-2.567 0-4.28-1.24-5.33-2.58A7.878 7.878 0 0 1 3.56 11.44c-.22-.559-.352-1.092-.352-1.44 0-.349.131-.882.352-1.442.23-.584.59-1.274 1.11-1.938Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.999 8.874a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM7.374 10a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EyeIcon);
export default ForwardRef;
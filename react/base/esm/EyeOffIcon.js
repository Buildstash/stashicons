import * as React from "react";
function EyeOffIcon({
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
    d: "M4.708 9.979 4.707 10l.002.03a2.827 2.827 0 0 0 .072.347 6.184 6.184 0 0 0 1.575 2.642.75.75 0 0 1-1.048 1.075A7.685 7.685 0 0 1 3.7 11.773c-.316-.7-.492-1.37-.492-1.772 0-.349.131-.882.352-1.441.23-.584.59-1.274 1.11-1.938 1.048-1.34 2.762-2.58 5.33-2.58 1.663 0 2.98.522 3.992 1.27a.75.75 0 0 1-.892 1.206c-.765-.566-1.773-.976-3.1-.976-2.016 0-3.323.949-4.15 2.004a6.379 6.379 0 0 0-.895 1.565 4.767 4.767 0 0 0-.197.605 2.334 2.334 0 0 0-.049.263ZM15.19 7.66a.75.75 0 0 1 1.003.344c.202.413.348.801.444 1.132.092.315.153.624.153.865 0 .348-.13.882-.352 1.44a7.878 7.878 0 0 1-1.11 1.938c-1.048 1.34-2.761 2.58-5.33 2.58a7.099 7.099 0 0 1-1.862-.24.75.75 0 1 1 .392-1.447 5.6 5.6 0 0 0 1.47.187c2.016 0 3.324-.948 4.15-2.004.418-.534.71-1.094.895-1.565.093-.234.157-.441.197-.605a2.335 2.335 0 0 0 .049-.262.434.434 0 0 0 .001-.022v-.01l-.002-.027a3.135 3.135 0 0 0-.09-.407 5.72 5.72 0 0 0-.352-.893.75.75 0 0 1 .344-1.004Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.57 3.429a.75.75 0 0 1 0 1.06L4.488 16.573a.75.75 0 0 1-1.06-1.061L15.51 3.429a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.794 9.205a1.125 1.125 0 0 0-1.59 1.591.75.75 0 0 1-1.061 1.06 2.625 2.625 0 1 1 3.712-3.711.75.75 0 0 1-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EyeOffIcon);
export default ForwardRef;
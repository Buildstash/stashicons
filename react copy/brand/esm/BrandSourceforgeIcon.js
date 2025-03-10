import * as React from "react";
function BrandSourceforgeIcon({
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
    d: "M8.832 3.854a.202.202 0 0 0-.14.06L3.059 9.543c-.08.075-.08.201 0 .28l5.339 5.33a.185.185 0 0 0 .14.06.201.201 0 0 0 .14-.06l.798-.809c.08-.074.08-.2 0-.28L5.292 9.878a.273.273 0 0 1 0-.387l5.296-5.296c.07-.07.065-.159.042-.22a.196.196 0 0 0-.182-.12H8.832Zm2.643.93a.204.204 0 0 0-.14.06l-.812.813c-.08.075-.08.2 0 .28l4.184 4.19c.05.05.08.12.08.191 0 .07-.03.14-.08.191L9.41 15.805a.201.201 0 0 0-.042.22c.023.056.084.12.182.12v-.004h1.616a.197.197 0 0 0 .14-.056l5.633-5.631a.184.184 0 0 0 .06-.14.202.202 0 0 0-.06-.14l-5.325-5.33a.185.185 0 0 0-.14-.06ZM9.67 6.623a.13.13 0 0 0-.123.14c.085 1.293-1.541 1.611-1.541 3.643v.014c0 1.237.935 2.24 2.088 2.24 1.154 0 2.088-1.003 2.088-2.24v-.014c0-.575-.215-1.122-.434-1.532-.043-.08-.17-.051-.155.023.392 1.747-.593 2.83-.593 1.485 0-2.293-.813-3.334-1.243-3.727a.12.12 0 0 0-.087-.032Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSourceforgeIcon);
export default ForwardRef;
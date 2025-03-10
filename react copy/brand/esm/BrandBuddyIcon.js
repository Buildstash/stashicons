import * as React from "react";
function BrandBuddyIcon({
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
    d: "m15.467 6.228-4.934-2.849a1.066 1.066 0 0 0-1.066 0L4.533 6.227A1.066 1.066 0 0 0 4 7.15v5.698c0 .38.203.733.533.923l4.934 2.85a1.066 1.066 0 0 0 1.066 0l4.934-2.85c.33-.19.533-.542.533-.923V7.151c0-.38-.204-.733-.533-.923Zm-4.199 4.37L9.124 12.74l-.762-.761 2.144-2.145L8.362 7.69l.761-.76 2.145 2.144.76.76-.76.763Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandBuddyIcon);
export default ForwardRef;
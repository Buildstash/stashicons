import * as React from "react";
function BrandCirrusCiIcon({
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
    d: "M13.711 4.226a.556.556 0 0 0-.556.558.556.556 0 0 0 .556.557 1.17 1.17 0 0 1 1.174 1.181 1.17 1.17 0 0 1-1.174 1.182H4.556A.556.556 0 0 0 4 8.26a.556.556 0 0 0 .556.558h9.155A1.17 1.17 0 0 1 14.886 10a1.17 1.17 0 0 1-1.174 1.181H4.555A.556.556 0 0 0 4 11.74a.556.556 0 0 0 .556.556h9.155a1.17 1.17 0 0 1 1.175 1.181 1.17 1.17 0 0 1-1.174 1.182H4.555a.556.556 0 0 0-.556.557.556.556 0 0 0 .556.557h9.155a.556.556 0 0 0 .103-.01A2.296 2.296 0 0 0 16 13.476c0-.696-.32-1.317-.815-1.739A2.288 2.288 0 0 0 16 10c0-.697-.322-1.316-.815-1.738A2.287 2.287 0 0 0 16 6.521c0-1.26-1.03-2.296-2.289-2.296z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCirrusCiIcon);
export default ForwardRef;
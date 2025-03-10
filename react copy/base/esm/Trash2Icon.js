import * as React from "react";
function Trash2Icon({
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
    d: "M8.96 4.709a.917.917 0 0 0-.917.917v.083h3.083v-.083a.917.917 0 0 0-.916-.917H8.96Zm3.666 1v-.083a2.417 2.417 0 0 0-2.416-2.417H8.96a2.417 2.417 0 0 0-2.417 2.417v.083H3.957a.75.75 0 0 0 0 1.5h.148l.642 7.376a2.417 2.417 0 0 0 2.407 2.207h4.86a2.417 2.417 0 0 0 2.409-2.207l.64-7.376h.144a.75.75 0 0 0 0-1.5h-2.58Zm.932 1.5H5.611l.63 7.246a.917.917 0 0 0 .913.837h4.86a.917.917 0 0 0 .914-.837l.63-7.246Zm-5.432 1a.75.75 0 0 1 .75.75v4.583a.75.75 0 0 1-1.5 0V8.96a.75.75 0 0 1 .75-.75Zm2.917 0a.75.75 0 0 1 .75.75v4.583a.75.75 0 0 1-1.5 0V8.96a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Trash2Icon);
export default ForwardRef;
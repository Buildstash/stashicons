import * as React from "react";
function BrandQnxIcon({
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
    d: "m6.62 11.447-1.04-1.039-.406.404 1.06 1.056.36.36.548.548.407-.403-.55-.55-.378-.377Zm-1.845.859c-1.313 0-2.218-.992-2.218-2.305 0-1.313.905-2.305 2.218-2.305s2.218.992 2.218 2.305c0 .332-.06.647-.168.927l.403.401c.207-.393.321-.848.321-1.328 0-1.533-1.163-2.774-2.774-2.774S2 8.467 2 10s1.164 2.775 2.775 2.775c.49 0 .938-.116 1.324-.32L5.74 12.1c-.285.132-.61.207-.965.207Zm7.399-4.987h.555v5.364h-.782L8.937 8.01v4.674h-.555V7.32h.778l3.014 4.675V7.32Zm4.558 3.578L16.095 10l.637-.897 1.266-1.784h-.681l-.875 1.232-.8 1.127-.8-1.127-.875-1.232h-.682l1.267 1.784.637.897-.637.897-1.268 1.786h.681l.877-1.235.8-1.127.8 1.127.877 1.235H18l-1.268-1.786Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandQnxIcon);
export default ForwardRef;
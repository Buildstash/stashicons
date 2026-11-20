const React = require("react");
function BrandMxLinuxIcon({
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
    d: "m10 10.65 1.639 1.91-.375.45-1.067-1.26-.565-.67.368-.43zm6-5.445v9.591a.593.593 0 0 1-.593.593H4.593A.593.593 0 0 1 4 14.796V5.205c0-.328.266-.594.593-.594h10.814c.328 0 .593.265.593.593zm-1.12 8.545-1.059-1.271-1.057-1.27-.293.351-1.625-1.894 2.457-2.865-.588-.504-2.38 2.775-2.372-2.764-.973.835 2.5 2.914-.365.425-.62-.732-1.692 2-1.693 2h9.76z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandMxLinuxIcon);
module.exports = ForwardRef;
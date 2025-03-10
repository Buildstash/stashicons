const React = require("react");
function BrandPlaystationPs2Icon({
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
    d: "M6.973 11.186v.195h2.762V8.814h2.53V8.62H9.522v2.567H6.973Zm10.832-2.372v1.08H13.01v1.487H18v-.195h-4.779V10.09H18v-1.47h-4.991v.195h4.796Zm-11.008 0v1.08H2v1.487h.195v-1.292h4.778v-1.47H2v.195h4.797Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPlaystationPs2Icon);
module.exports = ForwardRef;
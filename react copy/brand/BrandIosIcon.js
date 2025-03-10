const React = require("react");
function BrandIosIcon({
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
    d: "M4.02 12.841h.993V8.617H4.02v4.224Zm.495-4.778c.31 0 .554-.24.554-.539a.545.545 0 0 0-.554-.542.54.54 0 1 0 0 1.08Zm3.802-1.069c-1.678 0-2.73 1.144-2.73 2.974 0 1.829 1.052 2.969 2.73 2.969s2.726-1.14 2.726-2.97c0-1.829-1.052-2.973-2.726-2.973Zm0 .877c1.024 0 1.678.813 1.678 2.097 0 1.283-.654 2.092-1.678 2.092s-1.678-.813-1.678-2.092c0-1.28.65-2.097 1.678-2.097Zm3.144 3.352c.044 1.06.913 1.714 2.236 1.714 1.391 0 2.268-.686 2.268-1.778 0-.857-.494-1.339-1.662-1.606l-.661-.151c-.706-.167-.997-.39-.997-.773 0-.479.439-.797 1.088-.797.65 0 1.108.323 1.156.86h.98c-.024-1.012-.86-1.697-2.128-1.697-1.267 0-2.14.69-2.14 1.71 0 .82.502 1.33 1.563 1.573l.745.176c.725.171 1.02.41 1.02.825 0 .478-.482.82-1.176.82-.693 0-1.231-.346-1.295-.876h-.997Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandIosIcon);
module.exports = ForwardRef;
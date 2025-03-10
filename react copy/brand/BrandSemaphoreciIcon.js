const React = require("react");
function BrandSemaphoreciIcon({
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
    d: "M15.082 10.671 12.86 8.41a1.626 1.626 0 0 0-2.332 0l-1.76 1.79a.645.645 0 0 1-.92 0l-.873-.887L9.198 7.05a3.494 3.494 0 0 1 4.996 0l2.224 2.262-1.336 1.358ZM8.304 14a3.49 3.49 0 0 1-2.498-1.051l-2.224-2.256 1.33-1.353 2.224 2.256a1.635 1.635 0 0 0 2.33 0l1.761-1.79a.646.646 0 0 1 .921 0l.872.887-2.218 2.261A3.487 3.487 0 0 1 8.304 14Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSemaphoreciIcon);
module.exports = ForwardRef;
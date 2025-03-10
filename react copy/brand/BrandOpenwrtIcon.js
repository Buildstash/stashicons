const React = require("react");
function BrandOpenwrtIcon({
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
    d: "M10 3c-2.279 0-4.344.93-5.837 2.423l.989.99A6.836 6.836 0 0 1 10 4.405c1.89 0 3.607.765 4.848 2.006l.988-.989A8.237 8.237 0 0 0 10 3Zm0 2.52c-1.58 0-3.015.65-4.053 1.688l.99.988a4.326 4.326 0 0 1 6.127 0l.988-.988A5.725 5.725 0 0 0 10 5.52ZM5.492 7.711a5.691 5.691 0 0 0-1.232 3.55C4.26 14.42 6.84 17 10 17s5.74-2.579 5.74-5.74a5.75 5.75 0 0 0-1.232-3.549l-1 1c.524.717.835 1.6.835 2.55A4.349 4.349 0 0 1 10 15.603a4.35 4.35 0 0 1-4.344-4.344c0-.95.31-1.832.834-2.55l-.998-.999Zm4.508.33c-.883 0-1.688.36-2.279.942l.99.989a1.826 1.826 0 0 1 2.579 0l.989-.99a3.21 3.21 0 0 0-2.28-.94Zm0 2.269a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandOpenwrtIcon);
module.exports = ForwardRef;
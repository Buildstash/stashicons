const React = require("react");
function BrandAndroidIcon({
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
    d: "M12.762 10.956a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-5.522 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm5.702-3.01.998-1.73a.207.207 0 0 0-.01-.236.207.207 0 0 0-.224-.075.208.208 0 0 0-.127.103L12.57 7.76a6.277 6.277 0 0 0-5.138 0l-1.01-1.75a.208.208 0 1 0-.36.209l.997 1.729A5.892 5.892 0 0 0 4 12.667h12a5.893 5.893 0 0 0-3.06-4.721"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAndroidIcon);
module.exports = ForwardRef;
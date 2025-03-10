const React = require("react");
function BrandAtlassianIcon({
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
    d: "M7.152 9.465a.399.399 0 0 0-.677.074l-3.436 6.866a.41.41 0 0 0 .368.595h4.78a.395.395 0 0 0 .368-.228c1.032-2.13.407-5.372-1.404-7.308v.001ZM9.67 3.221a9.056 9.056 0 0 0-.53 8.94l2.306 4.612a.41.41 0 0 0 .367.226h4.78a.41.41 0 0 0 .368-.594L10.368 3.217a.388.388 0 0 0-.698.004Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAtlassianIcon);
module.exports = ForwardRef;
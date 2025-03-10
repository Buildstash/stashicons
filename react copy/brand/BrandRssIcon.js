const React = require("react");
function BrandRssIcon({
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
    d: "M13.6 16c0-5.267-4.333-9.6-9.6-9.6V4c6.582 0 12 5.418 12 12h-2.4Zm-7.954-3.293c.907 0 1.646.74 1.646 1.648 0 .906-.742 1.645-1.65 1.645A1.644 1.644 0 0 1 4 14.355c0-.908.737-1.647 1.646-1.648ZM11.954 16H9.622c0-3.085-2.537-5.623-5.622-5.623V8.046c4.364 0 7.954 3.592 7.954 7.955Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRssIcon);
module.exports = ForwardRef;
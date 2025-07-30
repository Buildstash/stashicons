const React = require("react");
function BrandTitanOsIcon({
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
    d: "m4.216 7.032 3.132.742a.253.253 0 0 1 .195.228l.579 8.325a.126.126 0 0 1-.126.135h-.157a.38.38 0 0 1-.373-.302L6.004 9.05a.19.19 0 0 0-.152-.148l-1.35-.255a.317.317 0 0 1-.25-.24l-.264-1.148a.19.19 0 0 1 .228-.227Zm11.662 0a.19.19 0 0 1 .23.227l-.266 1.148a.317.317 0 0 1-.25.24l-1.35.255a.19.19 0 0 0-.15.147l-1.464 7.11a.38.38 0 0 1-.373.303H12.1a.127.127 0 0 1-.127-.135l.58-8.325a.253.253 0 0 1 .195-.228l3.13-.742Zm.891-3.49a.19.19 0 0 1 .226.228l-.267 1.157a.319.319 0 0 1-.244.24l-5.52 1.162a.191.191 0 0 0-.15.174l-.442 6.635a.373.373 0 0 1-.743 0l-.443-6.635a.19.19 0 0 0-.15-.174l-5.52-1.163a.317.317 0 0 1-.244-.239L3.005 3.77a.19.19 0 0 1 .226-.228l6.334 1.392c.286.063.583.063.87 0l6.334-1.392Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandTitanOsIcon);
module.exports = ForwardRef;
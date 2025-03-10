const React = require("react");
function BrandAppleIcon({
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
    d: "M13.3 10.33c-.004-.956.428-1.677 1.303-2.208-.49-.7-1.23-1.086-2.206-1.162-.924-.073-1.935.54-2.305.54-.39 0-1.286-.514-1.99-.514-1.452.024-2.997 1.16-2.997 3.47 0 .681.125 1.386.375 2.114.334.955 1.537 3.3 2.792 3.26.656-.015 1.12-.466 1.974-.466.828 0 1.258.466 1.99.466 1.265-.018 2.354-2.148 2.672-3.107-1.698-.8-1.607-2.343-1.607-2.393Zm-1.473-4.276c.71-.844.646-1.612.625-1.888-.628.036-1.354.427-1.768.909-.456.515-.724 1.154-.667 1.872.68.052 1.3-.297 1.81-.893Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAppleIcon);
module.exports = ForwardRef;
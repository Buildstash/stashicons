const React = require("react");
function BrandJiraIcon({
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
    d: "M9.786 9.757H4a2.609 2.609 0 0 0 2.616 2.607h1.065v1.028A2.607 2.607 0 0 0 10.287 16v-5.741a.502.502 0 0 0-.502-.502Zm2.861-2.878H6.868a2.607 2.607 0 0 0 2.607 2.607h1.065v1.028a2.609 2.609 0 0 0 2.608 2.607V7.38a.5.5 0 0 0-.501-.5ZM15.507 4h-5.78a2.607 2.607 0 0 0 2.608 2.607h1.064v1.029A2.607 2.607 0 0 0 16 10.242v-5.74A.5.5 0 0 0 15.507 4Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandJiraIcon);
module.exports = ForwardRef;
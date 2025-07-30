const React = require("react");
function BrandHpUxIcon({
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
    d: "M14.235 7.86h-1.114l-1.562 4.282h1.116l1.56-4.283ZM10 17c-.07 0-.139-.002-.208-.003l1.43-3.932h1.97c.345 0 .724-.265.842-.59l1.552-4.263c.254-.698-.146-1.269-.888-1.269h-2.731L9.675 13.24h-.001l-1.299 3.57A7.003 7.003 0 0 1 8.11 3.258L6.77 6.943l-2.23 6.122h1.484l1.895-5.202h1.115L7.14 13.065h1.483l1.766-4.853c.254-.698-.146-1.269-.887-1.269H8.253l1.432-3.935A7 7 0 1 1 10 17Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandHpUxIcon);
module.exports = ForwardRef;
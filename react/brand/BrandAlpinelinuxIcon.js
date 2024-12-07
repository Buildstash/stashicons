const React = require("react");
function BrandAlpinelinuxIcon({
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
    d: "M6.999 4.803 4 10l2.999 5.196h6.002L16 10l-2.999-5.197H6.999ZM8.983 7.56l1.347 1.39.799.797h.001l1.205 1.18a2.5 2.5 0 0 1-.282.173c-.08.042-.162.078-.248.108a1.344 1.344 0 0 1-.391.073.824.824 0 0 1-.289-.053.474.474 0 0 1-.1-.057l-.531-.546-1.52-1.52-.55.526-1.534 1.536a.63.63 0 0 1-.218.092.83.83 0 0 1-.17.017 1.079 1.079 0 0 1-.391-.073 1.868 1.868 0 0 1-.248-.108 2.605 2.605 0 0 1-.282-.172L8.982 7.56Zm2.36.392 2.289 2.3.691.676c-.09.063-.184.12-.282.172-.08.042-.162.078-.247.108a1.34 1.34 0 0 1-.393.073.822.822 0 0 1-.168-.017.64.64 0 0 1-.193-.073.12.12 0 0 1-.026-.02l-.616-.61-1.056-1.055-.167.167-.78-.773.948-.949v.001Zm-2.983 2.06v1.265c-.06 0-.12-.007-.178-.018a1.377 1.377 0 0 1-.212-.058 1.841 1.841 0 0 1-.244-.107 2.6 2.6 0 0 1-.277-.17l.91-.912Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAlpinelinuxIcon);
module.exports = ForwardRef;
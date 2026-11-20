import * as React from "react";
function BrandTelegramIcon({
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
    d: "M9.972 4A6 6 0 0 0 4 10a6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6 6 6 0 0 0-.028 0zm2.481 3.612c.05-.001.16.011.233.07a.253.253 0 0 1 .085.163c.008.046.018.153.01.236-.09.949-.481 3.25-.68 4.313-.084.45-.25.6-.41.615-.348.033-.613-.23-.95-.451-.528-.346-.826-.562-1.339-.9-.592-.39-.208-.605.129-.955.088-.092 1.623-1.488 1.653-1.615.004-.016.008-.075-.027-.106s-.088-.02-.125-.012c-.053.012-.896.57-2.53 1.673-.24.164-.457.244-.652.24-.213-.004-.625-.121-.932-.22-.376-.123-.674-.188-.648-.395.013-.108.162-.219.446-.332a278.204 278.204 0 0 1 3.499-1.507c1.666-.693 2.013-.813 2.238-.817z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandTelegramIcon);
export default ForwardRef;
const React = require("react");
function BrandCloudbeesIcon({
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
    d: "M7.435 4C5.541 4 4 5.555 4 7.465c0 1.911 1.541 3.465 3.435 3.465H8.65V9.14H7.433a1.67 1.67 0 0 1-1.659-1.675c0-.924.744-1.674 1.66-1.674.367 0 .689.097.964.29l1.255-1.266C9.03 4.272 8.29 4 7.435 4V4Zm2.576 1.142c-.033-.002-.07.041-.175.13a.225.225 0 0 0-.014.013l-.961.964c-.162.16-.145.103-.033.284.172.266.264.577.266.896v5.116a3.453 3.453 0 1 0 6.906 0 3.455 3.455 0 0 0-3.452-3.457H10.88v-1.66c0-.765-.256-1.536-.718-2.128-.088-.104-.117-.154-.15-.158h-.001Zm2.623 5.74c.881.045 1.584.77 1.584 1.663 0 .923-.75 1.671-1.671 1.671a1.676 1.676 0 0 1-1.668-1.68V10.89h1.755v-.007Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCloudbeesIcon);
module.exports = ForwardRef;
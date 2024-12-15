const React = require("react");
function BrandPhabricatorIcon({
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
    d: "M16.522 8.843 13.94 6.248A5.421 5.421 0 0 0 10 4.554a5.425 5.425 0 0 0-3.94 1.694L3.48 8.845a1.635 1.635 0 0 0 0 2.31l2.649 2.671A5.428 5.428 0 0 0 10 15.444c1.515 0 2.885-.62 3.872-1.618l2.65-2.671a1.635 1.635 0 0 0 0-2.312ZM10 14.307a4.308 4.308 0 1 1 0-8.615 4.308 4.308 0 0 1 0 8.615Zm2.13-4.417.583-.591-.26-.6h-.831l-.266-.263-.022-.838-.588-.251-.59.582h-.363l-.611-.587-.596.242.02.82-.259.259-.842-.009-.239.597.603.59.004.369-.581.587.257.601h.833l.266.264.009.83.623.26.563-.589.37.006.6.59.61-.247-.026-.822.258-.256.834.007.247-.6-.6-.584-.006-.367Zm-2.167 1.053a.892.892 0 0 1-.847-1.24.894.894 0 1 1 .847 1.24Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPhabricatorIcon);
module.exports = ForwardRef;
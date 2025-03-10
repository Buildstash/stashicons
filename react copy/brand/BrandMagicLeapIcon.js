const React = require("react");
function BrandMagicLeapIcon({
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
    d: "M14.71 8.725C14.159 6.597 12.258 5.02 10 5.02S5.841 6.597 5.29 8.725A7.46 7.46 0 0 0 3 12.474c.8-.281 1.62-.508 2.463-.66.713 1.859 2.474 3.166 4.537 3.166 2.074 0 3.835-1.307 4.537-3.165.907.173 1.728.389 2.463.659a7.46 7.46 0 0 0-2.29-3.749ZM8.498 8.64c-.216.702-.853 1.113-1.415.929-.572-.184-.853-.886-.648-1.588.205-.702.854-1.113 1.415-.93.562.174.854.897.648 1.589Zm4.397.929c-.572.184-1.199-.238-1.415-.93-.216-.701.076-1.403.648-1.587.573-.184 1.2.238 1.415.929.227.702-.065 1.404-.648 1.588Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandMagicLeapIcon);
module.exports = ForwardRef;
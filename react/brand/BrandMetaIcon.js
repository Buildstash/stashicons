const React = require("react");
function BrandMetaIcon({
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
    d: "M16 11.162c0 1.712-.739 2.784-2.068 2.784-1.174 0-1.796-.649-2.942-2.561l-.589-.986c-.155-.235-.272-.454-.397-.657-.377.634-.883 1.557-.883 1.557-1.257 2.186-1.962 2.647-2.942 2.647C4.814 13.946 4 12.872 4 11.21c0-2.68 1.496-5.214 3.448-5.214.941 0 1.759.463 2.715 1.678.696-.94 1.464-1.678 2.449-1.678C14.47 5.996 16 8.353 16 11.162ZM9.389 8.805c-.805-1.165-1.33-1.51-1.958-1.51-1.16 0-2.133 1.99-2.133 3.938 0 .91.346 1.42.93 1.42.566 0 .918-.357 1.934-1.947 0 0 .464-.733 1.227-1.901Zm4.571 3.847c.604 0 .88-.515.88-1.404 0-2.329-1.019-4.226-2.31-4.226-.623 0-1.146.485-1.78 1.462.176.259.358.544.55.851l.702 1.17c1.101 1.765 1.379 2.147 1.958 2.147Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandMetaIcon);
module.exports = ForwardRef;
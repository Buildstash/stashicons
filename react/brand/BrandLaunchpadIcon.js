const React = require("react");
function BrandLaunchpadIcon({
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
    d: "m15.565 13.715-2.467-1.422-2.662 1.538v2.847l5.129-2.963Zm-6.001 2.963V13.83L6.9 12.293l-2.466 1.423 5.129 2.963Zm.433-3.603 2.665-1.539V8.462L10 6.926 7.338 8.462v3.076l2.66 1.536ZM4.001 7.04v5.922l2.466-1.424V8.463L4 7.04v.001Zm10.916.624-1.382.8v3.072L16 12.962V7.038l-1.083.626ZM4.435 6.284 6.903 7.71l2.661-1.537V3.323L4.435 6.285Zm8.663 1.425 2.468-1.424-5.13-2.963v2.85l2.662 1.537Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandLaunchpadIcon);
module.exports = ForwardRef;
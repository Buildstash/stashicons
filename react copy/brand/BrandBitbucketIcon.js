const React = require("react");
function BrandBitbucketIcon({
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
    d: "M4.389 4.857a.4.4 0 0 0-.296.127.361.361 0 0 0-.088.298l1.632 9.445a.517.517 0 0 0 .51.416h7.828a.397.397 0 0 0 .252-.086.364.364 0 0 0 .133-.222l1.635-9.55a.349.349 0 0 0-.088-.297.383.383 0 0 0-.296-.127L4.389 4.857Zm6.871 6.826H8.761l-.676-3.368h3.78l-.605 3.368Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandBitbucketIcon);
module.exports = ForwardRef;
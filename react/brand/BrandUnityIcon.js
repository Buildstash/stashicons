const React = require("react");
function BrandUnityIcon({
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
    d: "m10.542 5.505 2.216 1.279c.08.045.083.17 0 .214L10.125 8.52a.244.244 0 0 1-.248 0L7.243 7c-.08-.044-.082-.172 0-.215l2.215-1.28V3L3.803 6.265v6.53l2.168-1.25v-2.56c-.001-.09.106-.156.186-.106l2.633 1.52a.249.249 0 0 1 .125.215v3.041c.001.091-.106.156-.185.107l-2.217-1.279-2.169 1.252L10 17l5.656-3.265-2.169-1.252-2.216 1.28c-.079.047-.189-.015-.186-.108v-3.04c0-.092.05-.173.125-.215l2.633-1.521c.079-.048.189.013.186.107v2.558l2.169 1.252v-6.53L10.542 3v2.505Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandUnityIcon);
module.exports = ForwardRef;
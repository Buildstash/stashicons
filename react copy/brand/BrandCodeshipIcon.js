const React = require("react");
function BrandCodeshipIcon({
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
    d: "M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 .667c.412 0 .818.096 1.187.28a.265.265 0 0 1 .147.237v.76a7.993 7.993 0 0 0-2.668 0v-.76c0-.1.057-.192.147-.237.369-.184.775-.28 1.187-.28Zm2.572 2.298a.147.147 0 0 1 .095.136v1.061A10.478 10.478 0 0 0 10 7.324c-.976.172-1.897.471-2.667.838v-1.06c0-.062.038-.116.095-.138a7.324 7.324 0 0 1 5.144 0ZM10 8s1.876.313 3.206 1.241c.072.05.09.15.042.224-.553.87-.986 1.961-1.298 2.919.626-.64 1.12-1.043 2.05-1.05.45 0 .799.1 1.092.258-.882 2.717-3.34 3.768-5.092 3.742-2.168.01-4.16-1.351-4.957-3.362.4-.354.87-.638 1.623-.638.46 0 .813.106 1.11.268-.276-.738-.617-1.497-1.023-2.137a.165.165 0 0 1 .042-.224C8.123 8.313 10 8 10 8Zm0 .666c-.666 1 0 4 0 4s.666-3 0-4Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCodeshipIcon);
module.exports = ForwardRef;
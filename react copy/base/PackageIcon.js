const React = require("react");
function PackageIcon({
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
    fillRule: "evenodd",
    d: "M9.614 3.164a.864.864 0 0 1 .772 0l6 2.995a.864.864 0 0 1 .478.773v6.72a.864.864 0 0 1-.453.76l-6 3.245a.864.864 0 0 1-.822 0l-6-3.245a.864.864 0 0 1-.453-.76v-6.72c0-.328.185-.627.478-.773l6-2.995ZM8.903 5.45l4.09 2.126 1.134-.613L10 4.903l-1.097.547Zm6.233 2.931-4.272 2.31v4.756l4.272-2.31V8.381Zm-6 7.066v-4.755l-4.272-2.31v4.755l4.272 2.31ZM5.873 6.963 10 9.194l1.156-.625-4.164-2.165-1.119.559Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PackageIcon);
module.exports = ForwardRef;
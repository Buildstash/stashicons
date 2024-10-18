const React = require("react");
function RocketIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 21",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m13.618 11.735.903-1.161h0c.16-.207.24-.31.315-.413a7.309 7.309 0 0 0 1.382-4.029c.005-.127.005-.258.005-.519 0-.06 0-.09-.002-.115a.61.61 0 0 0-.557-.556c-.025-.002-.055-.002-.114-.002-.262 0-.392 0-.52.004a7.31 7.31 0 0 0-4.028 1.383c-.104.074-.207.154-.413.315l-1.16.903c-.198.153-.297.23-.402.295-.093.059-.19.111-.291.156-.113.051-.232.09-.468.17l-2.964.988a.236.236 0 0 0-.128.345 18.913 18.913 0 0 0 6.487 6.487c.13.078.298.016.346-.128l.988-2.963h0a5.05 5.05 0 0 1 .17-.468c.045-.1.097-.198.155-.292.066-.105.143-.203.296-.4h0ZM5.453 13.123l-.378.379a4.873 4.873 0 0 0-1.255 2.16l-.515 1.883a.25.25 0 0 0 .307.307l1.883-.512a4.873 4.873 0 0 0 2.166-1.257l.376-.376"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12.777,
    cy: 8.385,
    r: 1
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.191.969h20v20h-20z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RocketIcon);
module.exports = ForwardRef;
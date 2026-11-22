const React = require("react");
function DevicesIcon({
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
    d: "M3.333 15.208V9.792q0-1.459 1.459-1.459h2.916q1.459 0 1.459 1.459v5.416q0 1.459-1.459 1.459H4.792q-1.459 0-1.459-1.459Zm2.5-8.333v-.417Q5.833 5 7.292 5h7.916q1.459 0 1.459 1.458v8.75q0 1.459-1.459 1.459h-4.583q-.625 0-.625-.625t.625-.625h4.583q.209 0 .209-.209v-8.75q0-.208-.209-.208H7.292q-.209 0-.209.208v.417q0 .625-.625.625t-.625-.625Zm-1.25 8.333q0 .209.209.209h2.916q.209 0 .209-.209V9.792q0-.209-.209-.209H4.792q-.209 0-.209.209Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DevicesIcon);
module.exports = ForwardRef;
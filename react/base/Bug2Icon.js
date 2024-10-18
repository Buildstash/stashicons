const React = require("react");
function Bug2Icon({
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
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.338,
    d: "M9.999 16.042v-2.916m0 2.916c-1.93 0-3.5-1.544-3.541-3.464m3.54 3.464c1.93 0 3.5-1.544 3.542-3.464M3.957 6.46v1.105c0 .618.342 1.185.888 1.474l1.723.911m9.472-3.49v1.105c0 .618-.341 1.185-.887 1.474l-1.724.911m-9.472 6.093v-1.37c0-.696.431-1.317 1.081-1.561l1.42-.533m9.582 3.464v-1.37c0-.696-.43-1.317-1.081-1.561l-1.42-.533M8.125 6.043v-.416c0-.92.746-1.667 1.666-1.667h.417c.92 0 1.667.746 1.667 1.667v.416m-3.75 0V7.71m0-1.667-.746-.372a1.667 1.667 0 0 1-.921-1.491v-.22m5.417 3.75V6.042m0 0 .745-.372c.565-.283.921-.86.921-1.491v-.22m-7.082 8.62-.001-.078v-1.667c0-.306.039-.602.111-.885m0 0a3.543 3.543 0 0 1 6.861 0m0 0c.073.283.111.58.111.885v1.745"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bug2Icon);
module.exports = ForwardRef;
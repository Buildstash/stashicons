const React = require("react");
function IphoneIcon({
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
    d: "M12.708 16.667H7.292q-.95 0-1.621-.672Q5 15.324 5 14.375v-8.75q0-2.292 2.292-2.292h5.416Q15 3.333 15 5.625v8.75q0 2.292-2.292 2.292Zm0-1.25q1.042 0 1.042-1.042v-8.75q0-1.042-1.042-1.042H7.292q-1.042 0-1.042 1.042v8.75q0 .431.305.737.305.305.737.305Zm-2.916-2.084h.416q.625 0 .625.625t-.625.625h-.416q-.625 0-.625-.625t.625-.625Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(IphoneIcon);
module.exports = ForwardRef;
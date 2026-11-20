const React = require("react");
function BrandMattermostIcon({
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
    d: "M10.04 4a6.001 6.001 0 0 0-5.72 4.076 5.998 5.998 0 1 0 11.363 3.847 6.001 6.001 0 0 0-2.156-6.778l.063 1.274c1.032 1.14 1.44 2.756.926 4.274-.767 2.266-3.297 3.458-5.65 2.66-2.354-.796-3.64-3.279-2.873-5.545.516-1.523 1.828-2.561 3.347-2.835l.821-.97A2.435 2.435 0 0 0 10.04 4zm1.765.547a.142.142 0 0 0-.062.012h-.002a.165.165 0 0 0-.055.036 7.206 7.206 0 0 0-.328.414L10.8 5.7l-.65.792L9.034 7.88s-.512.64-.399 1.426c.113.787.698 1.17 1.152 1.324.454.153 1.151.204 1.719-.352.568-.556.549-1.375.549-1.375l-.043-1.78-.036-1.025-.023-.888s.005-.428-.01-.528a.165.165 0 0 0-.018-.054l-.003-.006-.003-.005a.139.139 0 0 0-.115-.07z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandMattermostIcon);
module.exports = ForwardRef;
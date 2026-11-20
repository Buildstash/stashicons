const React = require("react");
function BrandGiteeIcon({
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
    d: "M9.992 4A6 6 0 0 0 4 10a6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6 6 6 0 0 0-.008 0zm3.045 2.667c.164 0 .296.133.296.296v.741a.297.297 0 0 1-.296.296h-4.15A.889.889 0 0 0 8 8.889v2.815c0 .163.133.296.296.296h2.815a.889.889 0 0 0 .889-.889v-.148a.296.296 0 0 0-.296-.296H9.629a.296.296 0 0 1-.296-.297v-.74a.296.296 0 0 1 .296-.297h3.408c.163 0 .296.133.296.297v1.703a2 2 0 0 1-2 2h-4.37a.296.296 0 0 1-.296-.296V8.889a2.222 2.222 0 0 1 2.222-2.222h4.148Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGiteeIcon);
module.exports = ForwardRef;
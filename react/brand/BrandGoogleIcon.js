const React = require("react");
function BrandGoogleIcon({
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
    d: "M10.117 4c1.614 0 2.963.591 3.999 1.555l-1.688 1.647c-.431-.405-1.189-.89-2.311-.89-1.581 0-2.923 1.043-3.408 2.485l-.081.284a3.623 3.623 0 0 0 .003 1.797l.085.284.1.266c.547 1.302 1.819 2.218 3.3 2.218.89 0 1.568-.245 2.073-.597l.145-.108c.697-.553 1.016-1.316 1.078-1.833h-3.295V8.89h5.613c.087.372.127.73.127 1.222 0 1.82-.652 3.355-1.781 4.398-.989.918-2.345 1.449-3.96 1.449a5.985 5.985 0 0 1-5.98-5.98c.001-.963.234-1.874.64-2.684A5.975 5.975 0 0 1 10.115 4Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGoogleIcon);
module.exports = ForwardRef;
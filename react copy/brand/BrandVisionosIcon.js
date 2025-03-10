const React = require("react");
function BrandVisionosIcon({
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
    d: "M10 7.103c-2.012 0-3.309.277-4.128.584-.858.322-1.251 1.315-1.251 2.63v.6c0 1.108.872 1.98 1.914 1.98h1.04c.285 0 .562-.116.768-.328a2.305 2.305 0 0 1 3.314 0c.206.212.482.327.767.327h1.04c1.043 0 1.915-.871 1.915-1.98v-.599c0-1.315-.393-2.308-1.251-2.63-.82-.307-2.116-.584-4.128-.584Zm-4.564-.578c.991-.372 2.443-.663 4.564-.663s3.573.291 4.564.663c1.641.616 2.057 2.377 2.057 3.792v.6c0 1.764-1.398 3.22-3.156 3.22h-1.04c-.625 0-1.22-.254-1.657-.702a1.063 1.063 0 0 0-1.536 0 2.313 2.313 0 0 1-1.656.703h-1.04c-1.759 0-3.157-1.457-3.157-3.222v-.599c0-1.415.416-3.176 2.057-3.792Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandVisionosIcon);
module.exports = ForwardRef;
const React = require("react");
function BrandHtml5Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m16.058 3-1.105 12.385-4.98 1.4-4.954-1.4L3.915 3h12.143ZM6.177 5.531l.403 4.604h5.278l-.189 1.965-1.669.458-1.723-.458-.108-1.211H6.661l.189 2.395 3.15.862 3.096-.862.43-4.684H7.982l-.135-1.562h5.815l.135-1.507H6.177Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.915 3h12.17v14H3.914z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandHtml5Icon);
module.exports = ForwardRef;
const React = require("react");
function BrandOneLoginIcon({
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
    d: "M6.5 3.943c2.188-1.243 4.874-1.243 7.012 0l-.348.597a6.242 6.242 0 0 0-6.317 0c-1.94 1.144-3.182 3.233-3.182 5.47a6.309 6.309 0 0 0 3.182 5.471 6.242 6.242 0 0 0 6.317 0l.348.597c-2.188 1.243-4.874 1.243-7.012 0a7 7 0 0 1-3.532-6.067A6.94 6.94 0 0 1 6.5 3.943Zm-.796 3.581a4.85 4.85 0 0 0 0 4.924 4.97 4.97 0 0 0 4.277 2.437c1.79 0 3.382-.895 4.277-2.437l.597.348a5.663 5.663 0 0 1-4.874 2.835 5.662 5.662 0 0 1-4.874-2.835 5.666 5.666 0 0 1 0-5.62l.597.348Zm4.327-1.74a4.224 4.224 0 0 1 4.226 4.227 4.223 4.223 0 0 1-4.226 4.227 4.224 4.224 0 0 1-4.228-4.227 4.224 4.224 0 0 1 4.228-4.228Zm-.05 1.79c-1.343 0-2.438 1.044-2.438 2.437a2.441 2.441 0 0 0 2.438 2.436 2.44 2.44 0 0 0 2.437-2.436A2.44 2.44 0 0 0 9.98 7.574Zm.05-3.233a5.662 5.662 0 0 1 4.873 2.835l-.597.348c-.895-1.541-2.486-2.437-4.276-2.437V4.34Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandOneLoginIcon);
module.exports = ForwardRef;
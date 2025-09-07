const React = require("react");
function BrandHubrisIcon({
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
    d: "M6.259 5.36c1.063 0 1.87.398 2.42 1.192.559.795.838 1.944.838 3.448s-.28 2.653-.838 3.448c-.55.794-1.357 1.192-2.42 1.192-1.055 0-1.861-.398-2.42-1.192-.56-.795-.84-1.944-.84-3.448s.28-2.653.84-3.448c.559-.794 1.365-1.192 2.42-1.192Zm10.74 3.323-2.4 2.56 2.4 2.56-.724.68-2.358-2.514-2.358 2.514-.725-.68 2.401-2.56-2.401-2.56.725-.68 2.358 2.512 2.358-2.512.725.68ZM4.486 12.526c.376.747.967 1.121 1.774 1.121.733 0 1.288-.308 1.664-.923.376-.615.563-1.523.563-2.724 0-.303-.013-.582-.04-.837a5.734 5.734 0 0 0-.097-.738l-3.864 4.101ZM6.26 6.353c-.734 0-1.289.308-1.664.923-.376.615-.564 1.523-.564 2.724 0 .293.01.573.027.838.028.264.065.51.11.737l3.865-4.1c-.376-.748-.968-1.122-1.774-1.122Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandHubrisIcon);
module.exports = ForwardRef;
import * as React from "react";
function BrandSnapcraftIcon({
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
    d: "M8.085 9.668a.053.053 0 0 0-.086.01l-3.122 6.055a.052.052 0 0 0 .016.067c.02.014.05.013.069-.007l4.445-4.554a.053.053 0 0 0 .003-.073l-1.325-1.5Zm4.88-1.76L4.073 4.195c-.053-.022-.097.044-.059.085l6.017 6.437a.055.055 0 0 0 .037.017.051.051 0 0 0 .038-.015l2.874-2.724a.053.053 0 0 0-.016-.087Zm3.023.274-1.093-2.203a.105.105 0 0 0-.095-.059h-4.385a.106.106 0 0 0-.04.204l5.48 2.203a.105.105 0 0 0 .134-.145z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandSnapcraftIcon);
export default ForwardRef;
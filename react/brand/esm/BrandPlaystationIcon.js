import * as React from "react";
function BrandPlaystationIcon({
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
    d: "M8.24 4.514V14.75l2.284.736V6.9c0-.402.178-.671.463-.578.371.105.444.475.444.878v3.427c1.424.696 2.544 0 2.544-1.838 0-1.889-.657-2.727-2.589-3.4-.762-.26-2.174-.691-3.144-.876H8.24Zm2.716 9.474 3.673-1.327c.417-.15.482-.364.144-.477-.342-.112-.955-.081-1.375.072l-2.453.875v-1.393l.14-.05s.7-.244 1.699-.358c.99-.105 2.208.018 3.172.386 1.078.35 1.19.858.919 1.208-.271.35-.946.605-.946.605l-4.984 1.812v-1.34l.011-.013Zm-6.902-.138c-1.108-.318-1.292-.973-.789-1.353.468-.342 1.26-.614 1.26-.614l3.276-1.174v1.349l-2.348.859c-.411.158-.481.368-.14.482.342.113.955.087 1.367-.07l1.13-.412v1.21c-.07.017-.149.025-.227.042a7.277 7.277 0 0 1-3.522-.28l-.007-.039Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPlaystationIcon);
export default ForwardRef;
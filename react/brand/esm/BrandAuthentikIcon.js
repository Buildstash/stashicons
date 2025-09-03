import * as React from "react";
function BrandAuthentikIcon({
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
    d: "M11.144 8.256h-.49V7.37h-.72v2.137H6.338c.199.302.314.573.314.672 0 .268-.843 1.784-1.865 1.784-1.32.036-2.221-1.496-1.57-2.631a1.786 1.786 0 0 1 1.57-.937c.607 0 1.15.534 1.492 1.024V6.836a2.201 2.201 0 0 1 2.2-2.198H14.8c1.214 0 2.2.987 2.2 2.198v6.327a2.201 2.201 0 0 1-2.2 2.198h-.933v-2.153H9.411v2.154h-.933a2.201 2.201 0 0 1-2.2-2.199v-1.989h7.067V7.371h-.927v.52h-.49v-.52h-.784v.884ZM5.336 9.332c-.386-.41-.92-.317-1.288 0-1.228 1.198.78 3.24 1.926.844a3.147 3.147 0 0 0-.638-.844Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3h14v14H3z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAuthentikIcon);
export default ForwardRef;
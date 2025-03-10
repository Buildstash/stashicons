const React = require("react");
function BrandNintendoGamecubeIcon({
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
    d: "m7.043 11.783 2.682 1.549v-3.1L7.042 8.686v3.099Zm-1.155.667 3.839 2.214v2.179L4 13.54V6.93l1.888 1.09v4.43ZM10 6.66 7.318 8.21 10 9.76l2.683-1.55L10 6.66Zm0-1.33 3.228 1.868 1.888-1.09L10 3.155 4.28 6.458l1.886 1.086L10 5.33Zm4.11 7.119v-2.252l-1.153.666v.92l-2.683 1.55v.002-3.1L16 6.93v6.61l-5.726 3.304v-2.177l3.837-2.217v-.002Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandNintendoGamecubeIcon);
module.exports = ForwardRef;
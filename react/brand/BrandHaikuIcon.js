const React = require("react");
function BrandHaikuIcon({
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
    d: "M6.44 11.015c1.54 1.475 3.136 1.903 4.708 1.633-.258-.188-.38-.423-.483-.614 1.756 1.002 2.634-.245 3.175-.646-.186-.151-.413-.033-.788-.489.48.065.792.04 1.234.04.277-.257.696-.459.955-.766.318-.376.722-.891 1.055-1.32-.213-.13-.255-.245-.335-.407.191.048.388.072.586.07.261-.497.676-.81.955-.938-1.163-.404-2.652-.349-3.73-.128-.36.308-.348.707-.465 1.365-.227-.294-.328-.664-.194-1.174-.76.238-1.499.56-2.211.894-.276.13-.954.614-1.352.768-.187.28-.344.55-.473.807-.008-.237-.045-.468-.027-.714-1.305.203-2.018.552-2.832 1.274-1.743.004-3.697-.743-3.682-1.012l-.036.631s2.175.825 3.944.726H6.44Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 2.5h15v15h-15z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandHaikuIcon);
module.exports = ForwardRef;
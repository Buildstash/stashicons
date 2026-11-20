const React = require("react");
function BrandNuraIcon({
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
    d: "m8.388 13.157.856 1.02-.856 1.02H16l-1.766-3.06-1.311-.231-.456 1.25H8.388"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.04 12.415.455-1.251 1.312.231L10 4.802l-1.766 3.06.455 1.25L10 8.883l2.04 3.533"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9.573 9.623-1.311.231-.456-1.251L4 15.196h3.533l.856-1.02-.856-1.02 2.04-3.533"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandNuraIcon);
module.exports = ForwardRef;
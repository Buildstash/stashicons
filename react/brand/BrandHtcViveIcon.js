const React = require("react");
function BrandHtcViveIcon({
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
    d: "M12.112 13.523a7.147 7.147 0 0 1-2.11.321 7.151 7.151 0 0 1-2.112-.32c-.78-.253-1.263-1.034-1.102-1.837a6.916 6.916 0 0 1 2.134-3.74 1.595 1.595 0 0 1 2.18 0 7.128 7.128 0 0 1 2.135 3.74c.138.803-.321 1.607-1.125 1.836Zm3.787-.735L11.447 5.1a.745.745 0 0 0-.665-.39H9.244a.745.745 0 0 0-.666.39l-4.475 7.689a.786.786 0 0 0 0 .78l.78 1.331c.138.252.39.39.666.39h8.881a.744.744 0 0 0 .666-.39l.78-1.331a.739.739 0 0 0 .024-.78Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandHtcViveIcon);
module.exports = ForwardRef;
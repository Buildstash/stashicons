const React = require("react");
function BrandAzureIcon({
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
    d: "M12.074 3.875a.877.877 0 0 1 .875.595l3.5 10.5a.876.876 0 0 1-.858 1.155h-4.094a.875.875 0 0 1-.526-.166l-2.625-1.986-.533 1.557a.875.875 0 0 1-.823.595H4.426a.875.875 0 0 1-.875-1.155l3.544-10.5a.876.876 0 0 1 .831-.595h4.148Zm-3.045 7.7-.07.184H6.334l.079.061 4.943 3.666c.05.04.112.062.176.062a.3.3 0 0 0 .34-.235.299.299 0 0 0-.008-.15L9.904 9.36l-.875 2.214Zm-.21-7.105 3.544 10.5a.877.877 0 0 1 0 .578h3.255a.3.3 0 0 0 .231-.12.299.299 0 0 0 .049-.257l-3.544-10.5a.299.299 0 0 0-.28-.201H8.819Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAzureIcon);
module.exports = ForwardRef;
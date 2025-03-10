const React = require("react");
function BrandPlaystationPs5Icon({
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
    d: "M8.967 11.713a.922.922 0 0 0 .922-.922V9.205a.556.556 0 0 1 .556-.555h1.789a.025.025 0 0 0 .024-.025v-.318a.024.024 0 0 0-.024-.024h-2.156a.922.922 0 0 0-.922.922v1.587a.556.556 0 0 1-.556.556H6.836c-.004 0-.007 0-.01.002a.023.023 0 0 0-.007.005.024.024 0 0 0-.008.017v.318a.024.024 0 0 0 .025.024l2.13-.001Zm4.03-2.141V8.307a.024.024 0 0 1 .024-.024h4.872a.025.025 0 0 1 .024.024v.318a.025.025 0 0 1-.024.025h-4.14a.024.024 0 0 0-.024.024v.824a.265.265 0 0 0 .264.265h3.082a.976.976 0 0 1 0 1.95H13.02a.024.024 0 0 1-.025-.025v-.316a.025.025 0 0 1 .008-.017.023.023 0 0 1 .017-.007h3.687a.61.61 0 1 0-.005-1.22h-3.151a.556.556 0 0 1-.556-.556Zm-7.231.19a.556.556 0 0 0 0-1.112H2.024A.025.025 0 0 1 2 8.625v-.318a.024.024 0 0 1 .024-.024h4.102a.923.923 0 0 1 0 1.845H3.29a.556.556 0 0 0-.556.556v1.009a.024.024 0 0 1-.024.024h-.685A.024.024 0 0 1 2 11.69V10.68a.922.922 0 0 1 .923-.918h2.843Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPlaystationPs5Icon);
module.exports = ForwardRef;
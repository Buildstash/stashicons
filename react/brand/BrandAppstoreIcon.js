const React = require("react");
function BrandAppstoreIcon({
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
    d: "m8.138 11.703 3.565-6.438c.049-.088.098-.176.142-.268.04-.082.074-.166.096-.256a.929.929 0 0 0-.038-.57.881.881 0 0 0-.362-.43.827.827 0 0 0-1.03.139 1.27 1.27 0 0 0-.165.215c-.054.085-.102.174-.151.262l-.226.407-.225-.407c-.049-.088-.097-.177-.15-.262a1.265 1.265 0 0 0-.166-.215.827.827 0 0 0-1.03-.138.882.882 0 0 0-.362.429.93.93 0 0 0-.038.57c.022.09.056.174.096.256.044.092.093.18.142.268l.728 1.315-2.836 5.123H4.184c-.098 0-.196 0-.293.005a1.172 1.172 0 0 0-.262.042.858.858 0 0 0-.454.32.918.918 0 0 0 0 1.082.856.856 0 0 0 .454.32c.086.025.173.036.262.042.097.005.195.005.293.005h7.64c.01-.021.034-.076.058-.158.242-.825-.359-1.658-1.187-1.658H8.138Zm-3.322 2.113-.462.876c-.048.09-.096.18-.14.274-.038.085-.072.17-.093.264a.998.998 0 0 0 .037.585c.071.185.196.34.354.44.16.1.344.141.526.115a.814.814 0 0 0 .482-.257c.063-.066.114-.14.162-.22.053-.088.1-.179.148-.27l.67-1.27c-.052-.086-.553-.857-1.684-.537Zm12.009-1.753a.858.858 0 0 0-.455-.316 1.185 1.185 0 0 0-.262-.04c-.097-.007-.195-.006-.293-.006h-1.937l-2.56-4.56a2.37 2.37 0 0 0-.629 1.282 2.709 2.709 0 0 0 .319 1.75l3.076 5.48c.05.087.098.174.152.258.048.077.1.148.165.213a.837.837 0 0 0 1.03.136.875.875 0 0 0 .363-.423.907.907 0 0 0 .038-.563 1.267 1.267 0 0 0-.096-.253c-.044-.09-.093-.177-.142-.264l-.71-1.264h.931c.098 0 .196 0 .294-.005a1.19 1.19 0 0 0 .261-.041.858.858 0 0 0 .454-.316.898.898 0 0 0 0-1.068Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAppstoreIcon);
module.exports = ForwardRef;
const React = require("react");
function BrandContikiOsIcon({
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
    d: "M5.12 16.644c.072.315.548.476.768.252.055-.056.843-1.494 1.745-3.193a265.424 265.424 0 0 1 1.662-3.11c.014-.018 7.28-1.236 7.395-1.24a.847.847 0 0 0 .17-.12c.164-.137.183-.302.064-.554-.096-.211-.482-.623-.82-.889l-.27-.21-3.132 1.095c-1.722.6-3.151 1.085-3.179 1.076-.023-.017 2.498-2.278 3.888-3.485l.133-.116-.944-.458c-.517-.256-.961-.462-.984-.462-.032.007-.675.916-1.437 2.025-1.1 1.598-1.401 2.006-1.41 1.914-.01-.088.54-4.026.654-4.7l.023-.146-.984-.329c-.545-.178-1.003-.32-1.022-.311-.017.016.074 1.14.202 2.51.132 1.373.248 2.596.261 2.715.014.174.009.21-.037.16-.027-.032-.71-1.392-1.507-3.018L4.903 3.087l-.238-.027c-.444-.05-1.047-.028-1.281.054-.289.101-.417.262-.376.482.024.112.684 1.06 2.184 3.128L7.35 9.69l-.312.966c-.17.527-.677 2.066-1.126 3.412-.6 1.791-.81 2.483-.792 2.575Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandContikiOsIcon);
module.exports = ForwardRef;
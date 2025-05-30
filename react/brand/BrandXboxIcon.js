const React = require("react");
function BrandXboxIcon({
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
    d: "M12.772 11.498c1.072 1.314 1.566 2.39 1.316 2.872-.19.366-1.371 1.08-2.24 1.353a6.585 6.585 0 0 1-2.43.247 6.018 6.018 0 0 1-2.663-.944c-.675-.44-.828-.622-.828-.982 0-.724.796-1.992 2.158-3.439.775-.82 1.851-1.783 1.97-1.756.228.05 2.04 1.817 2.717 2.65Zm-4.386-4.22c-.72-.65-1.406-1.304-2.091-1.534-.368-.123-.394-.116-.694.196-.707.736-1.295 1.929-1.46 2.962-.13.828-.147 1.06-.101 1.464.135 1.222.418 2.066.98 2.925.23.354.293.419.225.24-.102-.266-.007-.908.23-1.549.346-.943 1.304-2.732 2.91-4.704Zm7.539 1.537c-.409-1.936-1.633-3.153-1.805-3.153-.177 0-.586.157-.871.337-.564.35-.992.76-1.556 1.277 1.026 1.29 2.473 3.373 2.974 4.895.164.5.235.994.179 1.265-.041.206-.041.206.034.112.147-.187.481-.758.614-1.053.18-.392.363-.972.45-1.42.104-.545.095-1.713-.019-2.26ZM7.241 4.84c1.154-.061 2.654.834 2.766.856.017.002.251-.102.522-.235 1.546-.752 2.275-.624 2.599-.61-1.546-.95-3.695-1.21-5.66-.282-.566.268-.58.287-.227.27Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandXboxIcon);
module.exports = ForwardRef;
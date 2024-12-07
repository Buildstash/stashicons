const React = require("react");
function BrandBitriseIcon({
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
    d: "M17.018 10.887a37.321 37.321 0 0 0-.604-3.076 2.113 2.113 0 0 0-1.934-1.63 73.047 73.047 0 0 0-4.487-.123 73.09 73.09 0 0 0-4.487.124A2.113 2.113 0 0 0 3.57 7.81a37.339 37.339 0 0 0-.604 3.076 35.88 35.88 0 0 0-.276 2.72 2.11 2.11 0 0 0 .538 1.557c.386.429.91.683 1.491.705 1.265.058 3.207.13 5.28.13 2.073 0 4.014-.072 5.28-.13a2.132 2.132 0 0 0 1.49-.705 2.11 2.11 0 0 0 .539-1.557 38.78 38.78 0 0 0-.29-2.72Zm-1.003 3.607c-.204.226-.48.357-.786.371-1.258.059-3.178.131-5.236.131s-3.978-.072-5.237-.13a1.117 1.117 0 0 1-1.069-1.193c.066-1.004.153-1.891.27-2.64.16-1.113.407-2.24.588-2.99.117-.487.524-.828 1.026-.865.909-.058 2.414-.124 4.429-.124 2.007 0 3.52.066 4.43.124.494.03.908.378 1.024.866.175.749.422 1.876.59 2.989.109.749.196 1.636.269 2.64 0 .305-.102.596-.298.821Zm-6.022-9.25a.624.624 0 0 0 .625-.619.625.625 0 1 0-1.25 0c0 .335.283.619.625.619Zm3.636 4.778c-.553 0-1.004.45-1.004 1.003h2.008a1 1 0 0 0-1.004-1.003Zm-7.273 0c-.552 0-1.003.45-1.003 1.003H7.36a1 1 0 0 0-1.004-1.003Zm3.637 3.636c.894 0 1.621-.727 1.621-1.622h-3.25a1.63 1.63 0 0 0 1.629 1.622Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandBitriseIcon);
module.exports = ForwardRef;
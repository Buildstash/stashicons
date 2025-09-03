const React = require("react");
function BrandAwsCognitoIcon({
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
    fillOpacity: 0.5,
    d: "m10 5.796.034-.013 3.133.91.031.036-1.308.232-1.895-.457-3.776.904v6.855l-1.206.29-.002-.006-.048-7.259.05-.054.026-.033 4.93-1.42.03.015Zm4.997-.375.03 7.286-.039.04-.053.102L10 14.185l-3.197-.932 1.306-.233 1.897.457 3.775-.904V5.72l1.207-.31.009.012Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.993 5.894v8.194L10 16.98l-3.197-1.553v-2.175h.004l3.185.926.008.006 4.988-1.438V5.408l1.005.486Zm-2.795-1.34v2.175L10 5.796 5.013 7.234v7.32l-1.006-.466V5.894L10 3l3.198 1.554Zm-1.046 3.98v2.913L10 11.7l-2.151-.252V8.534l2.15-.252 2.153.252Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAwsCognitoIcon);
module.exports = ForwardRef;
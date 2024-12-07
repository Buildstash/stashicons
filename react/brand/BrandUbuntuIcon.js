const React = require("react");
function BrandUbuntuIcon({
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
    d: "M12.805 4.228a1.705 1.705 0 1 0 0 3.41 1.705 1.705 0 0 0 0-3.41Zm-2.345.173a5.607 5.607 0 0 0-4.886 2.825 2.46 2.46 0 0 1 1.422.365 4.158 4.158 0 0 1 3.348-1.79c.028-.503.208-.986.518-1.383a5.507 5.507 0 0 0-.402-.017Zm4.613 2.496a2.458 2.458 0 0 1-.959 1.123 4.18 4.18 0 0 1-.137 4.152c.4.327.685.771.816 1.27a5.578 5.578 0 0 0 .28-6.545Zm-9.368 1.07a1.705 1.705 0 1 0 0 3.41 1.705 1.705 0 0 0 0-3.41Zm1.014 3.932c-.457.207-.965.27-1.458.18a5.55 5.55 0 0 0 3.996 3.348 5.62 5.62 0 0 0 1.21.125 2.44 2.44 0 0 1-.499-1.425 4.152 4.152 0 0 1-3.25-2.228Zm5.702.464a1.705 1.705 0 1 0 0 3.41 1.705 1.705 0 0 0 0-3.41Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandUbuntuIcon);
module.exports = ForwardRef;
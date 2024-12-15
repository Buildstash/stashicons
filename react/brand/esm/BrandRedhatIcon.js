import * as React from "react";
function BrandRedhatIcon({
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
    d: "M12.005 10.693c.788 0 1.93-.163 1.93-1.101a.882.882 0 0 0-.02-.216l-.47-2.04c-.109-.449-.204-.652-.992-1.046-.611-.313-1.944-.83-2.337-.83-.367 0-.474.474-.912.474-.42 0-.733-.353-1.127-.353-.378 0-.625.257-.815.788 0 0-.53 1.495-.598 1.712a.405.405 0 0 0-.014.122c0 .581 2.288 2.487 5.354 2.487m2.051-.717c.109.516.109.57.109.638 0 .883-.992 1.373-2.296 1.373-2.948.002-5.53-1.726-5.53-2.867 0-.16.032-.317.095-.463C5.373 8.707 4 8.897 4 10.108c0 1.985 4.703 4.43 8.425 4.43 2.855 0 3.575-1.29 3.575-2.31 0-.802-.694-1.712-1.944-2.255"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRedhatIcon);
export default ForwardRef;
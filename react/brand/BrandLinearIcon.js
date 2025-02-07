const React = require("react");
function BrandLinearIcon({
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
    d: "M3.497 11.536c-.03-.126.12-.206.213-.114l4.868 4.869c.092.091.012.242-.114.212a6.683 6.683 0 0 1-4.967-4.967Zm-.163-1.95a.132.132 0 0 0 .038.1l6.941 6.942a.132.132 0 0 0 .102.038c.316-.02.626-.06.928-.123a.13.13 0 0 0 .064-.22l-7.73-7.73a.13.13 0 0 0-.22.064 6.675 6.675 0 0 0-.123.928Zm.56-2.292a.132.132 0 0 0 .029.147l8.636 8.637c.039.038.097.05.147.027.238-.106.469-.225.691-.358a.13.13 0 0 0 .025-.205L4.458 6.578a.13.13 0 0 0-.205.025 6.654 6.654 0 0 0-.358.691Zm1.127-1.55a.131.131 0 0 1-.006-.181 6.673 6.673 0 1 1 9.422 9.422.132.132 0 0 1-.18-.006L5.02 5.743Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandLinearIcon);
module.exports = ForwardRef;
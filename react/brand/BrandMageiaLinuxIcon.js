const React = require("react");
function BrandMageiaLinuxIcon({
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
    d: "M6.788 9.13c.27-.283.704-.242.99-.068.832.455 1.31.604 2.222.608.942.004 1.392-.168 2.226-.6.284-.181.676-.223.947.06.722.919 1.277 1.885 1.277 3.093C14.45 14.84 12.463 17 10 17s-4.45-2.16-4.45-4.777c0-1.208.554-2.206 1.238-3.092Zm5.83.736c-.864.478-1.634.72-2.618.72s-1.754-.242-2.617-.72c-.473.666-.983 1.491-.983 2.357 0 2.146 1.648 3.86 3.6 3.861 1.952 0 3.534-1.715 3.534-3.861 0-.867-.444-1.692-.916-2.357ZM8.996 6.831c.437 0 .793.356.794.792a.795.795 0 0 1-.792.794h-.001a.794.794 0 0 1-.001-1.586Zm2.143-.476a.74.74 0 1 1-.74.741c-.001-.408.332-.74.74-.74Zm-1.27-1.293a.66.66 0 1 1 0 1.32.66.66 0 0 1 0-1.32Zm1.057-1.058a.613.613 0 0 1 .561.376.608.608 0 0 1-.328.794.612.612 0 0 1-.795-.33.61.61 0 0 1 .562-.84ZM9.632 3a.53.53 0 0 1 .488.73.534.534 0 0 1-.488.327.533.533 0 0 1-.374-.155A.53.53 0 0 1 9.632 3Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandMageiaLinuxIcon);
module.exports = ForwardRef;
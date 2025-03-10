const React = require("react");
function BrandTeamcityIcon({
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
    d: "M4 4v12h12V4H4Zm1.332 1.482h3.74v.916H7.698v3.598h-.992V6.398H5.332v-.916Zm4.664 9h-4.5v-.75h4.5v.75Zm2.782-4.61c-.32.14-.669.203-1.018.188a2.278 2.278 0 0 1-2.314-2.308V7.74A2.292 2.292 0 0 1 11.8 5.406a2.328 2.328 0 0 1 1.78.694l-.632.728a1.668 1.668 0 0 0-1.156-.51 1.336 1.336 0 0 0-1.308 1.4v.014a1.34 1.34 0 0 0 1.308 1.418 1.613 1.613 0 0 0 1.188-.528l.632.638a2.31 2.31 0 0 1-.834.613Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandTeamcityIcon);
module.exports = ForwardRef;
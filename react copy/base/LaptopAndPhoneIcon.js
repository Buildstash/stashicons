const React = require("react");
function LaptopAndPhoneIcon({
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
    fillRule: "evenodd",
    d: "M4.042 5.624A2.417 2.417 0 0 1 6.46 3.207h7.917a2.417 2.417 0 0 1 2.416 2.417v.416a.75.75 0 1 1-1.5 0v-.416a.917.917 0 0 0-.916-.917H6.459a.917.917 0 0 0-.917.917v6.333h3a.75.75 0 0 1 0 1.5H4.746c.062.563.54 1 1.118 1h2.68a.75.75 0 0 1 0 1.5h-2.68a2.625 2.625 0 0 1-2.625-2.625c0-.556.33-1.034.804-1.251V5.624ZM9.876 9.79a2.417 2.417 0 0 1 2.417-2.416h2.083a2.417 2.417 0 0 1 2.417 2.416v4.584a2.417 2.417 0 0 1-2.417 2.416h-2.083a2.417 2.417 0 0 1-2.417-2.416V9.79Zm2.417-.916a.917.917 0 0 0-.917.916v4.584c0 .506.41.916.917.916h2.083c.506 0 .917-.41.917-.916V9.79a.917.917 0 0 0-.917-.916h-2.083Zm.291 5.291a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5h-.008a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LaptopAndPhoneIcon);
module.exports = ForwardRef;
const React = require("react");
function Trash2Icon({
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
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m4.793 6.459.7 8.061a1.667 1.667 0 0 0 1.661 1.522h4.86c.866 0 1.586-.66 1.661-1.522l.701-8.061m-9.583 0h-.836m.836 0h2.5m7.083 0h-2.5m2.5 0h.831m-7.914 0h4.583m-4.583 0v-.833c0-.92.746-1.667 1.667-1.667h1.25c.92 0 1.666.746 1.666 1.667v.833m-3.75 2.5v4.583m2.917-4.583v4.583"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Trash2Icon);
module.exports = ForwardRef;
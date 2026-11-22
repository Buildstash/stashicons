const React = require("react");
function LaptopIcon({
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
    d: "M4.167 4.792q0-1.459 1.458-1.459h8.75q1.458 0 1.458 1.459v7.083q0 .061-.006.115l.615 2.918q.143.68-.295 1.219-.438.54-1.132.54H4.985q-.694 0-1.132-.54-.438-.539-.295-1.219l.615-2.918q-.006-.054-.006-.115Zm1.25 0v6.458h9.166V4.792q0-.209-.208-.209h-8.75q-.208 0-.208.209ZM5.343 12.5l-.562 2.665q-.02.098.043.175.062.077.161.077h10.03q.099 0 .161-.077.063-.077.042-.175l-.561-2.665H5.343Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LaptopIcon);
module.exports = ForwardRef;
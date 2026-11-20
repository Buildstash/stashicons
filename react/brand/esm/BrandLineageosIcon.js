import * as React from "react";
function BrandLineageosIcon({
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
    d: "M14.822 10.029a1.202 1.202 0 0 0-.901.4l-.069-.027a8.9 8.9 0 0 0-1.434-.43 2.404 2.404 0 0 0-4.807 0h-.066a8.873 8.873 0 0 0-1.383.418l-.069.026a1.202 1.202 0 1 0 .28.535 8.3 8.3 0 0 1 1.289-.388 2.404 2.404 0 0 0 4.678 0 8.278 8.278 0 0 1 1.29.385 1.202 1.202 0 1 0 1.192-.92zm-9.615 1.803a.601.601 0 1 1 .601-.602.601.601 0 0 1-.601.601zm4.808 0a1.803 1.803 0 1 1 1.802-1.804 1.803 1.803 0 0 1-1.802 1.804zm4.807 0a.601.601 0 1 1 .601-.602.601.601 0 0 1-.6.601zm-3.906-1.804a.901.901 0 1 1-.901-.901.901.901 0 0 1 .901.901z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandLineageosIcon);
export default ForwardRef;
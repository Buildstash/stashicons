import * as React from "react";
function BrandFedoraIcon({
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
    d: "M10 3.999a6 6 0 0 0-5.999 5.997H4v4.644h.001a1.363 1.363 0 0 0 1.363 1.361h4.638A6.001 6.001 0 0 0 10 3.999Zm1.216 2.47c1.008 0 1.959.772 1.959 1.836 0 .099 0 .198-.015.31a.501.501 0 1 1-.99-.141c.006-.056.008-.113.007-.169 0-.603-.494-.836-.96-.836-.467 0-.888.392-.889.836.008.514 0 1.023 0 1.536l.866-.006c.676-.015.684 1.004.008.999l-.874.006c-.002.413.003.339.001.547 0 0 .008.505-.008.888a2.239 2.239 0 0 1-2.212 2.023 2.23 2.23 0 0 1-2.225-2.219c.037-1.257 1.04-2.246 2.302-2.235l.705-.005v.999l-.705.006h-.003c-.694.02-1.289.492-1.3 1.235a1.219 1.219 0 0 0 1.226 1.22c.678 0 1.22-.493 1.22-1.219V8.301c0-.07.002-.126.01-.203.115-.924.941-1.629 1.877-1.629Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandFedoraIcon);
export default ForwardRef;
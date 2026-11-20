import * as React from "react";
function BrandUnrealEngineIcon({
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
    d: "M10 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 11.76A5.76 5.76 0 1 1 15.76 10 5.76 5.76 0 0 1 10 15.76zm3.565-4.896c-.103.499-.563 1.779-2.03 2.471l-.59-.662-.993 1a3.669 3.669 0 0 1-2.902-1.489 1.43 1.43 0 0 0 .325.061c.163.004.339-.056.339-.33V9.22a.445.445 0 0 0-.558-.446c-.46.106-.828 1.255-.828 1.255A3.652 3.652 0 0 1 7.592 7.23a3.704 3.704 0 0 1 1.865-.86c-.503.286-.785.753-.785 1.145 0 .631.38.554.492.461v3.64a.579.579 0 0 0 .074.128.537.537 0 0 0 .44.223c.38 0 .873-.434.873-.434V8.586c0-.3-.226-.662-.453-.786 0 0 .42-.074.742.173a2.768 2.768 0 0 1 .194-.212c.754-.74 1.464-.951 2.056-1.056 0 0-1.075.845-1.075 1.98 0 .843.021 2.9.021 2.9.4.386.993-.171 1.53-.72Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandUnrealEngineIcon);
export default ForwardRef;
import * as React from "react";
function BrandNintendoSwitchIcon({
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
    d: "M11.088 16h1.837A3.088 3.088 0 0 0 16 12.925v-5.85A3.089 3.089 0 0 0 12.925 4H11.05c-.037 0-.075.037-.075.075v11.85c0 .038.037.075.113.075Zm2.287-6.6c.675 0 1.2.563 1.2 1.2 0 .675-.563 1.2-1.2 1.2-.675 0-1.2-.525-1.2-1.2-.038-.675.525-1.2 1.2-1.2ZM9.7 4H7.075A3.089 3.089 0 0 0 4 7.075v5.85A3.089 3.089 0 0 0 7.075 16H9.7c.037 0 .075-.037.075-.075V4.075C9.775 4.037 9.738 4 9.7 4Zm-.862 11.025H7.075c-1.163 0-2.1-.937-2.1-2.1v-5.85c0-1.163.937-2.1 2.1-2.1H8.8l.038 10.05ZM5.875 7.6c0 .638.487 1.126 1.125 1.126S8.125 8.237 8.125 7.6 7.638 6.474 7 6.474 5.875 6.963 5.875 7.6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandNintendoSwitchIcon);
export default ForwardRef;
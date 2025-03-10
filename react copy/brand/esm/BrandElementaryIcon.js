import * as React from "react";
function BrandElementaryIcon({
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
    d: "M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 .5a5.5 5.5 0 0 1 5.295 4.005 9.545 9.545 0 0 1-2.33 3.04c-.47.405-.98.765-1.54 1.02-.565.25-1.185.4-1.8.36a3.116 3.116 0 0 1-1.33-.38 10.009 10.009 0 0 0 2.84-2.29A4.985 4.985 0 0 0 12.29 8.17c.09-.395.1-.8.02-1.2a2.21 2.21 0 0 0-.54-1.055 2.165 2.165 0 0 0-1-.595c-.38-.1-.779-.114-1.165-.04A3.9 3.9 0 0 0 7.6 6.425a4.885 4.885 0 0 0-1.47 3.745c.068.85.41 1.656.975 2.295a8.997 8.997 0 0 1-1.78.425A5.5 5.5 0 0 1 10 4.5Zm.035 1.11c.385 0 .775.12 1.085.35.275.21.485.51.6.84.115.325.15.685.105 1.03a3.925 3.925 0 0 1-.85 1.88 8.11 8.11 0 0 1-3.185 2.48c-.24-.21-.45-.46-.6-.74a3.305 3.305 0 0 1-.375-1.935c.06-.66.29-1.3.6-1.895a3.96 3.96 0 0 1 1.51-1.71c.34-.185.725-.3 1.11-.3Zm5.415 3.65a5.5 5.5 0 0 1-9.69 4.24 9.9 9.9 0 0 0 1.815-.6c.255.2.54.355.835.47a4 4 0 0 0 2.72-.02 6.65 6.65 0 0 0 2.32-1.475 10 10 0 0 0 2-2.61V9.26Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandElementaryIcon);
export default ForwardRef;
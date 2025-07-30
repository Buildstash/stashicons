import * as React from "react";
function BrandRokuIcon({
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
    d: "m12.532 8.748-1.315 1.314V8.744h-1.141v3.35h1.141v-1.358l1.373 1.359h1.435l-1.743-1.744 1.445-1.445v1.99c0 .66.396 1.27 1.396 1.27.475 0 .91-.27 1.121-.513l.513.442H17V8.747h-1.138v2.169c-.128.224-.308.366-.585.366-.28 0-.41-.167-.41-.7V8.749h-2.335ZM9.854 10.42a1.752 1.752 0 1 1-3.505.017 1.752 1.752 0 0 1 3.505-.018m-1.757-.916c-.302 0-.557.41-.557.917 0 .506.255.916.557.916.308 0 .565-.41.565-.916 0-.507-.256-.917-.565-.917ZM6.81 12.098H5.516l-1.029-1.425h-.346v1.423H3V7.818h1.633c.943 0 1.712.642 1.712 1.43 0 .481-.294.91-.742 1.174l1.207 1.676Zm-1.604-2.85a.715.715 0 0 0-.713-.72h-.352V9.96h.353a.715.715 0 0 0 .712-.712Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRokuIcon);
export default ForwardRef;
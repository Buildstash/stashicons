const React = require("react");
function BrandLinuxContainersIcon({
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
    d: "m9.075 8.49.824.475-2.879 1.673.003-.956L9.075 8.49zm.862-.5-.777.45.774.447.002-.897zM7.013 6.665l-.002.535.272.158 1.801 1.04.816-.474-1.095-.64-1.615-.943-.176-.102-.001.426zm.036-.491.18.104 3.16 1.825 2.629 1.518 2.929-1.702-5.97-3.447L7.05 6.173zm3.001 6.3-.003.962 2.93-1.702.002-.962-2.929 1.702zm-.039-4.504-.002.961 2.97 1.714.002-.96-2.97-1.715zm-5.065.472 2.038 1.176L9 8.448 6.963 7.27 4.947 8.442zM16 7.991l-2.929 1.702-.007 1.991 2.928-1.702L16 7.991zm-6.024 5.02.001-.536L7.8 11.217l-.782-.452v.001l-.47-.271-2.54-1.466-.003.96 5.97 3.447.001-.426zm2.967-2.303-2.96-1.705-2.927 1.7 2.958 1.707 2.93-1.702zm3.036-.619-5.93 3.432-.006 2.007 5.932-3.447.004-1.992zm-6.007 4.546.003-1.113-5.97-3.448L4 12.081l5.97 3.447.002-.893zM4.011 8.901l.789-.459-.787-.454-.002.913zm2.916-1.695.012-.818V6.24l-2.89 1.684.824.475 2.054-1.193zm.02 2.475L4.875 8.486l-.23.134-.598.347 2.897 1.673.003-.958z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandLinuxContainersIcon);
module.exports = ForwardRef;
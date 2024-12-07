const React = require("react");
function BrandPerforceIcon({
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
    d: "M5.87 8.378c.083-.212.177-.417.287-.61-.106-.097-.372-.306-.356-.322 1.387-1.661 3.196-2.16 4.795-1.87.328.045.655.123.978.241 2.292.851 3.449 3.375 2.59 5.642a4.677 4.677 0 0 1-.307.643c.127.11.405.315.389.331-1.539 1.82-3.588 2.242-5.294 1.735a5.561 5.561 0 0 1-.491-.147c-2.287-.852-3.45-3.376-2.59-5.643Zm7.815-3.886c-.29.278-.638.613-.81.765a5.94 5.94 0 0 0-.863-.401c-2.602-.966-5.343.127-6.853 2.16-.79 1.167-1.256 2.603-1.142 4.08 0 0 .005 2.777 2.57 4.415.209-.287.474-.655.65-.893.29.168.595.312.909.43 2.945 1.092 6.21-.303 7.278-3.114 0 0 .782-1.714.524-3.588 0 0-.2-2.529-2.263-3.854Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPerforceIcon);
module.exports = ForwardRef;
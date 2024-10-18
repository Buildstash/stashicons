const React = require("react");
function Settings2Icon({
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
    d: "m4.683 12.47.917.143c.678.106 1.161.726 1.111 1.425l-.067.947a.676.676 0 0 0 .37.656l.679.334c.243.12.534.076.733-.112l.682-.644a1.291 1.291 0 0 1 1.781 0l.682.644a.647.647 0 0 0 .733.112l.68-.335a.673.673 0 0 0 .37-.653l-.068-.949a1.336 1.336 0 0 1 1.11-1.425l.918-.143a.665.665 0 0 0 .542-.517l.168-.75a.68.68 0 0 0-.27-.705l-.766-.537a1.362 1.362 0 0 1-.396-1.777l.463-.823a.687.687 0 0 0-.057-.755l-.47-.602a.65.65 0 0 0-.707-.225l-.887.278a1.306 1.306 0 0 1-1.606-.79l-.34-.882a.66.66 0 0 0-.615-.426l-.752.002a.66.66 0 0 0-.612.43l-.331.87a1.305 1.305 0 0 1-1.61.797l-.923-.29a.65.65 0 0 0-.71.226l-.466.602a.686.686 0 0 0-.052.759l.473.825A1.362 1.362 0 0 1 5 9.967l-.757.53a.68.68 0 0 0-.27.705l.168.75c.06.271.275.476.542.518Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.326 8.674a1.875 1.875 0 1 1-2.653 2.652 1.875 1.875 0 0 1 2.653-2.652Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Settings2Icon);
module.exports = ForwardRef;
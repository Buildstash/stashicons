const React = require("react");
function BrandAzurePipelinesIcon({
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
    d: "M4.9 15.1H7v.9H4v-3h.9v2.1Zm8.1.398a.502.502 0 0 1-.5.5H9.75L8 14.248l.422-.42.184.184a.744.744 0 0 0 .946.093L13 11.804v3.694ZM15.5 4a.5.5 0 0 1 .5.5v4.465a1 1 0 0 1-.445.832l-6.142 4.1a.5.5 0 0 1-.63-.062l-.763-.762 3.384-3.385-1.092-1.093-3.385 3.385-.763-.762a.502.502 0 0 1-.062-.631l4.1-6.143A1 1 0 0 1 11.032 4H15.5Zm-4.45 5.688-3.817 3.818-.739-.74 3.818-3.817.739.74ZM8.196 7l-2.301 3.447a.753.753 0 0 0 .093.948l.196.195-.432.462L4 10.25V7.5a.501.501 0 0 1 .499-.5h3.696ZM13 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandAzurePipelinesIcon);
module.exports = ForwardRef;
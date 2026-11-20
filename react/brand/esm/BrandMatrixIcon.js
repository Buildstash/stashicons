import * as React from "react";
function BrandMatrixIcon({
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
    d: "M4.316 4.275v11.45h.824V16H4V4h1.14v.275zm3.522 3.63v.579h.016a1.656 1.656 0 0 1 .558-.513 1.5 1.5 0 0 1 .75-.182c.27 0 .517.053.741.157.224.104.393.291.51.554.127-.187.3-.353.517-.496a1.37 1.37 0 0 1 .773-.215c.227 0 .436.028.63.083.194.055.358.143.496.265.138.123.245.28.323.476.077.196.116.431.116.708v2.864h-1.175V9.76c0-.143-.005-.28-.016-.406a.877.877 0 0 0-.09-.33.553.553 0 0 0-.219-.224.798.798 0 0 0-.393-.083c-.165 0-.3.032-.401.094a.69.69 0 0 0-.24.25.973.973 0 0 0-.116.348 2.78 2.78 0 0 0-.03.392v2.384H9.415v-2.4a6.69 6.69 0 0 0-.01-.376 1.037 1.037 0 0 0-.071-.344.526.526 0 0 0-.208-.251c-.097-.063-.238-.095-.427-.095a.862.862 0 0 0-.219.037.736.736 0 0 0-.265.141.819.819 0 0 0-.22.297c-.06.13-.09.3-.09.51v2.483H6.73V7.905zm7.846 7.82V4.275h-.824V4H16v12h-1.14v-.275z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandMatrixIcon);
export default ForwardRef;
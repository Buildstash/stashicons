const React = require("react");
function BrandPlaystationPs4Icon({
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
    d: "M10.201 10.787V9.195c0-.324.152-.556.475-.556h1.993c.012 0 .024-.012.024-.024V8.3c0-.003 0-.006-.002-.008h-2.44c-.528.066-.787.435-.787.904v1.591c0 .321-.155.554-.473.554H6.888c-.012 0-.024.008-.024.024v.317c0 .013.007.023.015.026h2.39c.622-.016.928-.413.928-.923l.004.003Zm-8.185.922h.7a.028.028 0 0 0 .017-.026v-1.014c0-.324.183-.548.45-.548h2.882c.65 0 .964-.4.964-.923 0-.47-.258-.838-.787-.905H2.004c0 .002-.004.004-.004.007v.317c0 .016.009.024.025.024h3.798c.322 0 .474.233.474.555 0 .323-.151.557-.474.557H2.817c-.466 0-.817.395-.817.916v1.012c0 .014.007.024.019.027l-.003.001Zm10.665-.366h3.826c.011 0 .02.008.02.016v.322c0 .016.011.024.023.024h.69c.012 0 .024-.007.024-.024v-.317c0-.012.013-.024.027-.024h.685c.016 0 .024-.012.024-.024v-.323c0-.012-.007-.024-.023-.024h-.687c-.013 0-.025-.01-.025-.023V8.64c0-.189-.069-.309-.186-.349h-.2a.768.768 0 0 0-.202.088l-4.12 2.544c-.16.1-.216.212-.176.296.032.07.124.122.303.122l-.003.002Zm.597-.425 3.193-1.974c.02-.016.06-.012.06.032v1.974c0 .012-.01.024-.022.024h-3.212c-.026 0-.04-.008-.043-.016-.004-.016.003-.028.024-.04Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPlaystationPs4Icon);
module.exports = ForwardRef;
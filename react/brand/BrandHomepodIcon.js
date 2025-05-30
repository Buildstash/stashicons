const React = require("react");
function BrandHomepodIcon({
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
    fillRule: "evenodd",
    d: "M14.714 11.323V8.676c0-.861-.003-1.164-.033-1.4-.17-1.332-.658-2.12-1.323-2.612-.706-.523-1.787-.84-3.358-.84-1.571 0-2.652.317-3.358.84-.665.491-1.153 1.28-1.323 2.612-.03.236-.033.539-.033 1.4v2.647c0 .862.002 1.165.033 1.401.17 1.332.658 2.12 1.323 2.612.706.523 1.787.84 3.358.84 1.571 0 2.652-.317 3.358-.84.665-.492 1.153-1.28 1.323-2.612.03-.236.033-.539.033-1.4Zm-10.67-4.22C4 7.447 4 7.857 4 8.676v2.647c0 .82 0 1.23.044 1.574C4.458 16.13 6.571 17.5 10 17.5c3.429 0 5.542-1.37 5.956-4.603.044-.344.044-.754.044-1.574V8.676c0-.82 0-1.229-.044-1.573C15.542 3.87 13.429 2.5 10 2.5c-3.429 0-5.542 1.37-5.956 4.603Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.861 4.485c.016.035.091.17.439.335.402.191 1.002.327 1.7.327s1.298-.136 1.7-.327c.348-.165.423-.3.439-.335-.016-.034-.091-.17-.439-.335-.402-.19-1.002-.326-1.7-.326s-1.298.135-1.7.326c-.348.165-.423.301-.439.335Zm-.1-1.536C8.367 2.66 9.159 2.5 10 2.5c.84 0 1.633.16 2.24.449.55.262 1.189.757 1.189 1.536 0 .78-.638 1.275-1.19 1.537-.606.288-1.398.449-2.239.449-.84 0-1.633-.16-2.24-.449-.55-.262-1.189-.758-1.189-1.537 0-.779.638-1.274 1.19-1.536Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandHomepodIcon);
module.exports = ForwardRef;
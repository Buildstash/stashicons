const React = require("react");
function BrandPlaystationPsvitaIcon({
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
    d: "M4.117 10.144H2.85c-.173 0-.302.132-.302.358v.824H2v-.793c0-.446.28-.746.676-.746h1.283c.314-.013.389-.169.389-.395 0-.173-.087-.41-.39-.387H2v-.327h2.117c.555 0 .774.321.774.714 0 .446-.219.752-.774.752Zm2.326-.748v1.208c0 .443-.2.718-.751.718H4.507v-.327h1.034c.212 0 .338-.172.338-.39v-1.21c0-.384.186-.717.734-.717H7.79v.326H6.772c-.275-.01-.33.214-.33.392Zm3.226 1.936c-.22-.012-.313-.18-.354-.252-.042-.07-1.28-2.405-1.28-2.405h.616l1.025 1.903c.053.107.175.133.24.008l1.02-1.912h.385s-1.199 2.27-1.247 2.347c-.047.078-.184.323-.405.31Zm2.004-2.648h.56v2.64h-.56v-2.64Zm2.513.307.002 2.318h-.55V8.992l-1.047-.001V8.67l2.648-.004-.001.326-1.052-.002Zm2.157-.321c-.21.003-.34.236-.386.311-.048.078-1.249 2.351-1.249 2.351h.385l.294-.56h1.694l.302.56H18s-1.24-2.338-1.282-2.41c-.041-.072-.134-.24-.355-.252h-.02Zm-.12.664c.052-.003.103.031.133.092l.55 1.017H15.57l.545-1.026c.029-.054.068-.08.108-.083Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandPlaystationPsvitaIcon);
module.exports = ForwardRef;
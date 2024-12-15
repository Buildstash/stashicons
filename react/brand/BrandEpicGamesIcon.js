const React = require("react");
function BrandEpicGamesIcon({
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
    d: "M5.09 3.038c-.795 0-1.088.294-1.088 1.09v9.608c0 .084.003.167.012.25.018.175.021.343.183.535.016.019.18.142.18.142.09.043.15.075.25.116l4.835 2.025c.251.115.356.16.538.157h.002c.182.003.287-.042.538-.157l4.835-2.026c.1-.04.16-.072.25-.116 0 0 .164-.122.18-.14.162-.192.165-.361.183-.534a2.49 2.49 0 0 0 .012-.252V4.128c0-.796-.293-1.09-1.09-1.09H5.09Zm7.755 1.804h.394c.66 0 .98.321.98.984v1.091h-.798V5.873c0-.214-.098-.314-.303-.314h-.136c-.213 0-.312.1-.312.313v3.37c0 .215.099.314.312.314h.152c.204 0 .303-.1.303-.313V8.038h.796v1.244c0 .663-.325.992-.986.992h-.402c-.66 0-.987-.329-.987-.992V5.834c0-.663.327-.99.987-.99v-.002Zm-7.07.047h1.807v.739h-.994v1.51h.956v.74h-.956v1.609h1.009v.74H5.775V4.889Zm2.214 0h1.275c.66 0 .986.327.986.99V7.3c0 .663-.326.991-.986.991h-.463v1.937h-.812V4.889Zm2.628 0h.812v5.338h-.812V4.889Zm-1.816.716v1.968h.334c.205 0 .303-.1.303-.313V5.919c0-.214-.098-.314-.303-.314H8.8Zm-2.17 5.887c.118 0 .234.021.344.062.103.042.2.1.284.174l-.262.317a.726.726 0 0 0-.18-.114.528.528 0 0 0-.21-.039.38.38 0 0 0-.162.035.408.408 0 0 0-.13.094.455.455 0 0 0-.12.315v.005c0 .061.01.122.032.18a.406.406 0 0 0 .23.234.449.449 0 0 0 .175.034c.091.004.18-.02.258-.067v-.197h-.318v-.328h.742v.728a1.173 1.173 0 0 1-.304.178c-.126.05-.26.074-.396.072a.951.951 0 0 1-.349-.062.846.846 0 0 1-.277-.174.796.796 0 0 1-.251-.6v-.005a.827.827 0 0 1 .521-.777.915.915 0 0 1 .373-.065Zm6.94.004c.121 0 .24.018.356.055.107.035.206.09.294.16l-.224.317a.906.906 0 0 0-.226-.119.683.683 0 0 0-.226-.04.2.2 0 0 0-.12.03.09.09 0 0 0-.04.074v.004c-.001.018.003.034.012.05.011.015.026.029.044.037a.483.483 0 0 0 .085.035c.036.012.082.023.137.036.085.018.168.041.25.07a.747.747 0 0 1 .19.099c.05.036.092.084.12.14a.43.43 0 0 1 .041.195v.004a.476.476 0 0 1-.18.387.6.6 0 0 1-.204.105.933.933 0 0 1-.267.035c-.14 0-.28-.022-.412-.067a.998.998 0 0 1-.344-.2l.25-.3c.16.13.335.195.522.195a.264.264 0 0 0 .136-.029.091.091 0 0 0 .048-.082v-.005a.087.087 0 0 0-.012-.045.12.12 0 0 0-.042-.038.436.436 0 0 0-.083-.036 1.43 1.43 0 0 0-.135-.036c-.08-.018-.16-.04-.24-.065a.73.73 0 0 1-.192-.093.416.416 0 0 1-.129-.141.424.424 0 0 1-.047-.209v-.005c0-.071.014-.142.043-.208a.462.462 0 0 1 .124-.164.587.587 0 0 1 .197-.107.827.827 0 0 1 .26-.039h.015Zm-5.428.015h.43l.687 1.63H8.78l-.118-.29h-.622l-.115.29h-.47l.687-1.63Zm1.274.012h.473l.384.626.385-.626h.472v1.618h-.444v-.93l-.413.634h-.01l-.41-.629v.925h-.437v-1.618Zm2.013 0h1.296v.381h-.854v.245h.774v.354h-.774v.256h.866v.382H11.43v-1.618Zm-3.075.52-.183.46h.362l-.179-.46Zm-.664 3.01h4.649l-2.373.783-2.276-.782Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandEpicGamesIcon);
module.exports = ForwardRef;
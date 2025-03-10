import * as React from "react";
function BrandCodemagicIcon({
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
    d: "m16.32 8.902-3.44-1.678c-.04-.02-.062-.062-.083-.104L11.1 3.681c-.29-.6-1.036-.85-1.638-.56a1.22 1.22 0 0 0-.56.56l-1.698 3.44a.472.472 0 0 1-.083.103L3.681 8.923c-.6.29-.85 1.036-.56 1.637.12.243.317.44.56.56l3.44 1.677c.04.021.061.063.082.083l1.72 3.44c.29.6 1.036.85 1.637.56.243-.12.44-.317.559-.56l1.678-3.44c.021-.04.063-.083.083-.083l3.44-1.698c.6-.29.85-1.036.56-1.637-.105-.25-.312-.435-.56-.56Zm-2.549.249-1.595 1.388c-.31.29-.539.663-.622 1.078l-.414 2.07c-.021.084-.104.147-.187.126-.041 0-.062-.021-.082-.063l-1.389-1.595a2.039 2.039 0 0 0-1.077-.622l-2.072-.414c-.083-.02-.145-.104-.124-.187 0-.04.02-.061.062-.082L7.866 9.46c.31-.29.539-.662.622-1.077l.414-2.071c.02-.084.104-.146.187-.125.03.005.06.02.082.041l1.389 1.596c.29.31.663.539 1.077.621l2.072.414c.083.021.145.104.124.187a.221.221 0 0 1-.062.104Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCodemagicIcon);
export default ForwardRef;
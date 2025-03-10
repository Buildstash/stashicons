import * as React from "react";
function BrandArchlinuxIcon({
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
    d: "M9.644 3.353c-.591 1.45-.948 2.4-1.607 3.807.404.428.9.927 1.705 1.49-.866-.356-1.456-.714-1.897-1.085-.843 1.76-2.164 4.266-4.845 9.082 2.107-1.216 3.74-1.966 5.262-2.253a3.856 3.856 0 0 1-.1-.902l.002-.067c.034-1.35.736-2.389 1.568-2.318.832.07 1.478 1.223 1.445 2.572a3.804 3.804 0 0 1-.085.725c1.505.295 3.122 1.043 5.2 2.242-.41-.754-.776-1.434-1.125-2.082-.55-.426-1.124-.981-2.295-1.583.805.21 1.381.45 1.83.72-3.552-6.611-3.84-7.49-5.058-10.348Zm6.713 12.107v-.363h-.136v-.05h.328v.05h-.137v.363h.193v-.412h.083l.097.291.02.063.022-.067.1-.287H17v.412h-.053v-.346l-.12.346h-.05l-.119-.351v.351h-.053"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandArchlinuxIcon);
export default ForwardRef;
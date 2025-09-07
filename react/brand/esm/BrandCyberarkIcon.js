import * as React from "react";
function BrandCyberarkIcon({
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
    d: "m10.195 1.866 6.854 3.972.124.071v.52l-3.458 1.998v2.944l2.955-1.704.124-.071.124.07.332.187v4.284l-.031.056-.065.116-.033.06-.06.034-6.853 3.958-.058.034h-.274l-.059-.033-6.865-3.945-.06-.035-.034-.06-.064-.116-.031-.057v-.064L2.75 6.169v-.065l.031-.056.065-.115.033-.06.06-.036 6.866-3.97.057-.034h.276l.057.033ZM3.922 14.083l5.706 3.284V14.19L6.676 12.49l-2.754 1.593Zm6.476.107v3.176l6.083-3.516v-3.175l-6.084 3.515Zm-2.952-2.143 2.56 1.467 2.56-1.467-2.56-1.479-2.56 1.479ZM3.531 13.42l2.741-1.586v-3.42L3.52 6.831l.012 6.589Zm6.854-3.526 2.56 1.489V8.427l-2.56-1.48v2.947Zm-3.33-1.467v2.944l2.56-1.48V6.948l-2.56 1.48ZM3.91 6.168 6.675 7.75l2.94-1.7V2.874L3.911 6.168Zm6.474-.118 2.95 1.7 2.754-1.594-5.704-3.283V6.05Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandCyberarkIcon);
export default ForwardRef;
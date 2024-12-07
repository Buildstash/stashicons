import * as React from "react";
function BrandGoogleCloudIcon({
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
    d: "M10.095 5.19a4.672 4.672 0 0 0-4.617 3.447c-.028.006.026-.01 0 0-1.938 1.275-1.961 4.055-.124 5.47l.003-.003-.003.015a3.358 3.358 0 0 0 2.038.678H9.98l.015.015h2.596c3.344.026 4.688-4.303 1.918-6.175a4.682 4.682 0 0 0-1.411-2.276l-.021.021.002-.025a4.672 4.672 0 0 0-2.983-1.167Zm-.179 2.073a2.671 2.671 0 0 1 1.743.575 2.593 2.593 0 0 1 .931 2.04v.258c1.765-.035 1.765 2.631 0 2.597H9.993l-.004.004v-.02H7.392a1.295 1.295 0 0 1-1.236-1.685 1.298 1.298 0 0 1 2.422-.148l1.507-1.506a3.374 3.374 0 0 0-2.03-1.258c.009-.005.02-.013.027-.011a2.593 2.593 0 0 1 1.835-.845h-.001Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandGoogleCloudIcon);
export default ForwardRef;
import * as React from "react";
function BrandNixosIcon({
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
    d: "m7.676 4.796-.682.001-.334.578.779 1.357-1.569-.004-.66 1.17h5.845l-.676-1.166-1.596-.003-1.107-1.933Zm3.088 0L9.42 4.81l2.923 5.063.67-1.17-.794-1.382 1.12-1.925-.342-.591h-.668l-.785 1.352-.78-1.36Zm3.443 2.098-2.923 5.062 1.348-.004.8-1.38 2.227.008L16 9.99l-.333-.579-1.565-.004.787-1.356-.682-1.156Zm-5.491 1.15-1.348.003-.8 1.38L4.34 9.42 4 10.01l.333.579 1.565.004-.787 1.355.682 1.157 2.923-5.062Zm-1.051 2.081-.003.005-.001-.002-.671 1.17.795 1.383-1.12 1.925.342.59h.668l.002-.002.784-1.35.779 1.36 1.344-.012-.002-.003h.005l-2.922-5.064ZM8.94 12.09l.677 1.166 1.596.003 1.107 1.933.682-.001.334-.578-.779-1.357 1.569.004.66-1.17H8.94Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandNixosIcon);
export default ForwardRef;
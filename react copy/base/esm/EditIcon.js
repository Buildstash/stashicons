import * as React from "react";
function EditIcon({
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
    d: "M12.004 4.225a1.583 1.583 0 0 1 2.24 0l1.53 1.53-.508.508.507-.508c.619.619.619 1.621 0 2.24l-.53-.53.53.53-7.744 7.744a.75.75 0 0 1-.359.2l-3.541.833a.75.75 0 0 1-.902-.902l.833-3.542a.75.75 0 0 1 .2-.358l7.744-7.745Zm1.179 1.061a.083.083 0 0 0-.118 0l-.53-.53.53.53-7.593 7.593-.507 2.155 2.154-.507 7.594-7.593a.083.083 0 0 0 0-.118l-1.53-1.53Zm-2.476 10.756a.75.75 0 0 1 .75-.75h4.583a.75.75 0 0 1 0 1.5h-4.583a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EditIcon);
export default ForwardRef;
import * as React from "react";
function BrandNintendo3DsIcon({
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
    d: "M12.824 12.313a.356.356 0 1 0 .712 0 .356.356 0 0 0-.712 0Zm-4.72 2.117h3.783a.27.27 0 0 0 .272-.261v-2.586c-.01-.14-.131-.262-.272-.253H8.103a.27.27 0 0 0-.272.262v2.576c0 .15.122.262.272.262Zm6.52-1.76a.364.364 0 0 0 .303-.568.365.365 0 1 0-.304.567Zm-.722-.01a.357.357 0 1 0-.026.713.357.357 0 0 0 .026-.713Zm-.356-1.068a.356.356 0 1 0 .712 0 .356.356 0 0 0-.712 0Zm-8.272.712a.824.824 0 1 0 1.649 0 .824.824 0 0 0-1.65 0Zm9.358-8.299H5.368A1.364 1.364 0 0 0 4 5.364v9.263c.01.759.618 1.368 1.368 1.368h9.255A1.376 1.376 0 0 0 16 14.637V5.372a1.376 1.376 0 0 0-1.368-1.367Zm.956 10.632a.959.959 0 0 1-.955.955H5.368a.96.96 0 0 1-.956-.955v-4.225h11.175v4.225Zm0-4.843H4.412V5.372a.96.96 0 0 1 .956-.955h9.264a.96.96 0 0 1 .955.955v4.422ZM12.702 5.56H7.27a.28.28 0 0 0-.272.281v2.735c0 .15.113.281.272.281h5.433a.274.274 0 0 0 .272-.28V5.83a.271.271 0 0 0-.272-.271Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandNintendo3DsIcon);
export default ForwardRef;
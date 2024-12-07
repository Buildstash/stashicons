const React = require("react");
function BrandRetropieIcon({
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
    d: "M9.955 3a2.094 2.094 0 0 0-.893 3.99c.024.276.105 1.257.184 2.26a.79.79 0 0 1-.073.009c-.146.009-.291-.016-.437-.005-.186.014-.344.115-.533.115-.174 0-.355-.003-.513.08-.26.135-.645.05-.86.272-.174.18-.501.09-.7.277-.05.049-.058.13-.124.152-.073.025-.15.04-.223.066-.144.048-.298.132-.354.283-.036.097.013.11-.085.15a.805.805 0 0 0-.193.106c-.106.083-.135.196-.15.332-.002.01.001.184.001.183a.535.535 0 0 0-.129.15c-.077.136-.062.282-.005.424.063.154.116.212.122.37-.007.077.03.156.057.224.112.274.18.487.485.516l.863 2.312C6.83 16.426 8.396 17 9.971 17c1.586 0 3.178-.584 3.619-1.742l.887-2.334c.191-.035.352-.104.424-.314.05-.11.101-.23.118-.35a.392.392 0 0 0-.006-.145c.036-.047.072-.088.097-.142.123-.26.095-.563-.156-.73.066-.237-.008-.405-.225-.53-.11-.064-.169-.053-.202-.173a.395.395 0 0 0-.18-.255c-.124-.073-.266-.087-.398-.142-.054-.14-.193-.224-.33-.269-.113-.037-.232-.043-.346-.074-.119-.031-.185-.14-.306-.185-.131-.047-.27-.052-.407-.066-.148-.016-.25-.105-.39-.142-.148-.038-.293-.029-.442-.038-.15-.008-.278-.087-.426-.106-.118-.015-.235-.005-.354 0-.093 0-.186-.01-.276-.031.08-1.004.155-1.978.175-2.242A2.094 2.094 0 0 0 9.955 3Zm.555.482c.17-.004.399.092.588.302.302.334.344.733.194.815-.152.085-.432-.085-.693-.309-.255-.226-.42-.503-.312-.696.04-.071.12-.11.223-.112ZM9.28 7.077a2.09 2.09 0 0 0 1.35 0 415.703 415.703 0 0 1-.284 3.547c-.008.049-.057.103-.127.141a.583.583 0 0 1-.271.06c-.016 0-.388-.003-.397-.239-.018-.481-.2-2.662-.27-3.509Zm1.384 2.25c.045.01.09.018.138.023.176.015.348-.028.524.009.08.016.146.059.225.078.098.023.198.027.298.025a.98.98 0 0 1 .27.03c.096.026.16.091.25.12.206.061.463.011.64.148.034.026.046.066.084.086a.64.64 0 0 0 .127.048c.076.02.155.027.231.043a.599.599 0 0 1 .251.104c.037.028.063.069.07.115.005.042.051.058.091.076.126.054.264.064.383.135.054.03.096.076.12.132l.004.012v.004l.007.025.015.13c.034.023.07.042.109.057.105.042.276.121.313.234l.002.004.002.013a.14.14 0 0 1 0 .073c-.012.043-.039.138-.056.213.061.045.133.078.185.134.027.03.047.064.058.1v.001l.002.004.004.018a.548.548 0 0 1-.08.37 1.21 1.21 0 0 0-.105.148.26.26 0 0 1 .031.097l.001.01V12.174l-.001.007-.002.01a1.31 1.31 0 0 1-.105.31c-.07.225-.335.179-.504.238-.017.09-.096.472-.166.563-.138.177-.37.164-.565.157a.683.683 0 0 0-.293.052.391.391 0 0 0-.117.076c-.046.043-.053.09-.07.148-.064.205-.275.299-.465.317-.158.014-.296-.034-.45-.06a.903.903 0 0 0-.45.034.508.508 0 0 0-.189.11c-.05.047-.09.1-.147.14a.758.758 0 0 1-.429.122.874.874 0 0 1-.44-.117.866.866 0 0 0-.435-.106.858.858 0 0 0-.436.107.868.868 0 0 1-.442.118c-.196 0-.405-.065-.54-.222-.106-.123-.267-.175-.42-.191-.22-.023-.419.072-.636.072-.192 0-.416-.066-.518-.252-.04-.071-.04-.155-.1-.214a.514.514 0 0 0-.296-.125c-.207-.025-.41.04-.601-.081a.341.341 0 0 1-.154-.217c-.013-.05-.094-.328-.105-.387-.017-.088-.282-.028-.371-.079-.08-.046-.122-.169-.148-.227a1.815 1.815 0 0 1-.11-.291l.003-.003-.003-.021c0-.06.021-.12.061-.165a.408.408 0 0 1-.116-.114c-.026-.05-.149-.264-.11-.373l.002-.002a.305.305 0 0 1 .105-.153c.04-.033.093-.058.138-.09a.284.284 0 0 1-.034-.031c-.058-.08-.047-.25.009-.33l.007-.012v-.002l.003-.001a.15.15 0 0 1 .016-.021c.069-.073.163-.108.255-.145a.546.546 0 0 0 .11-.056c.005-.052.001-.11.005-.144a.157.157 0 0 1 .055-.104c.093-.099.304-.134.412-.172a.477.477 0 0 0 .128-.063c.024-.018.021-.078.041-.105.053-.074.151-.111.238-.135.098-.026.2-.03.296-.058a.454.454 0 0 0 .136-.057c.032-.023.048-.066.086-.09.188-.12.431-.068.637-.138.073-.025.123-.08.2-.103a.932.932 0 0 1 .323-.038.975.975 0 0 0 .287-.029c.083-.02.152-.064.238-.08.191-.032.38.018.572-.01.025.32.049.63.064.86-.39.099-.656.288-.656.507 0 .323.573.583 1.28.583.707 0 1.28-.26 1.28-.583 0-.214-.253-.398-.63-.5.02-.236.043-.506.073-.88Zm2.254 1.197c-.185 0-.365.035-.52.1-.218.091-.35.237-.37.41-.005.049 0 .099.013.147l.012.238.006.117.001.016a.751.751 0 0 0-.202-.121 1.345 1.345 0 0 0-.52-.1c-.187 0-.366.035-.521.1-.219.09-.35.237-.37.41a.377.377 0 0 0 .014.15l.012.234.006.118a.272.272 0 0 0 .042.156l.015.026a.684.684 0 0 0 .368.292c.135.052.287.08.44.08.198 0 .386-.046.542-.132.19-.104.298-.254.307-.423 0-.014.002-.029.004-.043.002-.018.004-.034.006-.07l.013-.242a.379.379 0 0 0 .016-.101c0-.01-.002-.019-.003-.029a.8.8 0 0 0 .256.153c.136.053.287.08.44.08.198 0 .386-.045.543-.132.189-.104.297-.254.306-.423l.003-.043a.549.549 0 0 0 .007-.07l.013-.239a.384.384 0 0 0 .015-.104c.001-.174-.112-.327-.316-.429a1.35 1.35 0 0 0-.578-.126Zm0 .158c.174-.002.345.035.503.107.096.047.235.141.234.29 0 .053-.02.102-.054.148l-.078.068a.602.602 0 0 1-.127.083l-.016.008a1.203 1.203 0 0 1-.46.087c-.17 0-.333-.033-.47-.093l-.015-.006a.606.606 0 0 1-.12-.082l-.078-.066a.242.242 0 0 1-.052-.175c.013-.113.11-.213.274-.282.135-.057.295-.087.46-.087Zm-.707.738a.72.72 0 0 0 .15.092c.01.006.021.01.031.014.156.075.338.116.529.116.19 0 .374-.04.532-.115l.013-.007a.777.777 0 0 0 .16-.096c-.004.047-.007.045-.01.103-.007.133-.115.233-.224.293a.98.98 0 0 1-.467.113 1.08 1.08 0 0 1-.384-.07.534.534 0 0 1-.286-.221c-.034-.06-.035-.047-.039-.114l-.005-.108Zm-.874.069c.174-.002.345.035.503.107.096.047.234.141.233.29a.245.245 0 0 1-.054.149l-.077.067a.603.603 0 0 1-.124.081 1.199 1.199 0 0 1-.478.097 1.18 1.18 0 0 1-.468-.092l-.018-.008a.602.602 0 0 1-.12-.08l-.078-.068a.24.24 0 0 1-.052-.174c.013-.113.11-.214.274-.282a1.19 1.19 0 0 1 .46-.087Zm-.707.738c.047.037.101.071.164.1l.019.007c.156.074.336.114.527.114.19 0 .374-.039.532-.114l.014-.008a.77.77 0 0 0 .158-.095c-.003.046-.005.045-.009.103-.006.133-.115.233-.225.293a1.06 1.06 0 0 1-.85.043.537.537 0 0 1-.286-.222c-.034-.06-.035-.046-.038-.113l-.006-.108Zm-4.701 1.34c.056.037.12.064.185.082.238.064.615-.077.721.201.122.316.496.432.806.407.25-.02.618-.178.822.054.236.268.637.336.972.248.306-.08.53-.267.862-.14.365.14.703.266 1.08.06.266-.144.364-.345.71-.287.304.052.594.117.876-.06.205-.129.211-.426.457-.455.216-.026.426.025.632-.081l-.02.054-.591 1.552c-.192.504-.64.924-1.297 1.218-.611.272-1.384.422-2.175.422-.785 0-1.549-.148-2.15-.418-.647-.29-1.088-.71-1.276-1.213l-.614-1.644Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandRetropieIcon);
module.exports = ForwardRef;
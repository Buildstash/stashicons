const React = require("react");
function BrandOpensuseIcon({
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
    d: "M9.286 3.286A6.714 6.714 0 0 0 4 5.873c.819.218 1.399.406 1.572.465l.02-1.059s.003-.022.015-.034c.014-.014.036-.01.036-.01.216.032 4.813.713 6.75 1.842.24.14.358.29.506.44.536.554 1.243 2.858 1.32 3.333.002.018-.02.04-.03.046a2.887 2.887 0 0 1-.176.128c-.459.308-1.515 1.047-2.87.926-1.218-.107-2.808-.805-4.725-2.07l.56 1.327c.278.145 2.958 1.511 4.28 1.484 1.066-.023 2.205-.542 2.661-.816 0 0 .1-.06.144-.027.047.037.034.093.023.151a4.26 4.26 0 0 1-.136.483l-.036.092c-.052.14-.102.27-.2.35-.268.244-.696.439-1.368.73-1.037.454-2.722.743-4.285.733a16.679 16.679 0 0 1-1.576-.13c-.976-.11-1.769-.2-2.253.15a6.714 6.714 0 0 0 5.054 2.307 6.714 6.714 0 0 0 0-13.428Zm1.497 3.896a1.96 1.96 0 0 0-1.859 1.15 1.974 1.974 0 0 0 2.481 2.662c.243-.092.465-.23.653-.408a1.96 1.96 0 0 0 .095-2.778 1.973 1.973 0 0 0-1.37-.626Zm-.017.579a1.375 1.375 0 0 1 .892 2.375 1.374 1.374 0 0 1-.986.369 1.377 1.377 0 0 1-.888-2.378 1.354 1.354 0 0 1 .983-.366Zm.225.688c-.336 0-.608.182-.608.407 0 .224.272.406.608.406.336 0 .609-.183.609-.406 0-.225-.272-.406-.609-.406Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandOpensuseIcon);
module.exports = ForwardRef;
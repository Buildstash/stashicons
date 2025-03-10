const React = require("react");
function BrandTravisciIcon({
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
    d: "M8.437 10.598a.283.283 0 1 1-.566 0c0-.26-.098-.442-.237-.442-.14 0-.236.182-.236.442a.283.283 0 1 1-.566 0c0-.693.416-1.008.802-1.008.386 0 .803.316.803 1.008Zm3.51.283a.284.284 0 0 0 .282-.283c0-.26.098-.442.237-.442.139 0 .236.182.236.442a.283.283 0 1 0 .566 0c0-.693-.416-1.008-.802-1.008-.386 0-.802.316-.802 1.008 0 .156.126.283.283.283Zm4.647-2.598-.111 1.434a.467.467 0 0 1-.483.44.623.623 0 0 1-.213-.04c-.159-.06-.318-.112-.477-.167.01.315-.008.63-.055.942-.023.141-.054.275-.08.412a11.361 11.361 0 0 1-.617 2.122l.02-.011.523-.313c.112-.08.349-.072.475.058a.377.377 0 0 1 .07.43l-.505 1.111a1.846 1.846 0 0 1-1.237 1.04l-1.097.256A4.178 4.178 0 0 1 10.051 17c-1.074 0-2.012-.338-2.793-1l-1.122-.262a1.846 1.846 0 0 1-1.227-1.037l-.507-1.116c-.003-.012-.03-.093-.031-.104-.006-.364.362-.533.596-.368l.501.298c.003.002.043.025.1.05a11.924 11.924 0 0 1-.573-2.01c-.037-.184-.075-.367-.107-.56a5.214 5.214 0 0 1-.052-.99c-.209.068-.416.14-.622.216a.54.54 0 0 1-.483-.036.468.468 0 0 1-.213-.362l-.113-1.437c-.02-.277.178-.565.463-.672l.175-.068c.132-.052.295-.116.489-.186C5.129 4.822 7.413 3 10.024 3a5.66 5.66 0 0 1 5.503 4.404c.275.089.492.163.604.207.287.106.486.395.463.672Zm-2.69 5.234a9.8 9.8 0 0 0 .542-1.558l-.582.416a.556.556 0 0 1-.382.097l-2.605-.274a.561.561 0 0 1-.48-.407l-.325-1.122a1.407 1.407 0 0 0-.142 0l-.327 1.126a.556.556 0 0 1-.478.403l-2.608.275a.554.554 0 0 1-.375-.095l-.421-.293c.134.518.295.996.48 1.43.355-.017.704-.04.705-.04.001 0 .254-.023.46-.194l.62-.517c.085-.096.38-.27.775-.158.114.032.289.085.475.142.036.011.07.03.1.054.31.26 1.068.26 1.38 0a.28.28 0 0 1 .097-.052c.197-.06.368-.112.48-.144.397-.113.69.063.802.183l.592.492a.917.917 0 0 0 .46.193s.384.027.757.043Zm-3.853 2.917c.386-.002.77-.063 1.137-.182-.544-.122-.908-.595-.927-.62l-.237-.316-.237.317c-.018.025-.374.49-.909.618.368.114.756.183 1.173.183Zm4.049-2.343c-.331-.012-.662-.03-.993-.051a1.47 1.47 0 0 1-.78-.324l-.622-.518c-.032-.03-.11-.088-.258-.048l-.418.126c-.512.382-1.498.382-2.009-.002a24.848 24.848 0 0 0-.413-.123c-.15-.045-.225.017-.24.03l-.64.535a1.471 1.471 0 0 1-.782.323s-.509.034-.93.05h-.001l-.062.002a1.406 1.406 0 0 1-.782-.2l-.01-.006.264.581c.27.593.81.715.832.719.008.002 1.607.377 2.23.518.455.102.844-.406.848-.411l.463-.619c.107-.143.347-.143.453 0l.464.619c.005.005.398.514.85.411.622-.141 2.22-.517 2.22-.517a1.279 1.279 0 0 0 .841-.72l.264-.58-.015.009a1.324 1.324 0 0 1-.774.197Zm.639-4.323a16.5 16.5 0 0 0-9.332-.044 4.68 4.68 0 0 0 .039 1.076c.026.16.058.312.088.467l.929.646 2.602-.277.374-1.309a.285.285 0 0 1 .23-.201 2.25 2.25 0 0 1 .663.002.28.28 0 0 1 .23.2l.38 1.31 2.603.273 1.087-.78c.021-.11.046-.217.065-.33.053-.342.067-.688.042-1.033Zm1.291-1.53c-.003-.02-.042-.078-.096-.098h-.002a15.713 15.713 0 0 0-.733-.247l-.004-.003c-.557-.174-1.616-.48-2.489-.577a.283.283 0 1 1 .063-.563c.695.078 1.475.272 2.122.46a5.092 5.092 0 0 0-4.867-3.644c-2.236 0-4.204 1.487-4.852 3.596.623-.19 1.261-.327 1.907-.411a.283.283 0 0 1 .07.561c-.776.095-1.54.27-2.28.524l-.002.003c-.252.087-.458.168-.616.23l-.184.071c-.055.02-.095.08-.098.102l.104 1.321c1.898-.7 3.905-1.06 5.929-1.06 2.007 0 4.014.354 5.925 1.062l.103-1.327Zm-4.978-3.492H8.988a.283.283 0 0 0-.283.283v.473a.283.283 0 0 0 .566 0v-.19h.435v1.93h-.304a.283.283 0 1 0 0 .565h1.202a.283.283 0 1 0 0-.566h-.332v-1.93h.497v.19a.283.283 0 1 0 .566 0V5.03a.283.283 0 0 0-.283-.283Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandTravisciIcon);
module.exports = ForwardRef;


import * as Css from "bs-css-emotion/src/Css.js";

var debugBorder = Css.border(Css.px(1), Css.solid, Css.red);

var fullWidth = Css.width(Css.pct(100));

var fullHeight = Css.height(Css.pct(100));

var noBorder = Css.borderStyle("none");

var noOutline = Css.outlineStyle("none");

var paddingVH = Css.padding2;

export {
  debugBorder ,
  fullWidth ,
  fullHeight ,
  noBorder ,
  noOutline ,
  paddingVH ,
  
}
/* debugBorder Not a pure module */

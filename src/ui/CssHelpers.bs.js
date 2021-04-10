

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";

var debugBorder = CssJs.border(CssJs.px(1), CssJs.solid, CssJs.red);

var fullWidth = CssJs.width(CssJs.pct(100));

var fullHeight = CssJs.height(CssJs.pct(100));

var noBorder = CssJs.borderStyle("none");

var noOutline = CssJs.outlineStyle("none");

var paddingVH = CssJs.padding2;

export {
  debugBorder ,
  fullWidth ,
  fullHeight ,
  noBorder ,
  noOutline ,
  paddingVH ,
  
}
/* debugBorder Not a pure module */

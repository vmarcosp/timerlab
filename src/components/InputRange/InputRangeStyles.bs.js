

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var rangeLabel = CssJs.style([
      CssJs.fontSize(CssJs.rem(0.85)),
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.white),
      CssJs.display(CssJs.block)
    ]);

var input = CssJs.style([CssHelpers$Timerlab.fullWidth]);

var rangeValue = CssJs.style([
      Theme$Timerlab.Fonts.text,
      CssJs.color(Theme$Timerlab.Colors.primary),
      CssJs.textAlign("right")
    ]);

export {
  rangeLabel ,
  input ,
  rangeValue ,
  
}
/* rangeLabel Not a pure module */

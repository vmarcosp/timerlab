

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Css_Js_Core from "bs-css/src/Css_Js_Core.bs.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var input = CssJs.style([
      CssHelpers$Timerlab.fullWidth,
      CssJs.background(Theme$Timerlab.Colors.shape),
      CssHelpers$Timerlab.noBorder,
      CssHelpers$Timerlab.noOutline,
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.white),
      CssJs.fontSize(CssJs.rem(1)),
      CssJs.padding(CssJs.rem(0.75)),
      CssJs.borderRadius(CssJs.px(2)),
      CssJs.focus([CssJs.boxShadow(Css_Js_Core.Shadow.box(undefined, undefined, undefined, CssJs.px(2), undefined, Theme$Timerlab.Colors.primary))]),
      CssJs.transitionDuration(400),
      CssJs.marginBottom(CssJs.rem(1.25)),
      CssJs.placeholder([CssJs.color(CssJs.hex("6F5D7A"))])
    ]);

export {
  input ,
  
}
/* input Not a pure module */

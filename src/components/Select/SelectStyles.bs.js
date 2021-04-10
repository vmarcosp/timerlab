

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Css_Js_Core from "bs-css/src/Css_Js_Core.bs.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var icon = require("./arrow-icon.svg");

var wrapper = CssJs.style([
      CssJs.position(CssJs.relative),
      CssJs.after([
            CssJs.contentRule({
                  NAME: "text",
                  VAL: " "
                }),
            CssJs.width(CssJs.px(11)),
            CssJs.height(CssJs.px(17)),
            CssJs.position(CssJs.absolute),
            CssJs.display(CssJs.block),
            CssJs.top(CssJs.rem(0.95)),
            CssJs.right(CssJs.rem(0.95)),
            CssJs.color(CssJs.red),
            CssJs.backgroundImage({
                  NAME: "url",
                  VAL: icon
                }),
            CssJs.backgroundSize("auto")
          ])
    ]);

var select = CssJs.style([
      CssHelpers$Timerlab.fullWidth,
      CssJs.background(Theme$Timerlab.Colors.shape),
      CssHelpers$Timerlab.noBorder,
      CssHelpers$Timerlab.noOutline,
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.white),
      CssJs.fontSize(CssJs.rem(1)),
      CssJs.borderRadius(CssJs.px(2)),
      CssJs.focus([CssJs.boxShadow(Css_Js_Core.Shadow.box(undefined, undefined, undefined, CssJs.px(2), undefined, Theme$Timerlab.Colors.primary))]),
      CssJs.transitionDuration(400),
      CssJs.marginBottom(CssJs.rem(1.25)),
      CssJs.padding(CssJs.rem(0.75)),
      CssJs.display(CssJs.block)
    ]);

var label = CssJs.style([
      CssJs.fontSize(CssJs.rem(0.85)),
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.white),
      CssJs.marginBottom(CssJs.rem(0.5)),
      CssJs.display(CssJs.block)
    ]);

export {
  icon ,
  wrapper ,
  select ,
  label ,
  
}
/* icon Not a pure module */

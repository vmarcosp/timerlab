

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

function sidebar(visible) {
  return CssJs.style([
              CssJs.position(CssJs.fixed),
              CssJs.top(CssJs.zero),
              visible ? CssJs.left(CssJs.zero) : CssJs.left(CssJs.px(-350)),
              CssJs.background(Theme$Timerlab.Colors.background),
              CssJs.height(CssJs.pct(100)),
              CssJs.width(Theme$Timerlab.sidebarWidth),
              CssJs.display("flex"),
              CssJs.flexDirection(CssJs.column),
              CssJs.transitionDuration(400)
            ]);
}

var configForm = CssJs.style([
      CssJs.height(CssJs.pct(100)),
      CssJs.maxWidth(Theme$Timerlab.sidebarWidth),
      CssJs.display("flex"),
      CssJs.flexDirection(CssJs.column)
    ]);

var header = CssJs.style([
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.center),
      CssJs.padding(CssJs.rem(2))
    ]);

var content = CssJs.style([
      CssHelpers$Timerlab.paddingVH(CssJs.zero, CssJs.rem(1.5)),
      CssJs.flex({
            NAME: "num",
            VAL: 3
          }),
      CssJs.overflow(CssJs.auto),
      CssJs.selector("::-webkit-scrollbar", [
            CssJs.background(CssJs.hex("543a64")),
            CssJs.width(CssJs.px(6))
          ]),
      CssJs.selector("::-webkit-scrollbar-thumb", [
            CssJs.background(CssJs.hex("9480a0")),
            CssJs.borderRadius(CssJs.px(2))
          ])
    ]);

var footer = CssJs.style([
      CssJs.color(CssJs.white),
      Theme$Timerlab.Fonts.text,
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.center),
      CssJs.alignItems(CssJs.center),
      CssJs.padding(CssJs.rem(1)),
      CssJs.flexDirection(CssJs.column)
    ]);

var buttonsContainer = CssJs.style([
      CssJs.display("flex"),
      CssHelpers$Timerlab.fullWidth,
      CssJs.marginBottom(CssJs.rem(1))
    ]);

var forkMeText = CssJs.style([
      CssJs.fontSize(CssJs.rem(0.95)),
      CssJs.display("flex"),
      CssJs.alignItems("center"),
      CssJs.color(CssJs.white),
      CssJs.color(Theme$Timerlab.Colors.primary),
      CssJs.textDecoration("none"),
      CssHelpers$Timerlab.paddingVH(CssJs.rem(0.5), CssJs.zero)
    ]);

var forkIcon = CssJs.style([CssJs.marginRight(CssJs.rem(1))]);

export {
  sidebar ,
  configForm ,
  header ,
  content ,
  footer ,
  buttonsContainer ,
  forkMeText ,
  forkIcon ,
  
}
/* configForm Not a pure module */

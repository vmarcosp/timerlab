

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

function wrapper(visible, theme) {
  var color = theme.background;
  var wrapperBackground;
  wrapperBackground = color.TAG === /* Image */0 ? [
      CssJs.background({
            NAME: "url",
            VAL: color._0
          }),
      CssJs.backgroundSize("cover"),
      CssJs.backgroundPosition("bottom"),
      CssJs.after([
            CssJs.contentRule({
                  NAME: "text",
                  VAL: " "
                }),
            CssJs.position(CssJs.absolute),
            CssHelpers$Timerlab.fullHeight,
            CssHelpers$Timerlab.fullWidth,
            CssJs.top(CssJs.zero),
            CssJs.left(CssJs.zero),
            CssJs.unsafe("backgroundColor", theme.overlayColor),
            CssJs.opacity(theme.opacity),
            CssJs.zIndex(2)
          ])
    ] : [CssJs.unsafe("background", color._0)];
  return CssJs.style(Belt_Array.concat([
                  visible ? CssJs.marginLeft(Theme$Timerlab.sidebarWidth) : CssJs.margin(CssJs.zero),
                  CssJs.transitionDuration(400),
                  CssHelpers$Timerlab.fullHeight,
                  CssJs.padding(CssJs.zero),
                  CssJs.position(CssJs.relative)
                ], wrapperBackground));
}

var header = CssJs.style([
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.spaceBetween),
      CssJs.padding(CssJs.rem(3)),
      CssJs.position(CssJs.absolute),
      CssJs.width(CssJs.pct(100)),
      CssJs.zIndex(12)
    ]);

var content = CssJs.style([
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.center),
      CssJs.alignItems(CssJs.center),
      CssJs.flexDirection(CssJs.column),
      CssJs.height(CssJs.pct(100)),
      CssJs.position(CssJs.relative),
      CssJs.zIndex(10)
    ]);

function title(color) {
  return CssJs.style([
              CssJs.unsafe("color", color),
              Theme$Timerlab.Fonts.text,
              CssJs.fontSize(CssJs.rem(3)),
              CssJs.fontWeight({
                    NAME: "num",
                    VAL: 500
                  }),
              CssJs.margin(CssJs.zero)
            ]);
}

function timerValue(color) {
  return CssJs.style([
              CssJs.unsafe("color", color),
              CssJs.fontSize(CssJs.px(124)),
              Theme$Timerlab.Fonts.text,
              CssJs.fontWeight("bold"),
              CssJs.margin(CssJs.zero),
              CssJs.marginTop(CssJs.rem(4))
            ]);
}

function subtitle(color) {
  return CssJs.style([
              CssJs.unsafe("color", color),
              Theme$Timerlab.Fonts.text,
              CssJs.fontSize(CssJs.rem(1.75)),
              CssJs.fontWeight({
                    NAME: "num",
                    VAL: 400
                  }),
              CssJs.margin(CssJs.zero)
            ]);
}

export {
  wrapper ,
  header ,
  content ,
  title ,
  timerValue ,
  subtitle ,
  
}
/* header Not a pure module */

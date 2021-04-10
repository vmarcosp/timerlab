

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var fadeIn = [
  CssJs.animationName(CssJs.keyframes([
            [
              0,
              [
                CssJs.opacity(0.0),
                CssJs.visibility(CssJs.visible)
              ]
            ],
            [
              100,
              [
                CssJs.opacity(1.0),
                CssJs.visibility(CssJs.visible)
              ]
            ]
          ])),
  CssJs.animationFillMode("forwards"),
  CssJs.animationDuration(200)
];

function wrapper(visible) {
  var base = [
    CssJs.position(CssJs.fixed),
    CssJs.background(CssJs.rgba(88, 63, 103, {
              NAME: "num",
              VAL: 0.68
            })),
    CssHelpers$Timerlab.fullHeight,
    CssHelpers$Timerlab.fullWidth,
    CssJs.top(CssJs.zero),
    CssJs.left(CssJs.zero),
    CssJs.opacity(0),
    CssJs.display("flex"),
    CssJs.visibility(CssJs.hidden),
    CssJs.justifyContent(CssJs.center),
    CssJs.alignItems(CssJs.center),
    CssJs.zIndex(1000)
  ];
  var animation = visible ? fadeIn : [];
  return CssJs.style(Belt_Array.concat(base, animation));
}

var modal = CssJs.style([
      CssJs.width(CssJs.px(500)),
      CssJs.maxWidth(CssJs.px(500)),
      CssJs.background(Theme$Timerlab.Colors.background),
      CssJs.borderRadius(CssJs.px(2))
    ]);

var title = CssJs.style([
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.white),
      CssJs.fontWeight({
            NAME: "num",
            VAL: 500
          }),
      CssJs.margin(CssJs.zero)
    ]);

var header = CssJs.style([CssHelpers$Timerlab.paddingVH(CssJs.rem(1.25), CssJs.rem(1.5))]);

var content = CssJs.style([
      CssHelpers$Timerlab.paddingVH(CssJs.rem(1), CssJs.rem(1.5)),
      CssJs.flex({
            NAME: "num",
            VAL: 3
          })
    ]);

var footer = CssJs.style([
      CssJs.padding(CssJs.rem(1.5)),
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.flexEnd)
    ]);

export {
  fadeIn ,
  wrapper ,
  modal ,
  title ,
  header ,
  content ,
  footer ,
  
}
/* fadeIn Not a pure module */

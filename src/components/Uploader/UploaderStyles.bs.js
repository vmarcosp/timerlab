

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

var wrapper = Curry._1(Css.style, {
      hd: Css.border(Css.px(2), Css.dashed, Css.hex("351D43")),
      tl: {
        hd: Css.display("flex"),
        tl: {
          hd: Css.flexDirection(Css.column),
          tl: {
            hd: Css.alignItems(Css.center),
            tl: {
              hd: Css.padding(Css.rem(1.5)),
              tl: {
                hd: Css.cursor(Css.pointer),
                tl: {
                  hd: Css.transitionDuration(400),
                  tl: {
                    hd: Css.selector("input", {
                          hd: Css.display(Css.none),
                          tl: /* [] */0
                        }),
                    tl: {
                      hd: Css.hover({
                            hd: Css.borderColor(Theme$Timerlab.Colors.primary),
                            tl: {
                              hd: Css.selector("*", {
                                    hd: Css.color(Theme$Timerlab.Colors.primary),
                                    tl: /* [] */0
                                  }),
                              tl: /* [] */0
                            }
                          }),
                      tl: /* [] */0
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

var label = Curry._1(Css.style, {
      hd: Theme$Timerlab.Fonts.text,
      tl: {
        hd: Css.color(Css.hex("6F5D7A")),
        tl: {
          hd: Css.transitionDuration(400),
          tl: {
            hd: Css.margin(Css.zero),
            tl: {
              hd: Css.marginTop(Css.rem(1)),
              tl: /* [] */0
            }
          }
        }
      }
    });

export {
  wrapper ,
  label ,
  
}
/* wrapper Not a pure module */

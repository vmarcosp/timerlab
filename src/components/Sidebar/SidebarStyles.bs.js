

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

function sidebar(visible) {
  return Curry._1(Css.style, {
              hd: Css.position(Css.fixed),
              tl: {
                hd: Css.top(Css.zero),
                tl: {
                  hd: visible ? Css.left(Css.zero) : Css.left(Css.px(-350)),
                  tl: {
                    hd: Css.background(Theme$Timerlab.Colors.background),
                    tl: {
                      hd: Css.height(Css.pct(100)),
                      tl: {
                        hd: Css.width(Theme$Timerlab.sidebarWidth),
                        tl: {
                          hd: Css.display("flex"),
                          tl: {
                            hd: Css.flexDirection(Css.column),
                            tl: {
                              hd: Css.transitionDuration(400),
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
}

var configForm = Curry._1(Css.style, {
      hd: Css.height(Css.pct(100)),
      tl: {
        hd: Css.maxWidth(Theme$Timerlab.sidebarWidth),
        tl: {
          hd: Css.display("flex"),
          tl: {
            hd: Css.flexDirection(Css.column),
            tl: /* [] */0
          }
        }
      }
    });

var header = Curry._1(Css.style, {
      hd: Css.display("flex"),
      tl: {
        hd: Css.justifyContent(Css.center),
        tl: {
          hd: Css.padding(Css.rem(2)),
          tl: /* [] */0
        }
      }
    });

var content = Curry._1(Css.style, {
      hd: CssHelpers$Timerlab.paddingVH(Css.zero, Css.rem(1.5)),
      tl: {
        hd: Css.flex({
              NAME: "num",
              VAL: 3
            }),
        tl: {
          hd: Css.overflow(Css.auto),
          tl: {
            hd: Css.selector("::-webkit-scrollbar", {
                  hd: Css.background(Css.hex("543a64")),
                  tl: {
                    hd: Css.width(Css.px(6)),
                    tl: /* [] */0
                  }
                }),
            tl: {
              hd: Css.selector("::-webkit-scrollbar-thumb", {
                    hd: Css.background(Css.hex("9480a0")),
                    tl: {
                      hd: Css.borderRadius(Css.px(2)),
                      tl: /* [] */0
                    }
                  }),
              tl: /* [] */0
            }
          }
        }
      }
    });

var footer = Curry._1(Css.style, {
      hd: Css.color(Css.white),
      tl: {
        hd: Theme$Timerlab.Fonts.text,
        tl: {
          hd: Css.display("flex"),
          tl: {
            hd: Css.justifyContent(Css.center),
            tl: {
              hd: Css.alignItems(Css.center),
              tl: {
                hd: Css.padding(Css.rem(1)),
                tl: {
                  hd: Css.flexDirection(Css.column),
                  tl: /* [] */0
                }
              }
            }
          }
        }
      }
    });

var buttonsContainer = Curry._1(Css.style, {
      hd: Css.display("flex"),
      tl: {
        hd: CssHelpers$Timerlab.fullWidth,
        tl: {
          hd: Css.marginBottom(Css.rem(1)),
          tl: /* [] */0
        }
      }
    });

export {
  sidebar ,
  configForm ,
  header ,
  content ,
  footer ,
  buttonsContainer ,
  
}
/* configForm Not a pure module */

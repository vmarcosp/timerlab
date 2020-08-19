

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Css_Core from "bs-css/src/Css_Core.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var icon = require("./arrow-icon.svg");

var wrapper = Curry._1(Css.style, {
      hd: Css.position(Css.relative),
      tl: {
        hd: Css.after({
              hd: Css.contentRule({
                    NAME: "text",
                    VAL: " "
                  }),
              tl: {
                hd: Css.width(Css.px(11)),
                tl: {
                  hd: Css.height(Css.px(17)),
                  tl: {
                    hd: Css.position(Css.absolute),
                    tl: {
                      hd: Css.display(Css.block),
                      tl: {
                        hd: Css.top(Css.rem(0.75)),
                        tl: {
                          hd: Css.right(Css.rem(0.95)),
                          tl: {
                            hd: Css.color(Css.red),
                            tl: {
                              hd: Css.backgroundImage({
                                    NAME: "url",
                                    VAL: icon
                                  }),
                              tl: {
                                hd: Css.backgroundSize("auto"),
                                tl: /* [] */0
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }),
        tl: /* [] */0
      }
    });

var select = Curry._1(Css.style, {
      hd: CssHelpers$Timerlab.fullWidth,
      tl: {
        hd: Css.background(Theme$Timerlab.Colors.shape),
        tl: {
          hd: CssHelpers$Timerlab.noBorder,
          tl: {
            hd: CssHelpers$Timerlab.noOutline,
            tl: {
              hd: Theme$Timerlab.Fonts.text,
              tl: {
                hd: Css.color(Css.white),
                tl: {
                  hd: Css.fontSize(Css.rem(1)),
                  tl: {
                    hd: Css.borderRadius(Css.px(2)),
                    tl: {
                      hd: Css.focus({
                            hd: Css.boxShadow(Css_Core.Shadow.box(undefined, undefined, undefined, Css.px(2), undefined, Theme$Timerlab.Colors.primary)),
                            tl: /* [] */0
                          }),
                      tl: {
                        hd: Css.transitionDuration(400),
                        tl: {
                          hd: Css.marginBottom(Css.rem(1.25)),
                          tl: {
                            hd: Css.padding(Css.rem(0.75)),
                            tl: {
                              hd: Css.display(Css.block),
                              tl: /* [] */0
                            }
                          }
                        }
                      }
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
      hd: Css.fontSize(Css.rem(0.85)),
      tl: {
        hd: Theme$Timerlab.Fonts.text,
        tl: {
          hd: Css.color(Css.white),
          tl: {
            hd: Css.marginBottom(Css.rem(0.5)),
            tl: {
              hd: Css.display(Css.block),
              tl: /* [] */0
            }
          }
        }
      }
    });

export {
  icon ,
  wrapper ,
  select ,
  label ,
  
}
/* icon Not a pure module */

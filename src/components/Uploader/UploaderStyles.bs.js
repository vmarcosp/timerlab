

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var removeIcon = require("./remove.svg");

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

var removeButton = Curry._1(Css.style, {
      hd: CssHelpers$Timerlab.noBorder,
      tl: {
        hd: CssHelpers$Timerlab.noOutline,
        tl: {
          hd: Css.padding(Css.zero),
          tl: {
            hd: Css.margin(Css.zero),
            tl: {
              hd: Css.position(Css.absolute),
              tl: {
                hd: Css.top(Css.px(-6)),
                tl: {
                  hd: Css.right(Css.px(-6)),
                  tl: {
                    hd: Css.width(Css.px(23)),
                    tl: {
                      hd: Css.height(Css.px(22)),
                      tl: {
                        hd: Css.cursor(Css.pointer),
                        tl: {
                          hd: Css.borderRadius(Css.pct(50)),
                          tl: {
                            hd: Css.background(Theme$Timerlab.Colors.primary),
                            tl: {
                              hd: Css.transitionDuration(400),
                              tl: {
                                hd: Css.after({
                                      hd: Css.contentRule({
                                            NAME: "url",
                                            VAL: removeIcon
                                          }),
                                      tl: {
                                        hd: Css.width(Css.px(10)),
                                        tl: {
                                          hd: Css.height(Css.px(10)),
                                          tl: /* [] */0
                                        }
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
              }
            }
          }
        }
      }
    });

var buttonSelector = "." + removeButton;

var previewContainer = Curry._1(Css.style, {
      hd: Css.position(Css.relative),
      tl: {
        hd: Css.width(Css.px(124)),
        tl: {
          hd: Css.selector(buttonSelector, {
                hd: Css.opacity(0),
                tl: /* [] */0
              }),
          tl: {
            hd: Css.hover({
                  hd: Css.selector(buttonSelector, {
                        hd: Css.opacity(1),
                        tl: /* [] */0
                      }),
                  tl: /* [] */0
                }),
            tl: /* [] */0
          }
        }
      }
    });

var preview = Curry._1(Css.style, {
      hd: Css.maxWidth(Css.px(124)),
      tl: /* [] */0
    });

export {
  removeIcon ,
  wrapper ,
  label ,
  removeButton ,
  buttonSelector ,
  previewContainer ,
  preview ,
  
}
/* removeIcon Not a pure module */

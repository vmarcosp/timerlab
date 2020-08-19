

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

function wrapper(visible, theme) {
  var color = theme.background;
  var wrapperBackground;
  wrapperBackground = color.TAG ? ({
        hd: Css.unsafe("background", color._0),
        tl: /* [] */0
      }) : ({
        hd: Css.background({
              NAME: "url",
              VAL: color._0
            }),
        tl: {
          hd: Css.backgroundSize("cover"),
          tl: {
            hd: Css.backgroundPosition("center"),
            tl: {
              hd: Css.after({
                    hd: Css.contentRule({
                          NAME: "text",
                          VAL: " "
                        }),
                    tl: {
                      hd: Css.position(Css.absolute),
                      tl: {
                        hd: CssHelpers$Timerlab.fullHeight,
                        tl: {
                          hd: CssHelpers$Timerlab.fullWidth,
                          tl: {
                            hd: Css.top(Css.zero),
                            tl: {
                              hd: Css.left(Css.zero),
                              tl: {
                                hd: Css.backgroundColor({
                                      NAME: "rgba",
                                      VAL: [
                                        0,
                                        0,
                                        0,
                                        0.75
                                      ]
                                    }),
                                tl: {
                                  hd: Css.zIndex(2),
                                  tl: /* [] */0
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
          }
        }
      });
  return Curry._1(Css.style, {
              hd: visible ? Css.marginLeft(Theme$Timerlab.sidebarWidth) : Css.margin(Css.zero),
              tl: {
                hd: Css.transitionDuration(400),
                tl: {
                  hd: CssHelpers$Timerlab.fullHeight,
                  tl: {
                    hd: Css.padding(Css.zero),
                    tl: {
                      hd: Css.position(Css.relative),
                      tl: wrapperBackground
                    }
                  }
                }
              }
            });
}

var header = Curry._1(Css.style, {
      hd: Css.display("flex"),
      tl: {
        hd: Css.justifyContent(Css.spaceBetween),
        tl: {
          hd: Css.padding(Css.rem(3)),
          tl: {
            hd: Css.position(Css.absolute),
            tl: {
              hd: Css.width(Css.pct(100)),
              tl: {
                hd: Css.zIndex(12),
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

var content = Curry._1(Css.style, {
      hd: Css.display("flex"),
      tl: {
        hd: Css.justifyContent(Css.center),
        tl: {
          hd: Css.alignItems(Css.center),
          tl: {
            hd: Css.flexDirection(Css.column),
            tl: {
              hd: Css.height(Css.pct(100)),
              tl: {
                hd: Css.position(Css.relative),
                tl: {
                  hd: Css.zIndex(10),
                  tl: /* [] */0
                }
              }
            }
          }
        }
      }
    });

function title(secondaryColor) {
  return Curry._1(Css.style, {
              hd: Css.unsafe("color", secondaryColor),
              tl: {
                hd: Theme$Timerlab.Fonts.text,
                tl: {
                  hd: Css.fontSize(Css.rem(3)),
                  tl: {
                    hd: Css.fontWeight({
                          NAME: "num",
                          VAL: 500
                        }),
                    tl: {
                      hd: Css.margin(Css.zero),
                      tl: /* [] */0
                    }
                  }
                }
              }
            });
}

function timerValue(secondaryColor) {
  return Curry._1(Css.style, {
              hd: Css.unsafe("color", secondaryColor),
              tl: {
                hd: Css.fontSize(Css.px(124)),
                tl: {
                  hd: Theme$Timerlab.Fonts.text,
                  tl: {
                    hd: Css.fontWeight("bold"),
                    tl: {
                      hd: Css.margin(Css.zero),
                      tl: {
                        hd: Css.marginTop(Css.rem(4)),
                        tl: /* [] */0
                      }
                    }
                  }
                }
              }
            });
}

function subtitle(primaryColor) {
  return Curry._1(Css.style, {
              hd: Css.unsafe("color", primaryColor),
              tl: {
                hd: Theme$Timerlab.Fonts.text,
                tl: {
                  hd: Css.fontSize(Css.rem(1.75)),
                  tl: {
                    hd: Css.fontWeight({
                          NAME: "num",
                          VAL: 400
                        }),
                    tl: {
                      hd: Css.margin(Css.zero),
                      tl: /* [] */0
                    }
                  }
                }
              }
            });
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

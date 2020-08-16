

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var fadeIn_0 = Css.animationName(Curry._1(Css.keyframes, {
          hd: [
            0,
            {
              hd: Css.opacity(0.0),
              tl: {
                hd: Css.visibility(Css.visible),
                tl: /* [] */0
              }
            }
          ],
          tl: {
            hd: [
              100,
              {
                hd: Css.opacity(1.0),
                tl: {
                  hd: Css.visibility(Css.visible),
                  tl: /* [] */0
                }
              }
            ],
            tl: /* [] */0
          }
        }));

var fadeIn_1 = {
  hd: Css.animationFillMode("forwards"),
  tl: {
    hd: Css.animationDuration(200),
    tl: /* [] */0
  }
};

var fadeIn = {
  hd: fadeIn_0,
  tl: fadeIn_1
};

function wrapper(visible) {
  var base_0 = Css.position(Css.fixed);
  var base_1 = {
    hd: Css.background(Css.rgba(88, 63, 103, 0.68)),
    tl: {
      hd: CssHelpers$Timerlab.fullHeight,
      tl: {
        hd: CssHelpers$Timerlab.fullWidth,
        tl: {
          hd: Css.top(Css.zero),
          tl: {
            hd: Css.left(Css.zero),
            tl: {
              hd: Css.opacity(0),
              tl: {
                hd: Css.display("flex"),
                tl: {
                  hd: Css.visibility(Css.hidden),
                  tl: {
                    hd: Css.justifyContent(Css.center),
                    tl: {
                      hd: Css.alignItems(Css.center),
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
  };
  var base = {
    hd: base_0,
    tl: base_1
  };
  var animation = visible ? fadeIn : /* [] */0;
  return Curry._1(Css.style, Belt_List.concat(base, animation));
}

var modal = Curry._1(Css.style, {
      hd: Css.minWidth(Css.px(425)),
      tl: {
        hd: Css.background(Theme$Timerlab.Colors.background),
        tl: {
          hd: Css.borderRadius(Css.px(2)),
          tl: /* [] */0
        }
      }
    });

var title = Curry._1(Css.style, {
      hd: Theme$Timerlab.Fonts.text,
      tl: {
        hd: Css.color(Css.white),
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
    });

var header = Curry._1(Css.style, {
      hd: Css.padding(Css.rem(1.5)),
      tl: /* [] */0
    });

var content = Curry._1(Css.style, {
      hd: Css.padding(Css.rem(1.5)),
      tl: {
        hd: Css.flex({
              NAME: "num",
              VAL: 3
            }),
        tl: /* [] */0
      }
    });

var footer = Curry._1(Css.style, {
      hd: Css.padding(Css.rem(1.5)),
      tl: {
        hd: Css.display("flex"),
        tl: {
          hd: Css.justifyContent(Css.flexEnd),
          tl: /* [] */0
        }
      }
    });

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

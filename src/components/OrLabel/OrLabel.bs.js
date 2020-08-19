

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

var orContainer = Curry._1(Css.style, {
      hd: Css.fontSize(Css.rem(1)),
      tl: {
        hd: Css.color(Theme$Timerlab.Colors.shape),
        tl: {
          hd: Css.position(Css.relative),
          tl: {
            hd: Theme$Timerlab.Fonts.text,
            tl: {
              hd: Css.textAlign(Css.center),
              tl: {
                hd: Css.margin2(Css.zero, Css.auto),
                tl: {
                  hd: Css.marginBottom(Css.rem(1.25)),
                  tl: {
                    hd: Css.display(Css.block),
                    tl: {
                      hd: Css.fontWeight({
                            NAME: "num",
                            VAL: 500
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

function OrLabel(Props) {
  return React.createElement("span", {
              className: orContainer
            }, "or");
}

var make = OrLabel;

export {
  orContainer ,
  make ,
  
}
/* orContainer Not a pure module */

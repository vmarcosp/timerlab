

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

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

function Label(Props) {
  var children = Props.children;
  return React.createElement("label", {
              className: label
            }, children);
}

var make = Label;

export {
  label ,
  make ,
  
}
/* label Not a pure module */

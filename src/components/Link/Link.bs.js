

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

var link = Curry._1(Css.style, {
      hd: Css.color(Css.white),
      tl: {
        hd: Css.color(Theme$Timerlab.Colors.primary),
        tl: {
          hd: Css.textDecoration("none"),
          tl: /* [] */0
        }
      }
    });

function Link(Props) {
  var href = Props.href;
  var children = Props.children;
  return React.createElement("a", {
              className: link,
              href: href
            }, children);
}

var make = Link;

export {
  link ,
  make ,
  
}
/* link Not a pure module */

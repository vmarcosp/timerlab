

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
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
  var target = Props.target;
  var tmp = {
    className: link,
    href: href
  };
  if (target !== undefined) {
    tmp.target = Caml_option.valFromOption(target);
  }
  return React.createElement("a", tmp, children);
}

var make = Link;

export {
  link ,
  make ,
  
}
/* link Not a pure module */

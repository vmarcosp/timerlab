

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";

require("./reset.css");

function add(param) {
  Curry._2(Css.$$global, "html, body, #root", {
        hd: Css.margin(Css.zero),
        tl: {
          hd: Css.padding(Css.zero),
          tl: {
            hd: Css.height(Css.pct(100)),
            tl: {
              hd: Css.width(Css.pct(100)),
              tl: /* [] */0
            }
          }
        }
      });
  return Curry._2(Css.$$global, "*", {
              hd: Css.boxSizing("borderBox"),
              tl: /* [] */0
            });
}

export {
  add ,
  
}
/*  Not a pure module */

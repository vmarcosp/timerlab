

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";

var colors = Curry._1(Css.style, {
      hd: Css.display("flex"),
      tl: {
        hd: Css.selector("> *:nth-child(1)", {
              hd: Css.marginRight(Css.rem(1)),
              tl: /* [] */0
            }),
        tl: /* [] */0
      }
    });

export {
  colors ,
  
}
/* colors Not a pure module */

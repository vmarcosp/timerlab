

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";

var colors = CssJs.style([
      CssJs.display("flex"),
      CssJs.selector("> *:nth-child(1)", [CssJs.marginRight(CssJs.rem(1))])
    ]);

export {
  colors ,
  
}
/* colors Not a pure module */

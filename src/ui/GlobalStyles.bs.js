

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";

require("./reset.css");

function add(param) {
  CssJs.$$global("html, body, #root", [
        CssJs.margin(CssJs.zero),
        CssJs.padding(CssJs.zero),
        CssJs.height(CssJs.pct(100)),
        CssJs.width(CssJs.pct(100))
      ]);
  return CssJs.$$global("*", [CssJs.boxSizing("borderBox")]);
}

export {
  add ,
  
}
/*  Not a pure module */

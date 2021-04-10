

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";

var primaryRaw = "FF357E";

var backgroundRaw = "1E052D";

var shapeRaw = "351D43";

var primary = Css.hex(primaryRaw);

var background = Css.hex(backgroundRaw);

var shape = Css.hex(shapeRaw);

function toHex(value) {
  return "#" + value;
}

var Colors = {
  primaryRaw: primaryRaw,
  backgroundRaw: backgroundRaw,
  shapeRaw: shapeRaw,
  primary: primary,
  background: background,
  shape: shape,
  toHex: toHex
};

var text = CssJs.fontFamily({
      NAME: "custom",
      VAL: "\'Poppins\', sans-serif"
    });

var Fonts = {
  text: text
};

var sidebarWidth = Css.px(350);

export {
  Colors ,
  Fonts ,
  sidebarWidth ,
  
}
/* primary Not a pure module */

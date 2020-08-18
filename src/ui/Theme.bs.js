

import * as Css from "bs-css-emotion/src/Css.js";

var primaryRaw = "FF357E";

var backgroundRaw = "1E052D";

var shapeRaw = "351D43";

var primary = Css.hex(primaryRaw);

var background = Css.hex(backgroundRaw);

var shape = Css.hex(shapeRaw);

var Colors = {
  primaryRaw: primaryRaw,
  backgroundRaw: backgroundRaw,
  shapeRaw: shapeRaw,
  primary: primary,
  background: background,
  shape: shape
};

var text = Css.fontFamily({
      NAME: "custom",
      VAL: "'Raleway', sans-serif"
    });

var Fonts = {
  text: text
};

export {
  Colors ,
  Fonts ,
  
}
/* primary Not a pure module */

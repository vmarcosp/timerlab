

import * as Css from "bs-css-emotion/src/Css.js";

var primary = Css.hex("FF357E");

var background = Css.hex("1E052D");

var shape = Css.hex("351D43");

var Colors = {
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

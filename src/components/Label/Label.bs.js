

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

var label = CssJs.style([
      CssJs.fontSize(CssJs.rem(0.85)),
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.white),
      CssJs.marginBottom(CssJs.rem(0.5)),
      CssJs.display(CssJs.block)
    ]);

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

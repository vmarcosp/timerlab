

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

var orContainer = CssJs.style([
      CssJs.fontSize(CssJs.rem(1)),
      CssJs.color(Theme$Timerlab.Colors.shape),
      CssJs.position(CssJs.relative),
      Theme$Timerlab.Fonts.text,
      CssJs.textAlign(CssJs.center),
      CssJs.margin2(CssJs.zero, CssJs.auto),
      CssJs.marginBottom(CssJs.rem(1)),
      CssJs.display(CssJs.block),
      CssJs.fontWeight({
            NAME: "num",
            VAL: 500
          })
    ]);

function OrLabel(Props) {
  return React.createElement("span", {
              className: orContainer
            }, "or");
}

var make = OrLabel;

export {
  orContainer ,
  make ,
  
}
/* orContainer Not a pure module */

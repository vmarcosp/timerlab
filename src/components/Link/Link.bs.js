

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";

var link = CssJs.style([
      CssJs.color(Theme$Timerlab.Colors.primary),
      CssJs.textDecoration("none"),
      CssJs.position(CssJs.relative),
      CssJs.after([
            CssJs.contentRule({
                  NAME: "text",
                  VAL: " "
                }),
            CssJs.width(CssJs.pct(100)),
            CssJs.height(CssJs.px(2)),
            CssJs.position(CssJs.absolute),
            CssJs.backgroundColor(Theme$Timerlab.Colors.primary),
            CssJs.bottom(CssJs.zero),
            CssJs.left(CssJs.zero),
            CssJs.transform(CssJs.scale(0, 0)),
            CssJs.transitionDuration(300)
          ]),
      CssJs.hover([CssJs.after([CssJs.transform(CssJs.scale(1, 1))])])
    ]);

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

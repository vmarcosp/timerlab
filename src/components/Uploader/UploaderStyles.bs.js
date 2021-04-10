

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var removeIcon = require("./remove.svg");

var wrapper = CssJs.style([
      CssJs.border(CssJs.px(2), CssJs.dashed, CssJs.hex("351D43")),
      CssJs.display("flex"),
      CssJs.flexDirection(CssJs.column),
      CssJs.alignItems(CssJs.center),
      CssJs.padding(CssJs.rem(1.5)),
      CssJs.cursor(CssJs.pointer),
      CssJs.transitionDuration(400),
      CssJs.selector("input", [CssJs.display(CssJs.none)]),
      CssJs.hover([
            CssJs.borderColor(Theme$Timerlab.Colors.primary),
            CssJs.selector("*", [CssJs.color(Theme$Timerlab.Colors.primary)])
          ])
    ]);

var label = CssJs.style([
      Theme$Timerlab.Fonts.text,
      CssJs.color(CssJs.hex("6F5D7A")),
      CssJs.transitionDuration(400),
      CssJs.margin(CssJs.zero),
      CssJs.marginTop(CssJs.rem(1))
    ]);

var removeButton = CssJs.style([
      CssHelpers$Timerlab.noBorder,
      CssHelpers$Timerlab.noOutline,
      CssJs.padding(CssJs.zero),
      CssJs.margin(CssJs.zero),
      CssJs.position(CssJs.absolute),
      CssJs.top(CssJs.px(-6)),
      CssJs.right(CssJs.px(-6)),
      CssJs.width(CssJs.px(23)),
      CssJs.height(CssJs.px(22)),
      CssJs.cursor(CssJs.pointer),
      CssJs.borderRadius(CssJs.pct(50)),
      CssJs.background(Theme$Timerlab.Colors.primary),
      CssJs.transitionDuration(400),
      CssJs.after([
            CssJs.contentRule({
                  NAME: "url",
                  VAL: removeIcon
                }),
            CssJs.width(CssJs.px(10)),
            CssJs.height(CssJs.px(10))
          ])
    ]);

var buttonSelector = "." + removeButton;

var previewContainer = CssJs.style([
      CssJs.position(CssJs.relative),
      CssJs.width(CssJs.px(124)),
      CssJs.marginTop(CssJs.rem(0.25)),
      CssJs.selector(buttonSelector, [CssJs.opacity(0)]),
      CssJs.hover([CssJs.selector(buttonSelector, [CssJs.opacity(1)])])
    ]);

var preview = CssJs.style([
      CssJs.maxWidth(CssJs.px(124)),
      CssJs.borderRadius(CssJs.px(4))
    ]);

var controls = CssJs.style([CssJs.display("flex")]);

var imageOptions = CssJs.style([
      CssHelpers$Timerlab.fullWidth,
      CssJs.marginLeft(CssJs.rem(1.5))
    ]);

export {
  removeIcon ,
  wrapper ,
  label ,
  removeButton ,
  buttonSelector ,
  previewContainer ,
  preview ,
  controls ,
  imageOptions ,
  
}
/* removeIcon Not a pure module */

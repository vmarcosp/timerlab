

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

function getColor(x) {
  if (x === "default") {
    return CssJs.transparent;
  } else {
    return Theme$Timerlab.Colors.primary;
  }
}

function getHoverColor(x) {
  if (x === "default") {
    return CssJs.rgba(69, 48, 82, {
                NAME: "num",
                VAL: 0.16
              });
  } else {
    return CssJs.hex("C02A60");
  }
}

function button(variant, block) {
  return CssJs.style([
              CssJs.background(getColor(variant)),
              CssHelpers$Timerlab.noBorder,
              CssHelpers$Timerlab.noOutline,
              CssJs.color(CssJs.white),
              CssJs.borderRadius(CssJs.px(2)),
              CssJs.cursor(CssJs.pointer),
              block ? CssHelpers$Timerlab.fullWidth : CssJs.minWidth(CssJs.px(140)),
              CssJs.height(CssJs.px(40)),
              Theme$Timerlab.Fonts.text,
              CssJs.fontSize(CssJs.rem(1)),
              CssJs.transitionDuration(300),
              CssJs.hover([CssJs.background(getHoverColor(variant))])
            ]);
}

var Styles = {
  getColor: getColor,
  getHoverColor: getHoverColor,
  button: button
};

function Button(Props) {
  var children = Props.children;
  var onClick = Props.onClick;
  var variantOpt = Props.variant;
  var blockOpt = Props.block;
  var type_ = Props.type_;
  var variant = variantOpt !== undefined ? variantOpt : "primary";
  var block = blockOpt !== undefined ? blockOpt : false;
  var tmp = {
    className: button(variant, block)
  };
  if (type_ !== undefined) {
    tmp.type = Caml_option.valFromOption(type_);
  }
  if (onClick !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onClick);
  }
  return React.createElement("button", tmp, children);
}

var make = Button;

export {
  Styles ,
  make ,
  
}
/* CssJs Not a pure module */



import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

function getColor(param) {
  if (param === "default") {
    return Css.transparent;
  } else {
    return Theme$Timerlab.Colors.primary;
  }
}

function getHoverColor(param) {
  if (param === "default") {
    return Css.rgba(69, 48, 82, 0.16);
  } else {
    return Css.hex("C02A60");
  }
}

function button(variant) {
  return Curry._1(Css.style, {
              hd: Css.background(getColor(variant)),
              tl: {
                hd: CssHelpers$Timerlab.noBorder,
                tl: {
                  hd: CssHelpers$Timerlab.noOutline,
                  tl: {
                    hd: Css.color(Css.white),
                    tl: {
                      hd: Css.borderRadius(Css.px(2)),
                      tl: {
                        hd: Css.cursor(Css.pointer),
                        tl: {
                          hd: Css.minWidth(Css.px(140)),
                          tl: {
                            hd: Css.height(Css.px(40)),
                            tl: {
                              hd: Theme$Timerlab.Fonts.text,
                              tl: {
                                hd: Css.fontSize(Css.rem(1)),
                                tl: {
                                  hd: Css.marginLeft(Css.rem(1)),
                                  tl: {
                                    hd: Css.transitionDuration(300),
                                    tl: {
                                      hd: Css.hover({
                                            hd: Css.background(getHoverColor(variant)),
                                            tl: /* [] */0
                                          }),
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
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
  var variant = variantOpt !== undefined ? variantOpt : "primary";
  var tmp = {
    className: button(variant)
  };
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
/* Css Not a pure module */



import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as Helpers$Timerlab from "../../lib/Helpers.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var addIcon = require("./add.svg");

var editIcon = require("./edit.svg");

function button(textColor) {
  return Curry._1(Css.style, {
              hd: Css.fontSize(Css.rem(1)),
              tl: {
                hd: Css.color(textColor),
                tl: {
                  hd: Theme$Timerlab.Fonts.text,
                  tl: {
                    hd: CssHelpers$Timerlab.noOutline,
                    tl: {
                      hd: CssHelpers$Timerlab.noBorder,
                      tl: {
                        hd: Css.background(Css.transparent),
                        tl: {
                          hd: Css.padding(Css.zero),
                          tl: {
                            hd: Css.margin(Css.zero),
                            tl: {
                              hd: Css.cursor(Css.pointer),
                              tl: {
                                hd: Css.fontWeight({
                                      NAME: "num",
                                      VAL: 500
                                    }),
                                tl: {
                                  hd: Css.display("flex"),
                                  tl: {
                                    hd: Css.alignItems(Css.center),
                                    tl: {
                                      hd: Css.marginLeft(Css.rem(1)),
                                      tl: {
                                        hd: Css.selector("img", {
                                              hd: Css.marginRight(Css.rem(0.75)),
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
              }
            });
}

var wrapper = Curry._1(Css.style, {
      hd: Css.display("flex"),
      tl: {
        hd: Css.justifyContent(Css.flexEnd),
        tl: /* [] */0
      }
    });

function ThemeActions$Add(Props) {
  var onClick = Props.onClick;
  return React.createElement("button", {
              className: button(Theme$Timerlab.Colors.primary),
              onClick: (function (e) {
                  Helpers$Timerlab.preventDefault(e);
                  return Curry._1(onClick, e);
                })
            }, React.createElement("img", {
                  src: addIcon
                }), "Create theme");
}

var Add = {
  make: ThemeActions$Add
};

function ThemeActions$Edit(Props) {
  var onClick = Props.onClick;
  return React.createElement("button", {
              className: button(Css.hex("FF6635")),
              onClick: (function (e) {
                  Helpers$Timerlab.preventDefault(e);
                  return Curry._1(onClick, undefined);
                })
            }, React.createElement("img", {
                  src: editIcon
                }), "Edit theme");
}

var Edit = {
  make: ThemeActions$Edit
};

function ThemeActions(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: wrapper
            }, children);
}

var make = ThemeActions;

export {
  addIcon ,
  editIcon ,
  button ,
  wrapper ,
  Add ,
  Edit ,
  make ,
  
}
/* addIcon Not a pure module */

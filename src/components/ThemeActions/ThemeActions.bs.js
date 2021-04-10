

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as Helpers$Timerlab from "../../lib/Helpers.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";

var addIcon = require("./add.svg");

var editIcon = require("./edit.svg");

function button(textColor) {
  return CssJs.style([
              CssJs.fontSize(CssJs.rem(1)),
              CssJs.color(textColor),
              Theme$Timerlab.Fonts.text,
              CssHelpers$Timerlab.noOutline,
              CssHelpers$Timerlab.noBorder,
              CssJs.background(CssJs.transparent),
              CssJs.padding(CssJs.zero),
              CssJs.margin(CssJs.zero),
              CssJs.cursor(CssJs.pointer),
              CssJs.fontWeight({
                    NAME: "num",
                    VAL: 500
                  }),
              CssJs.display("flex"),
              CssJs.alignItems(CssJs.center),
              CssJs.marginLeft(CssJs.rem(1)),
              CssJs.selector("img", [CssJs.marginRight(CssJs.rem(0.75))])
            ]);
}

var wrapper = CssJs.style([
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.flexEnd)
    ]);

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

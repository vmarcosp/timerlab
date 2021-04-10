

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as PlayIcon$Timerlab from "./PlayIcon.bs.js";
import * as PauseIcon$Timerlab from "./PauseIcon.bs.js";
import * as ResetIcon$Timerlab from "./ResetIcon.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";
import * as ToggleIcon$Timerlab from "./ToggleIcon.bs.js";

var button = CssJs.style([
      CssHelpers$Timerlab.noBorder,
      CssHelpers$Timerlab.noOutline,
      CssJs.padding(CssJs.zero),
      CssJs.background(CssJs.transparent),
      CssJs.cursor(CssJs.pointer),
      CssJs.selector("&:nth-child(2)", [CssJs.marginLeft(CssJs.rem(1))]),
      CssJs.selector(":disabled", [CssJs.opacity(1.5)])
    ]);

function icon(isOpen) {
  return Curry._1(Css.style, {
              hd: Css.transform({
                    NAME: "rotate",
                    VAL: {
                      NAME: "deg",
                      VAL: isOpen ? 0 : 180
                    }
                  }),
              tl: {
                hd: Css.transitionDuration(300),
                tl: /* [] */0
              }
            });
}

function Controls$TogglePlay(Props) {
  var onPause = Props.onPause;
  var onPlay = Props.onPlay;
  var color = Props.color;
  var status = Props.status;
  var toggleTimer = Props.toggleTimer;
  var disabled = Props.disabled;
  return React.createElement("button", {
              className: button,
              disabled: disabled,
              onClick: (function (param) {
                  Curry._1(toggleTimer, (function (param) {
                          return !status;
                        }));
                  if (status) {
                    return Curry._1(onPause, undefined);
                  } else {
                    return Curry._1(onPlay, undefined);
                  }
                })
            }, status ? React.createElement(PauseIcon$Timerlab.make, {
                    color: color
                  }) : React.createElement(PlayIcon$Timerlab.make, {
                    color: color
                  }));
}

var TogglePlay = {
  make: Controls$TogglePlay
};

function Controls$Reset(Props) {
  var onClick = Props.onClick;
  var color = Props.color;
  return React.createElement("button", {
              className: button,
              onClick: (function (param) {
                  return Curry._1(onClick, undefined);
                })
            }, React.createElement(ResetIcon$Timerlab.make, {
                  color: color
                }));
}

var Reset = {
  make: Controls$Reset
};

function Controls$ToggleSidebar(Props) {
  var onClick = Props.onClick;
  var isOpen = Props.isOpen;
  var color = Props.color;
  return React.createElement("button", {
              className: button,
              onClick: (function (param) {
                  return Curry._1(onClick, undefined);
                })
            }, React.createElement(ToggleIcon$Timerlab.make, {
                  className: icon(isOpen),
                  color: color
                }));
}

var ToggleSidebar = {
  make: Controls$ToggleSidebar
};

export {
  button ,
  icon ,
  TogglePlay ,
  Reset ,
  ToggleSidebar ,
  
}
/* button Not a pure module */

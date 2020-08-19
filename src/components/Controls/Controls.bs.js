

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as PlayIcon$Timerlab from "./PlayIcon.bs.js";
import * as PauseIcon$Timerlab from "./PauseIcon.bs.js";
import * as ResetIcon$Timerlab from "./ResetIcon.bs.js";
import * as CssHelpers$Timerlab from "../../ui/CssHelpers.bs.js";
import * as ToggleIcon$Timerlab from "./ToggleIcon.bs.js";

var button = Curry._1(Css.style, {
      hd: CssHelpers$Timerlab.noBorder,
      tl: {
        hd: CssHelpers$Timerlab.noOutline,
        tl: {
          hd: Css.padding(Css.zero),
          tl: {
            hd: Css.background(Css.transparent),
            tl: {
              hd: Css.cursor(Css.pointer),
              tl: {
                hd: Css.selector("&:nth-child(2)", {
                      hd: Css.marginLeft(Css.rem(1)),
                      tl: /* [] */0
                    }),
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

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
  var match = React.useState(function () {
        return false;
      });
  var setState = match[1];
  var state = match[0];
  return React.createElement("button", {
              className: button,
              onClick: (function (param) {
                  Curry._1(setState, (function (param) {
                          return !state;
                        }));
                  if (state) {
                    return Curry._1(onPause, undefined);
                  } else {
                    return Curry._1(onPlay, undefined);
                  }
                })
            }, state ? React.createElement(PauseIcon$Timerlab.make, {
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

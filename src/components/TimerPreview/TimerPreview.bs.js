

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Controls$Timerlab from "../Controls/Controls.bs.js";
import * as TimerPreviewStyles$Timerlab from "./TimerPreviewStyles.bs.js";

function TimerPreview(Props) {
  var titleValueOpt = Props.title;
  var descriptionValueOpt = Props.description;
  var onToggle = Props.onToggle;
  var fullWidth = Props.fullWidth;
  var theme = Props.theme;
  var timer = Props.timer;
  var time = Props.time;
  var titleValue = titleValueOpt !== undefined ? titleValueOpt : "Cool title";
  var descriptionValue = descriptionValueOpt !== undefined ? descriptionValueOpt : "Cool description";
  var match = React.useState(function () {
        return false;
      });
  var seconds = timer.seconds;
  var minutes = timer.minutes;
  var toggleTimer = match[1];
  var isToggleDisabled = minutes === "00" && seconds === "00";
  React.useEffect((function () {
          Curry._1(toggleTimer, (function (param) {
                  return false;
                }));
          Curry._1(timer.setTimer, time);
          
        }), [time]);
  var handleReset = function (param) {
    Curry._1(timer.setTimer, time);
    Curry._1(timer.pause, undefined);
    return Curry._1(toggleTimer, (function (param) {
                  return false;
                }));
  };
  var onStart = function (param) {
    if (isToggleDisabled) {
      return Curry._1(toggleTimer, (function (param) {
                    return false;
                  }));
    } else {
      return Curry._1(timer.start, undefined);
    }
  };
  return React.createElement("div", {
              className: TimerPreviewStyles$Timerlab.wrapper(fullWidth, theme)
            }, React.createElement("div", {
                  className: TimerPreviewStyles$Timerlab.header
                }, React.createElement(Controls$Timerlab.ToggleSidebar.make, {
                      onClick: onToggle,
                      isOpen: fullWidth,
                      color: theme.primaryColor
                    }), React.createElement("div", undefined, React.createElement(Controls$Timerlab.Reset.make, {
                          onClick: handleReset,
                          color: theme.primaryColor
                        }), React.createElement(Controls$Timerlab.TogglePlay.make, {
                          onPause: timer.pause,
                          onPlay: onStart,
                          color: theme.primaryColor,
                          status: match[0],
                          toggleTimer: toggleTimer,
                          disabled: isToggleDisabled
                        }))), React.createElement("div", {
                  className: TimerPreviewStyles$Timerlab.content
                }, React.createElement("h1", {
                      className: TimerPreviewStyles$Timerlab.title(theme.primaryColor)
                    }, titleValue), React.createElement("h2", {
                      className: TimerPreviewStyles$Timerlab.subtitle(theme.secondaryColor)
                    }, descriptionValue), React.createElement("p", {
                      className: TimerPreviewStyles$Timerlab.timerValue(theme.primaryColor)
                    }, "" + minutes + ":" + seconds)));
}

var make = TimerPreview;

export {
  make ,
  
}
/* react Not a pure module */

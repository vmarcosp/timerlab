

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
  var titleValue = titleValueOpt !== undefined ? titleValueOpt : "Cool title";
  var descriptionValue = descriptionValueOpt !== undefined ? descriptionValueOpt : "Cool description";
  return React.createElement("div", {
              className: TimerPreviewStyles$Timerlab.wrapper(fullWidth, theme)
            }, React.createElement("div", {
                  className: TimerPreviewStyles$Timerlab.header
                }, React.createElement(Controls$Timerlab.ToggleSidebar.make, {
                      onClick: onToggle,
                      isOpen: fullWidth,
                      color: theme.primaryColor
                    }), React.createElement("div", undefined, React.createElement(Controls$Timerlab.Reset.make, {
                          onClick: timer.reset,
                          color: theme.primaryColor
                        }), React.createElement(Controls$Timerlab.TogglePlay.make, {
                          onPause: timer.pause,
                          onPlay: timer.start,
                          color: theme.primaryColor
                        }))), React.createElement("div", {
                  className: TimerPreviewStyles$Timerlab.content
                }, React.createElement("h1", {
                      className: TimerPreviewStyles$Timerlab.title(theme.secondaryColor)
                    }, titleValue), React.createElement("h2", {
                      className: TimerPreviewStyles$Timerlab.subtitle(theme.primaryColor)
                    }, descriptionValue), React.createElement("p", {
                      className: TimerPreviewStyles$Timerlab.timerValue(theme.secondaryColor)
                    }, "" + timer.minutes + ":" + timer.seconds)));
}

var make = TimerPreview;

export {
  make ,
  
}
/* react Not a pure module */

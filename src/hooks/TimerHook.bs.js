

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ID$Timerlab from "../lib/ID.bs.js";
import * as UseTimer from "@fdaciuk/use-timer";
import * as Operators$Timerlab from "../lib/Operators.bs.js";
import * as TimerTypes$Timerlab from "../types/TimerTypes.bs.js";
import * as TimerValues$Timerlab from "../lib/TimerValues.bs.js";

function toThemeForm(id, newTheme, theme) {
  if (theme.id === id) {
    return TimerTypes$Timerlab.fromThemeForm(newTheme, id);
  } else {
    return theme;
  }
}

function byThemeId(id, theme) {
  return theme.id === id;
}

function useTimer(param) {
  var match = React.useState(function () {
        return [
                TimerValues$Timerlab.initialConfig,
                TimerValues$Timerlab.cleanTheme
              ];
      });
  var setConfig = match[1];
  var match$1 = React.useState(function () {
        return true;
      });
  var setVisible = match$1[1];
  var visible = match$1[0];
  var match$2 = React.useState(function () {
        return /* Default */1;
      });
  var setStatus = match$2[1];
  var match$3 = React.useState(function () {
        return TimerValues$Timerlab.defaultThemes;
      });
  var setThemes = match$3[1];
  var themes = match$3[0];
  var timer = UseTimer.default(TimerValues$Timerlab.initialConfig.time);
  var openCreateTheme = function (param) {
    return Curry._1(setStatus, (function (param) {
                  return /* IsCreating */0;
                }));
  };
  var closeModal = function (param) {
    return Curry._1(setStatus, (function (param) {
                  return /* Default */1;
                }));
  };
  var toggleVisible = function (param) {
    return Curry._1(setVisible, (function (param) {
                  return !visible;
                }));
  };
  var onCreateNewTheme = function (values, form) {
    var newTheme = TimerTypes$Timerlab.fromThemeForm(values, ID$Timerlab.generate(undefined));
    var allThemes = Belt_Array.concat(themes, [newTheme]);
    Curry._1(setThemes, (function (param) {
            return allThemes;
          }));
    Curry._1(setStatus, (function (param) {
            return /* Default */1;
          }));
    return Curry._1(form.reset, undefined);
  };
  var onEditTheme = function (themeId) {
    var maybe = Belt_Array.getBy(themes, (function (theme) {
            return theme.id === themeId;
          }));
    if (maybe !== undefined) {
      return Curry._1(setStatus, (function (param) {
                    return /* IsEditing */{
                            _0: themeId,
                            _1: TimerTypes$Timerlab.toInput(maybe)
                          };
                  }));
    }
    
  };
  var updateTheme = function (themeId, updatedTheme, form) {
    var allThemes = Belt_Array.map(themes, (function (param) {
            return toThemeForm(themeId, updatedTheme, param);
          }));
    Curry._1(setThemes, (function (param) {
            return allThemes;
          }));
    Curry._1(setStatus, (function (param) {
            return /* Default */1;
          }));
    Curry._1(form.reset, undefined);
    
  };
  var onSubmit = function (newConfig, form) {
    var partial_arg = newConfig.theme;
    var selectedTheme = Operators$Timerlab.$great$great$question(Belt_Array.getBy(themes, (function (param) {
                return param.id === partial_arg;
              })), TimerValues$Timerlab.cleanTheme);
    Curry._1(setConfig, (function (param) {
            return [
                    newConfig,
                    selectedTheme
                  ];
          }));
    Curry._1(timer.setTimer, newConfig.time);
    return Curry._1(form.notifyOnSuccess, newConfig);
  };
  return [
          onSubmit,
          openCreateTheme,
          onCreateNewTheme,
          onEditTheme,
          updateTheme,
          closeModal,
          toggleVisible,
          visible,
          match$2[0],
          themes,
          TimerValues$Timerlab.initialConfig,
          timer,
          match[0]
        ];
}

var darkThemeId = TimerValues$Timerlab.darkThemeId;

var cleanThemeId = TimerValues$Timerlab.cleanThemeId;

var initialConfig = TimerValues$Timerlab.initialConfig;

var cleanTheme = TimerValues$Timerlab.cleanTheme;

var darkTheme = TimerValues$Timerlab.darkTheme;

var defaultThemes = TimerValues$Timerlab.defaultThemes;

var initialValues = TimerValues$Timerlab.initialValues;

export {
  darkThemeId ,
  cleanThemeId ,
  initialConfig ,
  cleanTheme ,
  darkTheme ,
  defaultThemes ,
  initialValues ,
  toThemeForm ,
  byThemeId ,
  useTimer ,
  
}
/* react Not a pure module */

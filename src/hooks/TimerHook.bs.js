

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ID$Timerlab from "../lib/ID.bs.js";
import UseTimer from "@fdaciuk/use-timer";
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

function setNewTheme(form, newTheme) {
  return Curry._2(form.updateTheme, (function (input, theme) {
                return {
                        title: input.title,
                        description: input.description,
                        time: input.time,
                        theme: theme
                      };
              }), newTheme);
}

function useTimer(configForm) {
  var match = React.useState(function () {
        return true;
      });
  var setVisible = match[1];
  var visible = match[0];
  var match$1 = React.useState(function () {
        return /* Default */1;
      });
  var setStatus = match$1[1];
  var match$2 = React.useState(function () {
        return TimerValues$Timerlab.defaultThemes;
      });
  var setThemes = match$2[1];
  var themes = match$2[0];
  var timer = UseTimer(TimerValues$Timerlab.initialConfig.time);
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
    setNewTheme(configForm, newTheme.id);
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
  var getTheme = function (id) {
    return Operators$Timerlab.$great$great$question(Belt_Array.getBy(themes, (function (param) {
                      return param.id === id;
                    })), TimerValues$Timerlab.cleanTheme);
  };
  return [
          getTheme,
          openCreateTheme,
          onCreateNewTheme,
          onEditTheme,
          updateTheme,
          closeModal,
          toggleVisible,
          visible,
          match$1[0],
          themes,
          timer
        ];
}

var darkThemeId = TimerValues$Timerlab.darkThemeId;

var cleanThemeId = TimerValues$Timerlab.cleanThemeId;

var baseConfig = TimerValues$Timerlab.baseConfig;

var initialConfig = TimerValues$Timerlab.initialConfig;

var cleanTheme = TimerValues$Timerlab.cleanTheme;

var darkTheme = TimerValues$Timerlab.darkTheme;

var lukinCleanTheme = TimerValues$Timerlab.lukinCleanTheme;

var lukinDarkTheme = TimerValues$Timerlab.lukinDarkTheme;

var defaultThemes = TimerValues$Timerlab.defaultThemes;

var initialValues = TimerValues$Timerlab.initialValues;

export {
  darkThemeId ,
  cleanThemeId ,
  baseConfig ,
  initialConfig ,
  cleanTheme ,
  darkTheme ,
  lukinCleanTheme ,
  lukinDarkTheme ,
  defaultThemes ,
  initialValues ,
  toThemeForm ,
  byThemeId ,
  setNewTheme ,
  useTimer ,
  
}
/* react Not a pure module */

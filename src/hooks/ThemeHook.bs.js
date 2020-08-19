

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ID$Timerlab from "../lib/ID.bs.js";
import * as Theme$Timerlab from "../ui/Theme.bs.js";
import * as TimerTypes$Timerlab from "../types/TimerTypes.bs.js";

var darkThemeId = ID$Timerlab.generate(undefined);

var cleanThemeId = ID$Timerlab.generate(undefined);

var defaultThemes = [
  {
    id: cleanThemeId,
    name: "Clean",
    primaryColor: Theme$Timerlab.Colors.primaryRaw,
    secondaryColor: Theme$Timerlab.Colors.backgroundRaw,
    background: {
      TAG: /* Color */1,
      _0: "fff"
    },
    default: true
  },
  {
    id: darkThemeId,
    name: "Dark",
    primaryColor: Theme$Timerlab.Colors.primaryRaw,
    secondaryColor: "fff",
    background: {
      TAG: /* Color */1,
      _0: Theme$Timerlab.Colors.backgroundRaw
    },
    default: false
  }
];

function findTheme(id, newTheme, theme) {
  if (theme.id === id) {
    return TimerTypes$Timerlab.fromThemeForm(newTheme, id);
  } else {
    return theme;
  }
}

function useThemes(param) {
  var match = React.useState(function () {
        return /* Default */1;
      });
  var setStatus = match[1];
  var match$1 = React.useState(function () {
        return defaultThemes;
      });
  var setThemes = match$1[1];
  var themes = match$1[0];
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
            return findTheme(themeId, updatedTheme, param);
          }));
    Curry._1(setThemes, (function (param) {
            return allThemes;
          }));
    Curry._1(setStatus, (function (param) {
            return /* Default */1;
          }));
    Curry._1(form.reset, undefined);
    
  };
  return [
          openCreateTheme,
          onCreateNewTheme,
          onEditTheme,
          updateTheme,
          closeModal,
          match[0],
          themes
        ];
}

var initialValues = {
  name: "",
  primaryColor: "",
  secondaryColor: "",
  backgroundColor: "",
  backgroundImage: ""
};

export {
  darkThemeId ,
  cleanThemeId ,
  defaultThemes ,
  initialValues ,
  findTheme ,
  useThemes ,
  
}
/* darkThemeId Not a pure module */

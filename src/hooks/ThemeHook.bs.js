

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ID$Timerlab from "../lib/ID.bs.js";
import * as Theme$Timerlab from "../ui/Theme.bs.js";
import * as ThemeSelect$Timerlab from "../components/ThemeSelect/ThemeSelect.bs.js";

var darkThemeId = ID$Timerlab.generate(undefined);

var cleanThemeId = ID$Timerlab.generate(undefined);

var defaultThemes = [
  {
    id: cleanThemeId,
    name: "Clean",
    primaryColor: Theme$Timerlab.Colors.primaryRaw,
    secondaryColor: Theme$Timerlab.Colors.backgroundRaw,
    background: "fff",
    default: true
  },
  {
    id: darkThemeId,
    name: "Dark",
    primaryColor: Theme$Timerlab.Colors.primaryRaw,
    secondaryColor: "fff",
    background: Theme$Timerlab.Colors.backgroundRaw,
    default: false
  }
];

function useThemes(param) {
  var match = React.useState(function () {
        return /* Default */2;
      });
  var setStatus = match[1];
  var match$1 = React.useState(function () {
        return defaultThemes;
      });
  var openCreateTheme = function (param) {
    return Curry._1(setStatus, (function (param) {
                  return /* IsCreating */0;
                }));
  };
  var closeNewTheme = function (param) {
    return Curry._1(setStatus, (function (param) {
                  return /* Default */2;
                }));
  };
  var onCreateNewTheme = function (values, param) {
    console.log(values);
    
  };
  return [
          openCreateTheme,
          onCreateNewTheme,
          closeNewTheme,
          match[0],
          match$1[0]
        ];
}

var newKey = ThemeSelect$Timerlab.newKey;

export {
  newKey ,
  darkThemeId ,
  cleanThemeId ,
  defaultThemes ,
  useThemes ,
  
}
/* darkThemeId Not a pure module */

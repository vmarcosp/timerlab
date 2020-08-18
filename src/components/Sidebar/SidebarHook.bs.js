

import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ThemeHook$Timerlab from "../../hooks/ThemeHook.bs.js";
import * as SidebarForm$Timerlab from "./SidebarForm.bs.js";

var initialInput = {
  title: "",
  description: "",
  time: "",
  theme: ThemeHook$Timerlab.cleanThemeId
};

function getTheme(id, themes) {
  return Belt_Array.getBy(themes, (function (theme) {
                return theme.id === id;
              }));
}

function canEdit(id, themes) {
  var match = getTheme(id, themes);
  if (match !== undefined && match.default) {
    return false;
  } else {
    return true;
  }
}

function useSidebar(onChange) {
  return SidebarForm$Timerlab.useForm(initialInput, (function (value, param) {
                console.log(value, onChange);
                
              }));
}

export {
  initialInput ,
  getTheme ,
  canEdit ,
  useSidebar ,
  
}
/* ThemeHook-Timerlab Not a pure module */

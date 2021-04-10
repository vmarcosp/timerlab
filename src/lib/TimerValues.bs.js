

import * as Theme$Timerlab from "../ui/Theme.bs.js";
import * as Browser$ResLogger from "res-logger/src/Browser.bs.js";
import * as SidebarForm$Timerlab from "../components/Sidebar/SidebarForm.bs.js";

var darkThemeId = "wz2o9z7-7h4vzhz";

var cleanThemeId = "9rp3ltp-o8g9nqu";

var baseConfig = {
  title: "Some title",
  description: "Some description",
  time: "05:00",
  theme: cleanThemeId
};

var match = SidebarForm$Timerlab.$$Storage.get(undefined);

var initialConfig;

if (match !== undefined) {
  if (match.TAG === /* Ok */0) {
    initialConfig = match._0;
  } else {
    Browser$ResLogger.error1({
          rootModule: "TimerValues",
          subModulePath: /* [] */0,
          value: "initialConfig",
          fullPath: "TimerValues.initialConfig",
          filePath: "/home/bvihjcep/Projects/timerlab/src/lib/TimerValues.res"
        }, "Storage#key: " + SidebarForm$Timerlab.$$Storage.key, [
          "Parsing error",
          match._0
        ]);
    initialConfig = baseConfig;
  }
} else {
  initialConfig = baseConfig;
}

var cleanTheme_primaryColor = Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.primaryRaw);

var cleanTheme_secondaryColor = Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.backgroundRaw);

var cleanTheme_background = {
  TAG: /* Color */1,
  _0: "#fff"
};

var cleanTheme = {
  id: cleanThemeId,
  name: "Timerlab",
  primaryColor: cleanTheme_primaryColor,
  secondaryColor: cleanTheme_secondaryColor,
  background: cleanTheme_background,
  default: true,
  overlayColor: "",
  opacity: 0.0
};

var darkTheme_primaryColor = Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.primaryRaw);

var darkTheme_background = {
  TAG: /* Color */1,
  _0: Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.backgroundRaw)
};

var darkTheme = {
  id: darkThemeId,
  name: "Timerlab Dark",
  primaryColor: darkTheme_primaryColor,
  secondaryColor: "#FFF",
  background: darkTheme_background,
  default: true,
  overlayColor: "",
  opacity: 0.0
};

var lukinCleanTheme = {
  id: "dyorwgn-3eoihsl",
  name: "Lukin",
  primaryColor: "#f36",
  secondaryColor: "#00000",
  background: {
    TAG: /* Color */1,
    _0: "#fff"
  },
  default: true,
  overlayColor: "",
  opacity: 0.0
};

var lukinDarkTheme = {
  id: "sr8akgy-3bibn4x",
  name: "Lukin Dark",
  primaryColor: "#f36",
  secondaryColor: "#fff",
  background: {
    TAG: /* Color */1,
    _0: "#000"
  },
  default: true,
  overlayColor: "",
  opacity: 0.0
};

var defaultThemes = [
  cleanTheme,
  darkTheme,
  lukinCleanTheme,
  lukinDarkTheme
];

var initialValues_primaryColor = cleanTheme_primaryColor;

var initialValues_secondaryColor = cleanTheme_secondaryColor;

var initialValues = {
  name: "",
  primaryColor: initialValues_primaryColor,
  secondaryColor: initialValues_secondaryColor,
  backgroundColor: "#FFF",
  backgroundImage: "",
  overlayColor: "#000",
  opacity: 0.7
};

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
  
}
/* match Not a pure module */

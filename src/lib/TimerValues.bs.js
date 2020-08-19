

import * as ID$Timerlab from "./ID.bs.js";
import * as Theme$Timerlab from "../ui/Theme.bs.js";

var darkThemeId = ID$Timerlab.generate(undefined);

var cleanThemeId = ID$Timerlab.generate(undefined);

var initialConfig_title = "Meetup ReasonBR";

var initialConfig = {
  title: initialConfig_title,
  description: "A cool description here",
  time: "05:00",
  theme: cleanThemeId
};

var cleanTheme_primaryColor = Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.primaryRaw);

var cleanTheme_secondaryColor = Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.backgroundRaw);

var cleanTheme_background = {
  TAG: /* Color */1,
  _0: "#fff"
};

var cleanTheme = {
  id: cleanThemeId,
  name: "Clean",
  primaryColor: cleanTheme_primaryColor,
  secondaryColor: cleanTheme_secondaryColor,
  background: cleanTheme_background,
  default: true
};

var darkTheme_primaryColor = Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.primaryRaw);

var darkTheme_background = {
  TAG: /* Color */1,
  _0: Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.backgroundRaw)
};

var darkTheme = {
  id: darkThemeId,
  name: "Dark",
  primaryColor: darkTheme_primaryColor,
  secondaryColor: "#FFF",
  background: darkTheme_background,
  default: false
};

var defaultThemes = [
  darkTheme,
  cleanTheme
];

var initialValues_primaryColor = cleanTheme_primaryColor;

var initialValues_secondaryColor = cleanTheme_secondaryColor;

var initialValues = {
  name: "",
  primaryColor: initialValues_primaryColor,
  secondaryColor: initialValues_secondaryColor,
  backgroundColor: "#FFF",
  backgroundImage: ""
};

export {
  darkThemeId ,
  cleanThemeId ,
  initialConfig ,
  cleanTheme ,
  darkTheme ,
  defaultThemes ,
  initialValues ,
  
}
/* darkThemeId Not a pure module */

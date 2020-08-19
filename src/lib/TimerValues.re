open TimerTypes;

let darkThemeId = ID.generate();
let cleanThemeId = ID.generate();

let initialConfig: SidebarForm.output = {
  title: {j|Meetup ReasonBR|j},
  description: "A cool description here",
  time: "05:00",
  theme: cleanThemeId,
};

let cleanTheme = {
  id: cleanThemeId,
  name: "Clean",
  primaryColor: Theme.Colors.(primaryRaw->toHex),
  secondaryColor: Theme.Colors.(backgroundRaw->toHex),
  background: Color("#fff"),
  default: true,
};

let darkTheme = {
  id: darkThemeId,
  name: "Dark",
  primaryColor: Theme.Colors.(primaryRaw->toHex),
  secondaryColor: "#FFF",
  background: Color(Theme.Colors.(backgroundRaw->toHex)),
  default: false,
};

let defaultThemes = [|darkTheme, cleanTheme|];

let initialValues: ThemeForm.input = {
  name: "",
  primaryColor: cleanTheme.primaryColor,
  secondaryColor: cleanTheme.secondaryColor,
  backgroundColor: "#FFF",
  backgroundImage: "",
};

open TimerTypes;

let darkThemeId = "wz2o9z7-7h4vzhz";
let cleanThemeId = "9rp3ltp-o8g9nqu";

let baseConfig: SidebarForm.output = {
  title: "Some title",
  description: "Some description",
  time: "05:00",
  theme: cleanThemeId,
};

let initialConfig =
  switch (SidebarForm.Storage.get()) {
  | None => baseConfig
  | Some(Ok(config)) => config
  | Some(Error(error)) =>
    [%log.error
      "Storage#key: " ++ SidebarForm.Storage.key;
      ("Parsing error", error)
    ];

    baseConfig;
  };

let cleanTheme =
  Theme.Colors.{
    id: cleanThemeId,
    name: "Timerlab",
    primaryColor: primaryRaw->toHex,
    secondaryColor: backgroundRaw->toHex,
    background: Color("#fff"),
    default: true,
    overlayColor: "",
    opacity: 0.0,
  };

let darkTheme =
  Theme.Colors.{
    id: darkThemeId,
    name: "Timerlab Dark",
    primaryColor: primaryRaw->toHex,
    secondaryColor: "#FFF",
    background: backgroundRaw->toHex->Color,
    default: true,
    overlayColor: "",
    opacity: 0.0,
  };

let lukinCleanTheme = {
  id: "dyorwgn-3eoihsl",
  name: "Lukin",
  primaryColor: "#f36",
  secondaryColor: "#00000",
  background: Color("#fff"),
  default: true,
  overlayColor: "",
  opacity: 0.0,
};

let lukinDarkTheme = {
  id: "sr8akgy-3bibn4x",
  name: "Lukin Dark",
  primaryColor: "#f36",
  secondaryColor: "#fff",
  background: Color("#000"),
  default: true,
  overlayColor: "",
  opacity: 0.0,
};

let defaultThemes = [|
  cleanTheme,
  darkTheme,
  lukinCleanTheme,
  lukinDarkTheme,
|];

let initialValues: ThemeForm.input = {
  name: "",
  primaryColor: cleanTheme.primaryColor,
  secondaryColor: cleanTheme.secondaryColor,
  backgroundColor: "#FFF",
  backgroundImage: "",
  overlayColor: "#000",
  opacity: 0.7,
};

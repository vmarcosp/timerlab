open TimerTypes;

let newKey = ThemeSelect.newKey;

let darkThemeId = ID.generate();
let cleanThemeId = ID.generate();

let defaultThemes = [|
  {
    id: cleanThemeId,
    name: "Clean",
    primaryColor: Theme.Colors.primaryRaw,
    secondaryColor: Theme.Colors.backgroundRaw,
    background: "fff",
    default: true,
  },
  {
    id: darkThemeId,
    name: "Dark",
    primaryColor: Theme.Colors.primaryRaw,
    secondaryColor: "fff",
    background: Theme.Colors.backgroundRaw,
    default: false,
  },
|];

type status =
  | IsCreating
  | IsEditing
  | Default;

let useThemes = () => {
  let (status, setStatus) = React.useState(_ => Default);
  let (themes, _) = React.useState(_ => defaultThemes);

  let openCreateTheme = _ => setStatus(_ => IsCreating);

  let closeNewTheme = () => setStatus(_ => Default);

  let onCreateNewTheme = (values, _) => {
    Js.log(values);
  };

  (openCreateTheme, onCreateNewTheme, closeNewTheme, status, themes);
};

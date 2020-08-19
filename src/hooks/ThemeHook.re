open TimerTypes;

let darkThemeId = ID.generate();
let cleanThemeId = ID.generate();

let defaultThemes = [|
  {
    id: cleanThemeId,
    name: "Clean",
    primaryColor: Theme.Colors.primaryRaw,
    secondaryColor: Theme.Colors.backgroundRaw,
    background: Color("fff"),
    default: true,
  },
  {
    id: darkThemeId,
    name: "Dark",
    primaryColor: Theme.Colors.primaryRaw,
    secondaryColor: "fff",
    background: Color(Theme.Colors.backgroundRaw),
    default: false,
  },
|];

let initialValues: ThemeForm.input = {
  name: "",
  primaryColor: "",
  secondaryColor: "",
  backgroundColor: "",
  backgroundImage: "",
};

let findTheme = (id, newTheme, theme) =>
  theme.id === id ? fromThemeForm(newTheme, id) : theme;

let useThemes = () => {
  let (status, setStatus) = React.useState(_ => Default);
  let (themes, setThemes) = React.useState(_ => defaultThemes);

  let openCreateTheme = _ => setStatus(_ => IsCreating);

  let closeModal = () => setStatus(_ => Default);

  let onCreateNewTheme = (values, form: ThemeForm.submissionForm) => {
    let newTheme = fromThemeForm(values, ID.generate());
    let allThemes = Array.concat(themes, [|newTheme|]);
    setThemes(_ => allThemes);
    closeModal();
    form.reset();
  };

  let onEditTheme = themeId => {
    let maybe = themes->Array.getBy(theme => theme.id == themeId);
    switch (maybe) {
    | Some(theme) => setStatus(_ => IsEditing(themeId, theme->toInput))
    | None => ()
    };
  };

  let updateTheme = (themeId, updatedTheme, form: ThemeForm.submissionForm) => {
    let allThemes = themes->Array.map(findTheme(themeId, updatedTheme));
    setThemes(_ => allThemes);
    closeModal();
    form.reset();
    ();
  };

  (
    openCreateTheme,
    onCreateNewTheme,
    onEditTheme,
    updateTheme,
    closeModal,
    status,
    themes,
  );
};

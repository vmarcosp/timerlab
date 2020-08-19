open Operators;
open TimerTypes;
include TimerValues;

let toThemeForm = (id, newTheme, theme) =>
  theme.id === id ? fromThemeForm(newTheme, id) : theme;

let byThemeId = (id, theme) => theme.id == id;

let useTimer = () => {
  let (config, setConfig) = React.useState(_ => (initialConfig, cleanTheme));
  let (visible, setVisible) = React.useState(_ => true);
  let (status, setStatus) = React.useState(_ => Default);
  let (themes, setThemes) = React.useState(_ => defaultThemes);
  let timer = UseTimerHook.useTimer(initialConfig.time);

  let openCreateTheme = _ => setStatus(_ => IsCreating);
  let closeModal = () => setStatus(_ => Default);
  let toggleVisible = () => setVisible(_ => !visible);

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
    let allThemes = themes->Array.map(toThemeForm(themeId, updatedTheme));
    setThemes(_ => allThemes);
    closeModal();
    form.reset();
    ();
  };

  let onSubmit =
      (newConfig: SidebarForm.output, form: SidebarForm.submissionForm) => {
    let selectedTheme =
      themes->Array.getBy(byThemeId(newConfig.theme)) >>? cleanTheme;
    setConfig(_ => (newConfig, selectedTheme));
    timer.setTimer(newConfig.time);
    form.notifyOnSuccess(Some(newConfig));
  };

  (
    onSubmit,
    openCreateTheme,
    onCreateNewTheme,
    onEditTheme,
    updateTheme,
    closeModal,
    toggleVisible,
    visible,
    status,
    themes,
    initialConfig,
    timer,
    config,
  );
};

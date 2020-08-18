open ThemeHook;

let initialValues: ThemeForm.input = {
  id: "",
  name: "",
  primaryColor: "",
  secondaryColor: "",
  background: "",
};

[@react.component]
let make = () => {
  let (openCreateTheme, createNewTheme, closeNewTheme, status, themes) =
    useThemes();

  <>
    <Sidebar themes onCreateTheme=openCreateTheme />
    <ThemeModal
      initialValues
      onFinish=createNewTheme
      onCancel=closeNewTheme
      visible={status === IsCreating}
    />
  </>;
};

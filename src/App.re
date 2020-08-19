open ThemeHook;

[@react.component]
let make = () => {
  let (
    openCreateTheme,
    createNewTheme,
    onEditTheme,
    updateTheme,
    closeModal,
    status,
    themes,
  ) =
    useThemes();

  <>
    <Sidebar themes onEditTheme onCreateTheme=openCreateTheme />
    <ThemeModal
      initialValues
      onFinish=createNewTheme
      onCancel=closeModal
      visible={status === IsCreating}
    />
    {switch (status) {
     | IsEditing(id, values) =>
       <ThemeModal
         initialValues=values
         onFinish={updateTheme(id)}
         onCancel=closeModal
         visible=true
         title="Edit theme"
       />
     | _ => React.null
     }}
  </>;
};

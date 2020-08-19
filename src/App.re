open TimerHook;

let onSubmit = (_, _) => ();

[@react.component]
let make = () => {
  let (
    onSubmit,
    openCreateTheme,
    createNewTheme,
    onEditTheme,
    updateTheme,
    closeModal,
    toggleVisible,
    visible,
    status,
    themes,
    initialInput,
    timer,
    (config, theme),
  ) =
    useTimer();

  <>
    <Sidebar
      onSubmit
      initialInput
      visible
      themes
      onEditTheme
      onCreateTheme=openCreateTheme
    />
    <TimerPreview
      timer
      theme
      time={config.time}
      title={config.title}
      description={config.description}
      fullWidth=visible
      onToggle=toggleVisible
    />
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

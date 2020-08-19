open TimerHook;

let onSubmit = (_, _) => ();

[@react.component]
let make = () => {
  let form =
    SidebarForm.useForm(~initialInput=TimerValues.initialConfig, ~onSubmit);

  let (
    getTheme,
    openCreateTheme,
    createNewTheme,
    onEditTheme,
    updateTheme,
    closeModal,
    toggleVisible,
    visible,
    status,
    themes,
    timer,
  ) =
    useTimer(form);

  <>
    <Sidebar form visible themes onEditTheme onCreateTheme=openCreateTheme />
    <TimerPreview
      timer
      theme={getTheme(form.input.theme)}
      time={form.input.time}
      title={form.input.title}
      description={form.input.description}
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

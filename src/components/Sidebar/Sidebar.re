open SidebarForm;
open TimerTypes;

let getTheme = (id, themes) => themes->Array.getBy(theme => theme.id === id);

let canEdit = (id, themes) =>
  switch (getTheme(id, themes)) {
  | Some({default: false, _})
  | None => true
  | _ => false
  };

[@react.component]
let make =
    (
      ~themes,
      ~onCreateTheme,
      ~onEditTheme,
      ~visible,
      ~onSubmit,
      ~initialInput,
    ) => {
  let form = SidebarForm.useForm(~initialInput, ~onSubmit);
  SidebarStyles.(
    <aside className={sidebar(visible)}>
      <Form className=configForm onSubmit={form.submit}>
        <SidebarHeader />
        <div className=content>
          <Input
            onChange={form->updateTitle}
            value={form.input.title}
            label="Title"
            placeholder="Title"
          />
          <Input
            required=true
            onChange={form->updateDescription}
            value={form.input.description}
            label="Description"
            placeholder="Description"
          />
          <InputTime onChange={form->updateTime} value={form.input.time} />
          <ThemeSelect
            onChange={form->updateTheme}
            value={form.input.theme}
            options=themes
          />
          <ThemeActions>
            {canEdit(form.input.theme, themes)
               ? <ThemeActions.Edit
                   onClick={() => onEditTheme(form.input.theme)}
                 />
               : React.null}
            <ThemeActions.Add onClick=onCreateTheme />
          </ThemeActions>
        </div>
        <SidebarFooter />
      </Form>
    </aside>
  );
};

open SidebarForm;
open SidebarHook;

[@react.component]
let make = (~themes, ~onCreateTheme) => {
  let form = useSidebar();

  SidebarStyles.(
    <aside className=sidebar>
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
               ? <ThemeActions.Edit /> : React.null}
            <ThemeActions.Add onClick=onCreateTheme />
          </ThemeActions>
        </div>
        <SidebarFooter />
      </Form>
    </aside>
  );
};

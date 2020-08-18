open TimerTypes;

let initialInput: SidebarForm.input = {
  title: "",
  description: "",
  time: "",
  theme: ThemeHook.cleanThemeId,
};

let getTheme = (id, themes) => themes->Array.getBy(theme => theme.id === id);

let canEdit = (id, themes) =>
  switch (getTheme(id, themes)) {
  | Some({default: false, _})
  | None => true
  | _ => false
  };

let useSidebar = onChange => {
  let form =
    SidebarForm.useForm(~initialInput, ~onSubmit=(value, _) =>
      Js.log2(value, onChange)
    );
  form;
};

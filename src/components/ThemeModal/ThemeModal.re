open ThemeForm;

[@react.component]
let make =
    (
      ~visible,
      ~onCancel,
      ~initialValues as initialInput,
      ~onFinish as onSubmit,
    ) => {
  let form = useForm(~initialInput, ~onSubmit);
  ThemeModalStyles.(
    <Form onSubmit={form.submit}>
      <Modal onCancel visible title="New theme">
        <Input required=true onChange={form->updateName} label="Name" />
        <div className=colors>
          <Input onChange={form->updatePrimaryColor} label="Primary color" />
          <Input onChange={form->updatePrimaryColor} label="Secondary color" />
        </div>
        <Input onChange={form->updateBackground} label="Background" />
        <Uploader />
      </Modal>
    </Form>
  );
};

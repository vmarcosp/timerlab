open ThemeForm;

[@react.component]
let make =
    (
      ~visible,
      ~onCancel,
      ~initialValues as initialInput,
      ~onFinish as onSubmit,
      ~title="New theme",
    ) => {
  let form = useForm(~initialInput, ~onSubmit);
  ThemeModalStyles.(
    <Form onSubmit={form.submit}>
      <Modal onCancel visible title>
        <Input
          value={form.input.name}
          required=true
          onChange={form->updateName}
          label="Name"
        />
        <div className=colors>
          <InputColor
            required=true
            value={form.input.primaryColor}
            onChange={form->updatePrimaryColor}
            label="Primary color"
          />
          <InputColor
            required=true
            value={form.input.secondaryColor}
            onChange={form->updateSecondaryColor}
            label="Secondary color"
          />
        </div>
        <InputColor
          value={form.input.backgroundColor}
          onChange={form->updateBackgroundColor}
          label="Background color"
        />
        <OrLabel />
        <Uploader
          value={form.input.backgroundImage}
          opacity={form.input.opacity}
          overlayColor={form.input.overlayColor}
          onChange={form->updateBackgroundImage}
          onOpacityChange={form->updateOpacity}
          onOverlayChange={form->updateOverlayColor}
        />
      </Modal>
    </Form>
  );
};

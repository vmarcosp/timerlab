[@react.component]
let make = (~visible, ~onCancel=?) => {
  ThemeModalStyles.(
    <Modal ?onCancel visible title="New theme">
      <Input label="Name" />
      <div className=colors>
        <Input label="Primary color" />
        <Input label="Secondary color" />
      </div>
      <Input label="Background" />
      <br />
      <Uploader />
    </Modal>
  );
};

[@react.component]
let make = (~children, ~title as modalTitle, ~onCancel, ~visible=false) => {
  ModalStyles.(
    <div className={wrapper(visible)}>
      <div className=modal>
        <div className=header>
          <h2 className=title> modalTitle->React.string </h2>
        </div>
        <div className=content> children </div>
        <div className=footer>
          <Button
            onClick={e => {
              Helpers.preventDefault(e);
              onCancel();
            }}
            variant=`default>
            "Cancel"
          </Button>
          <Button type_="submit"> "Save" </Button>
        </div>
      </div>
    </div>
  );
};

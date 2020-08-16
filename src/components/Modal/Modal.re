[@react.component]
let make = (~children, ~title as modalTitle) => {
  ModalStyles.(
    <div className=wrapper>
      <div className=modal>
        <div className=header>
          <h2 className=title> modalTitle->React.string </h2>
        </div>
        <div className=content> children </div>
        <div className=footer>
          <Button variant=`default> "Cancel" </Button>
          <Button> "Save" </Button>
        </div>
      </div>
    </div>
  );
};

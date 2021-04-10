@react.component
let make = (~children, ~title as modalTitle, ~onCancel, ~visible=false) => {
  open ModalStyles
  <div className={wrapper(visible)}>
    <div className=modal>
      <div className=header> <h3 className=title> {modalTitle->React.string} </h3> </div>
      <div className=content> children </div>
      <div className=footer>
        <Button
          onClick={e => {
            Helpers.preventDefault(e)
            onCancel()
          }}
          variant=#default>
          "Cancel"
        </Button>
        <Button type_="submit"> "Save" </Button>
      </div>
    </div>
  </div>
}

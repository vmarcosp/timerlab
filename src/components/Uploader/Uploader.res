let icon = Helpers.import_("./upload-icon.svg")

@react.component
let make = (~onChange, ~value, ~onOpacityChange, ~onOverlayChange, ~opacity, ~overlayColor) => {
  let (onUpload, removePreview, inputRef) = UploaderHook.useUploader(onChange)

  open UploaderStyles
  switch value {
  | "" => <>
      <Label> "Use an image" </Label>
      <label className=wrapper>
        <input
          ref={ReactDOM.Ref.domRef(inputRef)}
          onChange=onUpload
          accept=".png,.jpg,.jpeg"
          type_="file"
        />
        <img src=icon alt="Upload icon" />
        <p className=label> {"Click here to select an image"->React.string} </p>
      </label>
    </>
  | result =>
    <div className=controls>
      <ImagePreview onRemove=removePreview src=result />
      <div className=imageOptions>
        <InputColor value=overlayColor onChange=onOverlayChange label="Overlay color" />
        <InputRange value=opacity onChange=onOpacityChange min="0" max="1" label="Opacity" />
      </div>
    </div>
  }
}

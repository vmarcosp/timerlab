let icon = Helpers.import("./upload-icon.svg");

[@react.component]
let make = (~onChange, ~value) => {
  let (onUpload, removePreview, inputRef) =
    UploaderHook.useUploader(onChange);

  UploaderStyles.(
    switch (value) {
    | "" =>
      <label className=wrapper>
        <input
          ref={ReactDOM.Ref.domRef(inputRef)}
          onChange=onUpload
          accept=".png,.jpg"
          type_="file"
        />
        <img src=icon alt="Upload icon" />
        <p className=label> "Click here to select an image"->React.string </p>
      </label>
    | result => <ImagePreview onRemove=removePreview src=result />
    }
  );
};

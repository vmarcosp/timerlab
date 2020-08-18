let icon = Helpers.import("./upload-icon.svg");

[@react.component]
let make = () => {
  let (onUpload, removePreview, file, inputRef) = UploaderHook.useUploader();

  UploaderStyles.(
    switch (file) {
    | Some(result) => <ImagePreview onRemove=removePreview src=result />
    | None =>
      <label className=wrapper>
        <input
          ref={ReactDOM.Ref.domRef(inputRef)}
          onChange=onUpload
          accept=".png,.jpg"
          type_="file"
        />
        <img src=icon alt="Upload icon" />
        <p className=label> "Click here to select a file"->React.string </p>
      </label>
    }
  );
};

let readFile = (cb, event) => {
  open FileReader;
  let file = ReactEvent.Form.target(event)##files[0];
  let reader = FileReader.make();
  reader->addEventListener("load", event => cb(event.target.result));
  reader->readAsDataURL(file);
  ();
};

let useUploader = onChange => {
  let inputRef = React.useRef(Js.Nullable.null);

  let onUploadImage = readFile(result => {onChange(result)});
  let removePreview = () => onChange("");

  (onUploadImage, removePreview, inputRef);
};

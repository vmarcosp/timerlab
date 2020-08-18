let readFile = (cb, event) => {
  open FileReader;
  let file = ReactEvent.Form.target(event)##files[0];
  let reader = FileReader.make();
  reader->addEventListener("load", event => cb(event.target.result));
  reader->readAsDataURL(file);
  ();
};

let useUploader = () => {
  let inputRef = React.useRef(Js.Nullable.null);
  let (file, setFile) = React.useState(_ => None);

  let onUploadImage = readFile(result => setFile(_ => Some(result)));
  let removePreview = () => setFile(_ => None);

  (onUploadImage, removePreview, file, inputRef);
};

let icon = Helpers.import("./upload-icon.svg");

[@react.component]
let make = () => {
  UploaderStyles.(
    <label className=wrapper>
      <input type_="file" />
      <img src=icon alt="Upload icon" />
      <p className=label> "Click here to select a file"->React.string </p>
    </label>
  );
};

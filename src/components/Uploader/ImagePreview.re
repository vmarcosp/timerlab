[@react.component]
let make = (~src, ~onRemove) => {
  UploaderStyles.(
    <div className=previewContainer>
      <button
        onClick={e => {
          Helpers.preventDefault(e);
          onRemove();
        }}
        className=removeButton
      />
      <img className=preview src />
    </div>
  );
};

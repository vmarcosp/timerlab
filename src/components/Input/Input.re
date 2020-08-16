module Styles = InputStyles;

[@react.component]
let make =
    (
      ~placeholder=?,
      ~onChange=?,
      ~value=?,
      ~name=?,
      ~onBlur=?,
      ~label as labelValue=?,
      ~type_=?,
    ) => {
  Styles.(
    <div>
      {switch (labelValue) {
       | Some(value) => <Label> value </Label>
       | None => React.null
       }}
      <input
        ?type_
        ?placeholder
        ?onChange
        ?value
        ?name
        ?onBlur
        className=input
      />
    </div>
  );
};

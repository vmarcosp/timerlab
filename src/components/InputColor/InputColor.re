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
      ~innerRef=?,
      ~required=false,
    ) => {
  InputColorStyles.(
    <div className=wrapper>
      {switch (labelValue) {
       | Some(value) => <Label> value </Label>
       | None => React.null
       }}
      <input
        ref=?innerRef
        type_="color"
        ?placeholder
        ?onChange
        ?value
        ?name
        ?onBlur
        required
        className=input
      />
    </div>
  );
};

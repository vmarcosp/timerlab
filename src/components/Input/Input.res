module Styles = InputStyles

@react.component
let make = (
  ~placeholder=?,
  ~onChange=?,
  ~value=?,
  ~name=?,
  ~onBlur=?,
  ~label as labelValue=?,
  ~type_=?,
  ~innerRef=?,
  ~required=false,
) => {
  open Styles
  <div>
    {switch labelValue {
    | Some(value) => <Label> value </Label>
    | None => React.null
    }}
    <input
      ref=?innerRef ?type_ ?placeholder ?onChange ?value ?name ?onBlur required className=input
    />
  </div>
}

@react.component
let make = (~label as labelValue=?, ~children, ~onChange=?, ~value=?) => {
  open SelectStyles
  <div>
    {switch labelValue {
    | Some(value) => <Label> value </Label>
    | None => React.null
    }}
    <div className=wrapper> <select ?value ?onChange className=select> children </select> </div>
  </div>
}

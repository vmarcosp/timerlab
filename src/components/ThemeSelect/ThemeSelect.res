open TimerTypes

let newKey = "new-theme"

@react.component
let make = (~options, ~onChange=?, ~value=?) => <>
  <Select ?value ?onChange label="Theme">
    {options->Render.map((index, theme) =>
      <option value=theme.id key=index> {theme.name->React.string} </option>
    )}
  </Select>
</>

let number = [%re "/\d/"];
let mask = (number, number, ":", number, number, ":", number, number);

[@react.component]
let make = (~onChange=?, ~value=?) =>
  <TextMask
    mask
    ?onChange
    ?value
    render={(innerRef, props) =>
      <Input
        placeholder="00:00:00"
        label="Time"
        innerRef
        value={props.value}
        onChange={props.onChange}
      />
    }
  />;

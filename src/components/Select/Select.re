[@react.component]
let make = (~label as labelValue=?, ~children) => {
  SelectStyles.(
    <div>
      {switch (labelValue) {
       | Some(value) => <Label> value </Label>
       | None => React.null
       }}
      <select className=select> children </select>
    </div>
  );
};

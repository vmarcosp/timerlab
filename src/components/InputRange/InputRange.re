module Styles = InputRangeStyles;

[@react.component]
let make =
    (
      ~placeholder=?,
      ~onChange=?,
      ~value,
      ~name=?,
      ~onBlur=?,
      ~label as labelValue=?,
      ~innerRef=?,
      ~required=false,
      ~min,
      ~max,
    ) => {
  Js.log(value);
  Styles.(
    <div>
      {switch (labelValue) {
       | Some(value) =>
         <label className=rangeLabel> value->React.string </label>
       | None => React.null
       }}
      <input
        ref=?innerRef
        type_="range"
        min
        max
        ?placeholder
        ?onChange
        value={Js.Float.toString(value)}
        ?name
        ?onBlur
        required
        step=0.1
        className=input
      />
      <span className=rangeValue>
        {value->Js.Float.toString->React.string}
      </span>
    </div>
  );
};

let getValue = event => event->ReactEvent.Form.target##value;

let handleSubmit = (onSubmit, event) => {
  ReactEvent.Form.preventDefault(event);
  onSubmit();
};

let handleChange = (updater, cb, event) => {
  updater(cb, getValue(event));
};

[@react.component]
let make = (~children, ~className=?, ~onSubmit as submit: unit => unit) => {
  let styles =
    switch (className) {
    | None => ""
    | Some(clazz) => clazz
    };

  <form className=styles onSubmit={handleSubmit(submit)}> children </form>;
};

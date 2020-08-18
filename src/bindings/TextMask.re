type props = {
  onChange: ReactEvent.Form.t => unit,
  value: string,
};
[@bs.module "react-text-mask"] [@react.component]
external make:
  (
    ~mask: 'regex,
    ~value: string=?,
    ~onChange: ReactEvent.Form.t => unit=?,
    ~render: (ReactDOM.domRef, props) => React.element=?
  ) =>
  'a =
  "default";

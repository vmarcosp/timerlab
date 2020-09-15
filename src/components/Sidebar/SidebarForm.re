include [%form
          [@decco]
          type input = {
            title: string,
            description: string,
            time: string,
            theme: string,
          };
          let validators = {
            title: None,
            description: None,
            time: {
              strategy: OnSubmit,
              validate: ({time}) =>
                Ok(Js.String.replaceByRe([%re "/_/g"], "0", time)),
            },
            theme: None,
          }
        ];

type submissionForm = Formality.submissionCallbacks(input, submissionError);

module Storage = {
  open Dom.Storage;

  let key = "SidebarForm:state";

  let get = () =>
    Option.map(localStorage |> getItem(key), value =>
      value |> Js.Json.parseExn |> input_decode
    );

  let update = (state: input) => {
    input_encode(state) |> Js.Json.stringify |> setItem(key, _, localStorage);

    state;
  };
};

let handleChange = (updater, callback, event) => {
  Form.handleChange(
    updater,
    (input: input, value) => {callback(input, value) |> Storage.update},
    event,
  );
};

let updateTitle = form =>
  handleChange(form.updateTitle, (input: input, title) => {...input, title});

let updateDescription = form =>
  handleChange(form.updateDescription, (input: input, description) =>
    {...input, description}
  );

let updateTime = form =>
  handleChange(form.updateTime, (input: input, time) => {...input, time});

let updateTheme = form =>
  handleChange(form.updateTheme, (input: input, theme) => {...input, theme});

include [%form
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

let handleChange = Form.handleChange;

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

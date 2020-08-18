include [%form
          type input = {
            id: string,
            name: string,
            primaryColor: string,
            secondaryColor: string,
            background: string,
          };
          let validators = {
            id: None,
            name: None,
            primaryColor: None,
            secondaryColor: None,
            background: None,
          }
        ];

type submissionForm = Formality.submissionCallbacks(input, submissionError);

let handleChange = Form.handleChange;

let updateName = form =>
  handleChange(form.updateName, (input: input, name) => {...input, name});

let updatePrimaryColor = form =>
  handleChange(form.updatePrimaryColor, (input: input, primaryColor) =>
    {...input, primaryColor}
  );

let updateSecondaryColor = form =>
  handleChange(form.updateSecondaryColor, (input: input, secondaryColor) =>
    {...input, secondaryColor}
  );

let updateBackground = form =>
  handleChange(form.updateBackground, (input: input, background) =>
    {...input, background}
  );

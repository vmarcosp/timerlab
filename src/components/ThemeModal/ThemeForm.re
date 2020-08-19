type background =
  | Image(string)
  | Color(string);

include [%form
          type input = {
            name: string,
            primaryColor: string,
            secondaryColor: string,
            backgroundColor: string,
            backgroundImage: string,
          };
          type output = {
            name: string,
            primaryColor: string,
            secondaryColor: string,
            backgroundColor: option(string),
            backgroundImage: option(string),
          };
          let validators = {
            name: None,
            primaryColor: None,
            secondaryColor: None,
            backgroundColor: {
              strategy: OnSubmit,
              validate: ({backgroundColor}) =>
                switch (backgroundColor) {
                | "" => Ok(None)
                | color => Ok(Some(color))
                },
            },
            backgroundImage: {
              strategy: OnSubmit,
              validate: ({backgroundImage}) =>
                switch (backgroundImage) {
                | "" => Ok(None)
                | image => Ok(Some(image))
                },
            },
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

let updateBackgroundColor = form =>
  handleChange(form.updateBackgroundColor, (input: input, backgroundColor) =>
    {...input, backgroundColor}
  );

let updateBackgroundImage = (form, result) =>
  form.updateBackgroundImage(
    (input: input, backgroundImage) => {...input, backgroundImage},
    result,
  );

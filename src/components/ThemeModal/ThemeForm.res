type background =
  | Image(string)
  | Color(string)

include %form(
  type input = {
    name: string,
    primaryColor: string,
    secondaryColor: string,
    backgroundColor: string,
    backgroundImage: string,
    overlayColor: string,
    opacity: float,
  }
  type output = {
    name: string,
    primaryColor: string,
    secondaryColor: string,
    backgroundColor: option<string>,
    backgroundImage: option<string>,
    overlayColor: string,
    opacity: float,
  }
  let validators = {
    name: None,
    overlayColor: None,
    opacity: None,
    primaryColor: {
      strategy: OnSubmit,
      validate: ({primaryColor}) => Ok(
        primaryColor === ""
          ? {
              open Theme.Colors
              primaryRaw->toHex
            }
          : primaryColor,
      ),
    },
    secondaryColor: {
      strategy: OnSubmit,
      validate: ({secondaryColor}) => Ok(secondaryColor === "" ? "#000" : secondaryColor),
    },
    backgroundColor: {
      strategy: OnSubmit,
      validate: ({backgroundColor}) =>
        switch backgroundColor {
        | "" => Ok(None)
        | color => Ok(Some(color))
        },
    },
    backgroundImage: {
      strategy: OnSubmit,
      validate: ({backgroundImage}) =>
        switch backgroundImage {
        | "" => Ok(None)
        | image => Ok(Some(image))
        },
    },
  }
)

type submissionForm = Formality.submissionCallbacks<input, submissionError>

let handleChange = Form.handleChange

let updateName = form =>
  handleChange(form.updateName, (input: input, name) => {...input, name: name})

let updatePrimaryColor = form =>
  handleChange(form.updatePrimaryColor, (input: input, primaryColor) => {
    ...input,
    primaryColor: primaryColor,
  })

let updateSecondaryColor = form =>
  handleChange(form.updateSecondaryColor, (input: input, secondaryColor) => {
    ...input,
    secondaryColor: secondaryColor,
  })

let updateBackgroundColor = form =>
  handleChange(form.updateBackgroundColor, (input: input, backgroundColor) => {
    ...input,
    backgroundColor: backgroundColor,
  })

let updateBackgroundImage = (form, result) =>
  form.updateBackgroundImage(
    (input: input, backgroundImage) => {...input, backgroundImage: backgroundImage},
    result,
  )

let updateOverlayColor = form =>
  handleChange(form.updateOverlayColor, (input: input, overlayColor) => {
    ...input,
    overlayColor: overlayColor,
  })

let updateOpacity = form =>
  handleChange(form.updateOpacity, (input: input, opacity) => {...input, opacity: opacity})

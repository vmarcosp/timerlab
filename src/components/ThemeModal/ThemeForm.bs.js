

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Formality from "re-formality/src/Formality.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Form$Timerlab from "../Form/Form.bs.js";
import * as Theme$Timerlab from "../../ui/Theme.bs.js";
import * as Formality__ReactUpdate from "re-formality/src/Formality__ReactUpdate.bs.js";

var validators_backgroundImage = {
  strategy: /* OnSubmit */4,
  validate: (function (param) {
      var backgroundImage = param.backgroundImage;
      if (backgroundImage === "") {
        return {
                TAG: /* Ok */0,
                _0: undefined
              };
      } else {
        return {
                TAG: /* Ok */0,
                _0: backgroundImage
              };
      }
    })
};

var validators_backgroundColor = {
  strategy: /* OnSubmit */4,
  validate: (function (param) {
      var backgroundColor = param.backgroundColor;
      if (backgroundColor === "") {
        return {
                TAG: /* Ok */0,
                _0: undefined
              };
      } else {
        return {
                TAG: /* Ok */0,
                _0: backgroundColor
              };
      }
    })
};

var validators_secondaryColor = {
  strategy: /* OnSubmit */4,
  validate: (function (param) {
      var secondaryColor = param.secondaryColor;
      return {
              TAG: /* Ok */0,
              _0: secondaryColor === "" ? "#000" : secondaryColor
            };
    })
};

var validators_primaryColor = {
  strategy: /* OnSubmit */4,
  validate: (function (param) {
      var primaryColor = param.primaryColor;
      return {
              TAG: /* Ok */0,
              _0: primaryColor === "" ? Theme$Timerlab.Colors.toHex(Theme$Timerlab.Colors.primaryRaw) : primaryColor
            };
    })
};

var validators = {
  opacity: undefined,
  overlayColor: undefined,
  backgroundImage: validators_backgroundImage,
  backgroundColor: validators_backgroundColor,
  secondaryColor: validators_secondaryColor,
  primaryColor: validators_primaryColor,
  name: undefined
};

function initialFieldsStatuses(_input) {
  return {
          opacity: /* Pristine */0,
          overlayColor: /* Pristine */0,
          backgroundImage: /* Pristine */0,
          backgroundColor: /* Pristine */0,
          secondaryColor: /* Pristine */0,
          primaryColor: /* Pristine */0,
          name: /* Pristine */0
        };
}

function initialState(input) {
  return {
          input: input,
          fieldsStatuses: initialFieldsStatuses(input),
          collectionsStatuses: undefined,
          formStatus: /* Editing */0,
          submissionStatus: /* NeverSubmitted */0
        };
}

function validateForm(input, validators, fieldsStatuses) {
  var match_0 = {
    TAG: /* Ok */0,
    _0: input.opacity
  };
  var match_0$1 = {
    TAG: /* Ok */0,
    _0: input.overlayColor
  };
  var match = fieldsStatuses.backgroundImage;
  var match_0$2 = match ? match._0 : Curry._1(validators.backgroundImage.validate, input);
  var match$1 = fieldsStatuses.backgroundColor;
  var match_0$3 = match$1 ? match$1._0 : Curry._1(validators.backgroundColor.validate, input);
  var match$2 = fieldsStatuses.secondaryColor;
  var match_0$4 = match$2 ? match$2._0 : Curry._1(validators.secondaryColor.validate, input);
  var match$3 = fieldsStatuses.primaryColor;
  var match_0$5 = match$3 ? match$3._0 : Curry._1(validators.primaryColor.validate, input);
  var match_0$6 = {
    TAG: /* Ok */0,
    _0: input.name
  };
  var opacityResult = match_0;
  var opacityResult$1;
  if (opacityResult.TAG === /* Ok */0) {
    var overlayColorResult = match_0$1;
    if (overlayColorResult.TAG === /* Ok */0) {
      var backgroundImageResult = match_0$2;
      if (backgroundImageResult.TAG === /* Ok */0) {
        var backgroundColorResult = match_0$3;
        if (backgroundColorResult.TAG === /* Ok */0) {
          var secondaryColorResult = match_0$4;
          if (secondaryColorResult.TAG === /* Ok */0) {
            var primaryColorResult = match_0$5;
            if (primaryColorResult.TAG === /* Ok */0) {
              var nameResult = match_0$6;
              if (nameResult.TAG === /* Ok */0) {
                return {
                        TAG: /* Valid */0,
                        output: {
                          name: nameResult._0,
                          primaryColor: primaryColorResult._0,
                          secondaryColor: secondaryColorResult._0,
                          backgroundColor: backgroundColorResult._0,
                          backgroundImage: backgroundImageResult._0,
                          overlayColor: overlayColorResult._0,
                          opacity: opacityResult._0
                        },
                        fieldsStatuses: {
                          opacity: /* Dirty */{
                            _0: opacityResult,
                            _1: /* Hidden */1
                          },
                          overlayColor: /* Dirty */{
                            _0: overlayColorResult,
                            _1: /* Hidden */1
                          },
                          backgroundImage: /* Dirty */{
                            _0: backgroundImageResult,
                            _1: /* Shown */0
                          },
                          backgroundColor: /* Dirty */{
                            _0: backgroundColorResult,
                            _1: /* Shown */0
                          },
                          secondaryColor: /* Dirty */{
                            _0: secondaryColorResult,
                            _1: /* Shown */0
                          },
                          primaryColor: /* Dirty */{
                            _0: primaryColorResult,
                            _1: /* Shown */0
                          },
                          name: /* Dirty */{
                            _0: nameResult,
                            _1: /* Hidden */1
                          }
                        },
                        collectionsStatuses: undefined
                      };
              }
              opacityResult$1 = opacityResult;
            } else {
              opacityResult$1 = opacityResult;
            }
          } else {
            opacityResult$1 = opacityResult;
          }
        } else {
          opacityResult$1 = opacityResult;
        }
      } else {
        opacityResult$1 = opacityResult;
      }
    } else {
      opacityResult$1 = opacityResult;
    }
  } else {
    opacityResult$1 = opacityResult;
  }
  return {
          TAG: /* Invalid */1,
          fieldsStatuses: {
            opacity: /* Dirty */{
              _0: opacityResult$1,
              _1: /* Hidden */1
            },
            overlayColor: /* Dirty */{
              _0: match_0$1,
              _1: /* Hidden */1
            },
            backgroundImage: /* Dirty */{
              _0: match_0$2,
              _1: /* Shown */0
            },
            backgroundColor: /* Dirty */{
              _0: match_0$3,
              _1: /* Shown */0
            },
            secondaryColor: /* Dirty */{
              _0: match_0$4,
              _1: /* Shown */0
            },
            primaryColor: /* Dirty */{
              _0: match_0$5,
              _1: /* Shown */0
            },
            name: /* Dirty */{
              _0: match_0$6,
              _1: /* Hidden */1
            }
          },
          collectionsStatuses: undefined
        };
}

function useForm(initialInput, onSubmit) {
  var memoizedInitialState = React.useMemo((function () {
          return initialState(initialInput);
        }), [initialInput]);
  var match = Formality__ReactUpdate.useReducer(memoizedInitialState, (function (state, action) {
          if (typeof action === "number") {
            switch (action) {
              case /* BlurOpacityField */0 :
                  var result = Formality.validateFieldOnBlurWithoutValidator(state.input.opacity, state.fieldsStatuses.opacity, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: status,
                                  overlayColor: init.overlayColor,
                                  backgroundImage: init.backgroundImage,
                                  backgroundColor: init.backgroundColor,
                                  secondaryColor: init.secondaryColor,
                                  primaryColor: init.primaryColor,
                                  name: init.name
                                };
                        }));
                  if (result !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurOverlayColorField */1 :
                  var result$1 = Formality.validateFieldOnBlurWithoutValidator(state.input.overlayColor, state.fieldsStatuses.overlayColor, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: init.opacity,
                                  overlayColor: status,
                                  backgroundImage: init.backgroundImage,
                                  backgroundColor: init.backgroundColor,
                                  secondaryColor: init.secondaryColor,
                                  primaryColor: init.primaryColor,
                                  name: init.name
                                };
                        }));
                  if (result$1 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$1,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurBackgroundImageField */2 :
                  var result$2 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.backgroundImage, validators_backgroundImage, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: init.opacity,
                                  overlayColor: init.overlayColor,
                                  backgroundImage: status,
                                  backgroundColor: init.backgroundColor,
                                  secondaryColor: init.secondaryColor,
                                  primaryColor: init.primaryColor,
                                  name: init.name
                                };
                        }));
                  if (result$2 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$2,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurBackgroundColorField */3 :
                  var result$3 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.backgroundColor, validators_backgroundColor, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: init.opacity,
                                  overlayColor: init.overlayColor,
                                  backgroundImage: init.backgroundImage,
                                  backgroundColor: status,
                                  secondaryColor: init.secondaryColor,
                                  primaryColor: init.primaryColor,
                                  name: init.name
                                };
                        }));
                  if (result$3 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$3,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurSecondaryColorField */4 :
                  var result$4 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.secondaryColor, validators_secondaryColor, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: init.opacity,
                                  overlayColor: init.overlayColor,
                                  backgroundImage: init.backgroundImage,
                                  backgroundColor: init.backgroundColor,
                                  secondaryColor: status,
                                  primaryColor: init.primaryColor,
                                  name: init.name
                                };
                        }));
                  if (result$4 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$4,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurPrimaryColorField */5 :
                  var result$5 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.primaryColor, validators_primaryColor, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: init.opacity,
                                  overlayColor: init.overlayColor,
                                  backgroundImage: init.backgroundImage,
                                  backgroundColor: init.backgroundColor,
                                  secondaryColor: init.secondaryColor,
                                  primaryColor: status,
                                  name: init.name
                                };
                        }));
                  if (result$5 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$5,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurNameField */6 :
                  var result$6 = Formality.validateFieldOnBlurWithoutValidator(state.input.name, state.fieldsStatuses.name, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  opacity: init.opacity,
                                  overlayColor: init.overlayColor,
                                  backgroundImage: init.backgroundImage,
                                  backgroundColor: init.backgroundColor,
                                  secondaryColor: init.secondaryColor,
                                  primaryColor: init.primaryColor,
                                  name: status
                                };
                        }));
                  if (result$6 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$6,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* Submit */7 :
                  var match = state.formStatus;
                  if (typeof match !== "number" && match.TAG === /* Submitting */0) {
                    return /* NoUpdate */0;
                  }
                  var match$1 = validateForm(state.input, validators, state.fieldsStatuses);
                  if (match$1.TAG !== /* Valid */0) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: match$1.fieldsStatuses,
                              collectionsStatuses: match$1.collectionsStatuses,
                              formStatus: /* Editing */0,
                              submissionStatus: /* AttemptedToSubmit */1
                            }
                          };
                  }
                  var output = match$1.output;
                  var error = state.formStatus;
                  var tmp;
                  tmp = typeof error === "number" || error.TAG !== /* SubmissionFailed */1 ? undefined : Caml_option.some(error._0);
                  return {
                          TAG: /* UpdateWithSideEffects */1,
                          _0: {
                            input: state.input,
                            fieldsStatuses: match$1.fieldsStatuses,
                            collectionsStatuses: match$1.collectionsStatuses,
                            formStatus: {
                              TAG: /* Submitting */0,
                              _0: tmp
                            },
                            submissionStatus: /* AttemptedToSubmit */1
                          },
                          _1: (function (param) {
                              var dispatch = param.dispatch;
                              return Curry._2(onSubmit, output, {
                                          notifyOnSuccess: (function (input) {
                                              return Curry._1(dispatch, {
                                                          TAG: /* SetSubmittedStatus */7,
                                                          _0: input
                                                        });
                                            }),
                                          notifyOnFailure: (function (error) {
                                              return Curry._1(dispatch, {
                                                          TAG: /* SetSubmissionFailedStatus */8,
                                                          _0: error
                                                        });
                                            }),
                                          reset: (function (param) {
                                              return Curry._1(dispatch, /* Reset */10);
                                            }),
                                          dismissSubmissionResult: (function (param) {
                                              return Curry._1(dispatch, /* DismissSubmissionResult */9);
                                            })
                                        });
                            })
                        };
                  break;
              case /* DismissSubmissionError */8 :
                  var match$2 = state.formStatus;
                  if (typeof match$2 === "number" || match$2.TAG !== /* SubmissionFailed */1) {
                    return /* NoUpdate */0;
                  } else {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: state.fieldsStatuses,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Editing */0,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
              case /* DismissSubmissionResult */9 :
                  var match$3 = state.formStatus;
                  if (typeof match$3 === "number") {
                    if (match$3 === /* Editing */0) {
                      return /* NoUpdate */0;
                    }
                    
                  } else if (match$3.TAG === /* Submitting */0) {
                    return /* NoUpdate */0;
                  }
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: state.input,
                            fieldsStatuses: state.fieldsStatuses,
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: /* Editing */0,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* Reset */10 :
                  return {
                          TAG: /* Update */0,
                          _0: initialState(initialInput)
                        };
              
            }
          } else {
            switch (action.TAG | 0) {
              case /* UpdateOpacityField */0 :
                  var nextInput = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput.opacity, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: status,
                                            overlayColor: init.overlayColor,
                                            backgroundImage: init.backgroundImage,
                                            backgroundColor: init.backgroundColor,
                                            secondaryColor: init.secondaryColor,
                                            primaryColor: init.primaryColor,
                                            name: init.name
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateOverlayColorField */1 :
                  var nextInput$1 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$1,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$1.overlayColor, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: init.opacity,
                                            overlayColor: status,
                                            backgroundImage: init.backgroundImage,
                                            backgroundColor: init.backgroundColor,
                                            secondaryColor: init.secondaryColor,
                                            primaryColor: init.primaryColor,
                                            name: init.name
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateBackgroundImageField */2 :
                  var nextInput$2 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$2,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$2, state.fieldsStatuses.backgroundImage, state.submissionStatus, validators_backgroundImage, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: init.opacity,
                                            overlayColor: init.overlayColor,
                                            backgroundImage: status,
                                            backgroundColor: init.backgroundColor,
                                            secondaryColor: init.secondaryColor,
                                            primaryColor: init.primaryColor,
                                            name: init.name
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateBackgroundColorField */3 :
                  var nextInput$3 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$3,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$3, state.fieldsStatuses.backgroundColor, state.submissionStatus, validators_backgroundColor, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: init.opacity,
                                            overlayColor: init.overlayColor,
                                            backgroundImage: init.backgroundImage,
                                            backgroundColor: status,
                                            secondaryColor: init.secondaryColor,
                                            primaryColor: init.primaryColor,
                                            name: init.name
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateSecondaryColorField */4 :
                  var nextInput$4 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$4,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$4, state.fieldsStatuses.secondaryColor, state.submissionStatus, validators_secondaryColor, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: init.opacity,
                                            overlayColor: init.overlayColor,
                                            backgroundImage: init.backgroundImage,
                                            backgroundColor: init.backgroundColor,
                                            secondaryColor: status,
                                            primaryColor: init.primaryColor,
                                            name: init.name
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdatePrimaryColorField */5 :
                  var nextInput$5 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$5,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$5, state.fieldsStatuses.primaryColor, state.submissionStatus, validators_primaryColor, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: init.opacity,
                                            overlayColor: init.overlayColor,
                                            backgroundImage: init.backgroundImage,
                                            backgroundColor: init.backgroundColor,
                                            secondaryColor: init.secondaryColor,
                                            primaryColor: status,
                                            name: init.name
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateNameField */6 :
                  var nextInput$6 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$6,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$6.name, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            opacity: init.opacity,
                                            overlayColor: init.overlayColor,
                                            backgroundImage: init.backgroundImage,
                                            backgroundColor: init.backgroundColor,
                                            secondaryColor: init.secondaryColor,
                                            primaryColor: init.primaryColor,
                                            name: status
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* SetSubmittedStatus */7 :
                  var input = action._0;
                  if (input !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: input,
                              fieldsStatuses: initialFieldsStatuses(input),
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Submitted */1,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: initialFieldsStatuses(state.input),
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Submitted */1,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
              case /* SetSubmissionFailedStatus */8 :
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: state.input,
                            fieldsStatuses: state.fieldsStatuses,
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: {
                              TAG: /* SubmissionFailed */1,
                              _0: action._0
                            },
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* MapSubmissionError */9 :
                  var map = action._0;
                  var error$1 = state.formStatus;
                  if (typeof error$1 === "number") {
                    return /* NoUpdate */0;
                  }
                  if (error$1.TAG !== /* Submitting */0) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: state.fieldsStatuses,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: {
                                TAG: /* SubmissionFailed */1,
                                _0: Curry._1(map, error$1._0)
                              },
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
                  var error$2 = error$1._0;
                  if (error$2 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: state.fieldsStatuses,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: {
                                TAG: /* Submitting */0,
                                _0: Caml_option.some(Curry._1(map, Caml_option.valFromOption(error$2)))
                              },
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              
            }
          }
        }));
  var dispatch = match[1];
  var state = match[0];
  var match$1 = state.formStatus;
  var tmp;
  tmp = typeof match$1 === "number" || match$1.TAG !== /* Submitting */0 ? false : true;
  return {
          updateOpacity: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateOpacityField */0,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateOverlayColor: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateOverlayColorField */1,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateBackgroundImage: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateBackgroundImageField */2,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateBackgroundColor: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateBackgroundColorField */3,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateSecondaryColor: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateSecondaryColorField */4,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updatePrimaryColor: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdatePrimaryColorField */5,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateName: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateNameField */6,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          blurOpacity: (function (param) {
              return Curry._1(dispatch, /* BlurOpacityField */0);
            }),
          blurOverlayColor: (function (param) {
              return Curry._1(dispatch, /* BlurOverlayColorField */1);
            }),
          blurBackgroundImage: (function (param) {
              return Curry._1(dispatch, /* BlurBackgroundImageField */2);
            }),
          blurBackgroundColor: (function (param) {
              return Curry._1(dispatch, /* BlurBackgroundColorField */3);
            }),
          blurSecondaryColor: (function (param) {
              return Curry._1(dispatch, /* BlurSecondaryColorField */4);
            }),
          blurPrimaryColor: (function (param) {
              return Curry._1(dispatch, /* BlurPrimaryColorField */5);
            }),
          blurName: (function (param) {
              return Curry._1(dispatch, /* BlurNameField */6);
            }),
          opacityResult: Formality.exposeFieldResult(state.fieldsStatuses.opacity),
          overlayColorResult: Formality.exposeFieldResult(state.fieldsStatuses.overlayColor),
          backgroundImageResult: Formality.exposeFieldResult(state.fieldsStatuses.backgroundImage),
          backgroundColorResult: Formality.exposeFieldResult(state.fieldsStatuses.backgroundColor),
          secondaryColorResult: Formality.exposeFieldResult(state.fieldsStatuses.secondaryColor),
          primaryColorResult: Formality.exposeFieldResult(state.fieldsStatuses.primaryColor),
          nameResult: Formality.exposeFieldResult(state.fieldsStatuses.name),
          input: state.input,
          status: state.formStatus,
          dirty: (function (param) {
              var match = state.fieldsStatuses;
              if (match.opacity || match.overlayColor || match.backgroundImage || match.backgroundColor || match.secondaryColor || match.primaryColor || match.name) {
                return true;
              } else {
                return false;
              }
            }),
          valid: (function (param) {
              var match = validateForm(state.input, validators, state.fieldsStatuses);
              if (match.TAG === /* Valid */0) {
                return true;
              } else {
                return false;
              }
            }),
          submitting: tmp,
          submit: (function (param) {
              return Curry._1(dispatch, /* Submit */7);
            }),
          dismissSubmissionError: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionError */8);
            }),
          dismissSubmissionResult: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionResult */9);
            }),
          mapSubmissionError: (function (map) {
              return Curry._1(dispatch, {
                          TAG: /* MapSubmissionError */9,
                          _0: map
                        });
            }),
          reset: (function (param) {
              return Curry._1(dispatch, /* Reset */10);
            })
        };
}

function updateName(form) {
  var partial_arg = form.updateName;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, name) {
                  return {
                          name: name,
                          primaryColor: input.primaryColor,
                          secondaryColor: input.secondaryColor,
                          backgroundColor: input.backgroundColor,
                          backgroundImage: input.backgroundImage,
                          overlayColor: input.overlayColor,
                          opacity: input.opacity
                        };
                }), param);
  };
}

function updatePrimaryColor(form) {
  var partial_arg = form.updatePrimaryColor;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, primaryColor) {
                  return {
                          name: input.name,
                          primaryColor: primaryColor,
                          secondaryColor: input.secondaryColor,
                          backgroundColor: input.backgroundColor,
                          backgroundImage: input.backgroundImage,
                          overlayColor: input.overlayColor,
                          opacity: input.opacity
                        };
                }), param);
  };
}

function updateSecondaryColor(form) {
  var partial_arg = form.updateSecondaryColor;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, secondaryColor) {
                  return {
                          name: input.name,
                          primaryColor: input.primaryColor,
                          secondaryColor: secondaryColor,
                          backgroundColor: input.backgroundColor,
                          backgroundImage: input.backgroundImage,
                          overlayColor: input.overlayColor,
                          opacity: input.opacity
                        };
                }), param);
  };
}

function updateBackgroundColor(form) {
  var partial_arg = form.updateBackgroundColor;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, backgroundColor) {
                  return {
                          name: input.name,
                          primaryColor: input.primaryColor,
                          secondaryColor: input.secondaryColor,
                          backgroundColor: backgroundColor,
                          backgroundImage: input.backgroundImage,
                          overlayColor: input.overlayColor,
                          opacity: input.opacity
                        };
                }), param);
  };
}

function updateBackgroundImage(form, result) {
  return Curry._2(form.updateBackgroundImage, (function (input, backgroundImage) {
                return {
                        name: input.name,
                        primaryColor: input.primaryColor,
                        secondaryColor: input.secondaryColor,
                        backgroundColor: input.backgroundColor,
                        backgroundImage: backgroundImage,
                        overlayColor: input.overlayColor,
                        opacity: input.opacity
                      };
              }), result);
}

function updateOverlayColor(form) {
  var partial_arg = form.updateOverlayColor;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, overlayColor) {
                  return {
                          name: input.name,
                          primaryColor: input.primaryColor,
                          secondaryColor: input.secondaryColor,
                          backgroundColor: input.backgroundColor,
                          backgroundImage: input.backgroundImage,
                          overlayColor: overlayColor,
                          opacity: input.opacity
                        };
                }), param);
  };
}

function updateOpacity(form) {
  var partial_arg = form.updateOpacity;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, opacity) {
                  return {
                          name: input.name,
                          primaryColor: input.primaryColor,
                          secondaryColor: input.secondaryColor,
                          backgroundColor: input.backgroundColor,
                          backgroundImage: input.backgroundImage,
                          overlayColor: input.overlayColor,
                          opacity: opacity
                        };
                }), param);
  };
}

var initialCollectionsStatuses;

var handleChange = Form$Timerlab.handleChange;

export {
  validators ,
  initialFieldsStatuses ,
  initialCollectionsStatuses ,
  initialState ,
  validateForm ,
  useForm ,
  handleChange ,
  updateName ,
  updatePrimaryColor ,
  updateSecondaryColor ,
  updateBackgroundColor ,
  updateBackgroundImage ,
  updateOverlayColor ,
  updateOpacity ,
  
}
/* react Not a pure module */

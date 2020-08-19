

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Formality from "re-formality/src/Formality.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Form$Timerlab from "../Form/Form.bs.js";
import * as Formality__ReactUpdate from "re-formality/src/Formality__ReactUpdate.bs.js";

var validators_time = {
  strategy: /* OnSubmit */4,
  validate: (function (param) {
      return {
              TAG: /* Ok */0,
              _0: param.time.replace(/_/g, "0")
            };
    })
};

var validators = {
  title: undefined,
  description: undefined,
  time: validators_time,
  theme: undefined
};

function initialFieldsStatuses(_input) {
  return {
          title: /* Pristine */0,
          description: /* Pristine */0,
          time: /* Pristine */0,
          theme: /* Pristine */0
        };
}

function initialState(input) {
  return {
          input: input,
          fieldsStatuses: {
            title: /* Pristine */0,
            description: /* Pristine */0,
            time: /* Pristine */0,
            theme: /* Pristine */0
          },
          collectionsStatuses: undefined,
          formStatus: /* Editing */0,
          submissionStatus: /* NeverSubmitted */0
        };
}

function validateForm(input, validators, fieldsStatuses) {
  var match_0 = {
    TAG: /* Ok */0,
    _0: input.title
  };
  var match_0$1 = {
    TAG: /* Ok */0,
    _0: input.description
  };
  var match = fieldsStatuses.time;
  var match_0$2 = match ? match._0 : Curry._1(validators.time.validate, input);
  var match_0$3 = {
    TAG: /* Ok */0,
    _0: input.theme
  };
  var titleResult = match_0;
  var titleResult$1;
  if (titleResult.TAG) {
    titleResult$1 = titleResult;
  } else {
    var descriptionResult = match_0$1;
    if (descriptionResult.TAG) {
      titleResult$1 = titleResult;
    } else {
      var timeResult = match_0$2;
      if (timeResult.TAG) {
        titleResult$1 = titleResult;
      } else {
        var themeResult = match_0$3;
        if (!themeResult.TAG) {
          return {
                  TAG: /* Valid */0,
                  output: {
                    title: titleResult._0,
                    description: descriptionResult._0,
                    time: timeResult._0,
                    theme: themeResult._0
                  },
                  fieldsStatuses: {
                    title: /* Dirty */{
                      _0: titleResult,
                      _1: /* Hidden */1
                    },
                    description: /* Dirty */{
                      _0: descriptionResult,
                      _1: /* Hidden */1
                    },
                    time: /* Dirty */{
                      _0: timeResult,
                      _1: /* Shown */0
                    },
                    theme: /* Dirty */{
                      _0: themeResult,
                      _1: /* Hidden */1
                    }
                  },
                  collectionsStatuses: undefined
                };
        }
        titleResult$1 = titleResult;
      }
    }
  }
  return {
          TAG: /* Invalid */1,
          fieldsStatuses: {
            title: /* Dirty */{
              _0: titleResult$1,
              _1: /* Hidden */1
            },
            description: /* Dirty */{
              _0: match_0$1,
              _1: /* Hidden */1
            },
            time: /* Dirty */{
              _0: match_0$2,
              _1: /* Shown */0
            },
            theme: /* Dirty */{
              _0: match_0$3,
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
              case /* BlurTitleField */0 :
                  var result = Formality.validateFieldOnBlurWithoutValidator(state.input.title, state.fieldsStatuses.title, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  title: status,
                                  description: init.description,
                                  time: init.time,
                                  theme: init.theme
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
              case /* BlurDescriptionField */1 :
                  var result$1 = Formality.validateFieldOnBlurWithoutValidator(state.input.description, state.fieldsStatuses.description, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  title: init.title,
                                  description: status,
                                  time: init.time,
                                  theme: init.theme
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
              case /* BlurTimeField */2 :
                  var result$2 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.time, validators_time, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  title: init.title,
                                  description: init.description,
                                  time: status,
                                  theme: init.theme
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
              case /* BlurThemeField */3 :
                  var result$3 = Formality.validateFieldOnBlurWithoutValidator(state.input.theme, state.fieldsStatuses.theme, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  title: init.title,
                                  description: init.description,
                                  time: init.time,
                                  theme: status
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
              case /* Submit */4 :
                  var match = state.formStatus;
                  if (typeof match !== "number" && !match.TAG) {
                    return /* NoUpdate */0;
                  }
                  var match$1 = validateForm(state.input, validators, state.fieldsStatuses);
                  if (match$1.TAG) {
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
                                                          TAG: /* SetSubmittedStatus */4,
                                                          _0: input
                                                        });
                                            }),
                                          notifyOnFailure: (function (error) {
                                              return Curry._1(dispatch, {
                                                          TAG: /* SetSubmissionFailedStatus */5,
                                                          _0: error
                                                        });
                                            }),
                                          reset: (function (param) {
                                              return Curry._1(dispatch, /* Reset */7);
                                            }),
                                          dismissSubmissionResult: (function (param) {
                                              return Curry._1(dispatch, /* DismissSubmissionResult */6);
                                            })
                                        });
                            })
                        };
                  break;
              case /* DismissSubmissionError */5 :
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
              case /* DismissSubmissionResult */6 :
                  var match$3 = state.formStatus;
                  if (typeof match$3 === "number") {
                    if (match$3 === /* Editing */0) {
                      return /* NoUpdate */0;
                    }
                    
                  } else if (!match$3.TAG) {
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
              case /* Reset */7 :
                  return {
                          TAG: /* Update */0,
                          _0: initialState(initialInput)
                        };
              
            }
          } else {
            switch (action.TAG | 0) {
              case /* UpdateTitleField */0 :
                  var nextInput = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput.title, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            title: status,
                                            description: init.description,
                                            time: init.time,
                                            theme: init.theme
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateDescriptionField */1 :
                  var nextInput$1 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$1,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$1.description, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            title: init.title,
                                            description: status,
                                            time: init.time,
                                            theme: init.theme
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateTimeField */2 :
                  var nextInput$2 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$2,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$2, state.fieldsStatuses.time, state.submissionStatus, validators_time, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            title: init.title,
                                            description: init.description,
                                            time: status,
                                            theme: init.theme
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateThemeField */3 :
                  var nextInput$3 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$3,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$3.theme, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            title: init.title,
                                            description: init.description,
                                            time: init.time,
                                            theme: status
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* SetSubmittedStatus */4 :
                  var input = action._0;
                  if (input !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: input,
                              fieldsStatuses: {
                                title: /* Pristine */0,
                                description: /* Pristine */0,
                                time: /* Pristine */0,
                                theme: /* Pristine */0
                              },
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
                              fieldsStatuses: {
                                title: /* Pristine */0,
                                description: /* Pristine */0,
                                time: /* Pristine */0,
                                theme: /* Pristine */0
                              },
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Submitted */1,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
              case /* SetSubmissionFailedStatus */5 :
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
              case /* MapSubmissionError */6 :
                  var map = action._0;
                  var error$1 = state.formStatus;
                  if (typeof error$1 === "number") {
                    return /* NoUpdate */0;
                  }
                  if (error$1.TAG) {
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
  tmp = typeof match$1 === "number" || match$1.TAG ? false : true;
  return {
          updateTitle: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateTitleField */0,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateDescription: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateDescriptionField */1,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateTime: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateTimeField */2,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateTheme: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateThemeField */3,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          blurTitle: (function (param) {
              return Curry._1(dispatch, /* BlurTitleField */0);
            }),
          blurDescription: (function (param) {
              return Curry._1(dispatch, /* BlurDescriptionField */1);
            }),
          blurTime: (function (param) {
              return Curry._1(dispatch, /* BlurTimeField */2);
            }),
          blurTheme: (function (param) {
              return Curry._1(dispatch, /* BlurThemeField */3);
            }),
          titleResult: Formality.exposeFieldResult(state.fieldsStatuses.title),
          descriptionResult: Formality.exposeFieldResult(state.fieldsStatuses.description),
          timeResult: Formality.exposeFieldResult(state.fieldsStatuses.time),
          themeResult: Formality.exposeFieldResult(state.fieldsStatuses.theme),
          input: state.input,
          status: state.formStatus,
          dirty: (function (param) {
              var match = state.fieldsStatuses;
              if (match.title || match.description || match.time || match.theme) {
                return true;
              } else {
                return false;
              }
            }),
          valid: (function (param) {
              var match = validateForm(state.input, validators, state.fieldsStatuses);
              if (match.TAG) {
                return false;
              } else {
                return true;
              }
            }),
          submitting: tmp,
          submit: (function (param) {
              return Curry._1(dispatch, /* Submit */4);
            }),
          dismissSubmissionError: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionError */5);
            }),
          dismissSubmissionResult: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionResult */6);
            }),
          mapSubmissionError: (function (map) {
              return Curry._1(dispatch, {
                          TAG: /* MapSubmissionError */6,
                          _0: map
                        });
            }),
          reset: (function (param) {
              return Curry._1(dispatch, /* Reset */7);
            })
        };
}

function updateTitle(form) {
  var partial_arg = form.updateTitle;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, title) {
                  return {
                          title: title,
                          description: input.description,
                          time: input.time,
                          theme: input.theme
                        };
                }), param);
  };
}

function updateDescription(form) {
  var partial_arg = form.updateDescription;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, description) {
                  return {
                          title: input.title,
                          description: description,
                          time: input.time,
                          theme: input.theme
                        };
                }), param);
  };
}

function updateTime(form) {
  var partial_arg = form.updateTime;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, time) {
                  return {
                          title: input.title,
                          description: input.description,
                          time: time,
                          theme: input.theme
                        };
                }), param);
  };
}

function updateTheme(form) {
  var partial_arg = form.updateTheme;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, theme) {
                  return {
                          title: input.title,
                          description: input.description,
                          time: input.time,
                          theme: theme
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
  updateTitle ,
  updateDescription ,
  updateTime ,
  updateTheme ,
  
}
/* react Not a pure module */

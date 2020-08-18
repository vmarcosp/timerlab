

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Formality from "re-formality/src/Formality.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Form$Timerlab from "../Form/Form.bs.js";
import * as Formality__ReactUpdate from "re-formality/src/Formality__ReactUpdate.bs.js";

var validators = {
  id: undefined,
  name: undefined,
  primaryColor: undefined,
  secondaryColor: undefined,
  background: undefined
};

function initialFieldsStatuses(_input) {
  return {
          id: /* Pristine */0,
          name: /* Pristine */0,
          primaryColor: /* Pristine */0,
          secondaryColor: /* Pristine */0,
          background: /* Pristine */0
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

function validateForm(input, param, param$1) {
  var match_0 = {
    TAG: /* Ok */0,
    _0: input.id
  };
  var match_0$1 = {
    TAG: /* Ok */0,
    _0: input.name
  };
  var match_0$2 = {
    TAG: /* Ok */0,
    _0: input.primaryColor
  };
  var match_0$3 = {
    TAG: /* Ok */0,
    _0: input.secondaryColor
  };
  var match_0$4 = {
    TAG: /* Ok */0,
    _0: input.background
  };
  var idResult = match_0;
  var idResult$1;
  if (idResult.TAG) {
    idResult$1 = idResult;
  } else {
    var nameResult = match_0$1;
    if (nameResult.TAG) {
      idResult$1 = idResult;
    } else {
      var primaryColorResult = match_0$2;
      if (primaryColorResult.TAG) {
        idResult$1 = idResult;
      } else {
        var secondaryColorResult = match_0$3;
        if (secondaryColorResult.TAG) {
          idResult$1 = idResult;
        } else {
          var backgroundResult = match_0$4;
          if (!backgroundResult.TAG) {
            return {
                    TAG: /* Valid */0,
                    output: {
                      id: idResult._0,
                      name: nameResult._0,
                      primaryColor: primaryColorResult._0,
                      secondaryColor: secondaryColorResult._0,
                      background: backgroundResult._0
                    },
                    fieldsStatuses: {
                      id: /* Dirty */{
                        _0: idResult,
                        _1: /* Hidden */1
                      },
                      name: /* Dirty */{
                        _0: nameResult,
                        _1: /* Hidden */1
                      },
                      primaryColor: /* Dirty */{
                        _0: primaryColorResult,
                        _1: /* Hidden */1
                      },
                      secondaryColor: /* Dirty */{
                        _0: secondaryColorResult,
                        _1: /* Hidden */1
                      },
                      background: /* Dirty */{
                        _0: backgroundResult,
                        _1: /* Hidden */1
                      }
                    },
                    collectionsStatuses: undefined
                  };
          }
          idResult$1 = idResult;
        }
      }
    }
  }
  return {
          TAG: /* Invalid */1,
          fieldsStatuses: {
            id: /* Dirty */{
              _0: idResult$1,
              _1: /* Hidden */1
            },
            name: /* Dirty */{
              _0: match_0$1,
              _1: /* Hidden */1
            },
            primaryColor: /* Dirty */{
              _0: match_0$2,
              _1: /* Hidden */1
            },
            secondaryColor: /* Dirty */{
              _0: match_0$3,
              _1: /* Hidden */1
            },
            background: /* Dirty */{
              _0: match_0$4,
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
              case /* BlurIdField */0 :
                  var result = Formality.validateFieldOnBlurWithoutValidator(state.input.id, state.fieldsStatuses.id, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  id: status,
                                  name: init.name,
                                  primaryColor: init.primaryColor,
                                  secondaryColor: init.secondaryColor,
                                  background: init.background
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
              case /* BlurNameField */1 :
                  var result$1 = Formality.validateFieldOnBlurWithoutValidator(state.input.name, state.fieldsStatuses.name, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  id: init.id,
                                  name: status,
                                  primaryColor: init.primaryColor,
                                  secondaryColor: init.secondaryColor,
                                  background: init.background
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
              case /* BlurPrimaryColorField */2 :
                  var result$2 = Formality.validateFieldOnBlurWithoutValidator(state.input.primaryColor, state.fieldsStatuses.primaryColor, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  id: init.id,
                                  name: init.name,
                                  primaryColor: status,
                                  secondaryColor: init.secondaryColor,
                                  background: init.background
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
              case /* BlurSecondaryColorField */3 :
                  var result$3 = Formality.validateFieldOnBlurWithoutValidator(state.input.secondaryColor, state.fieldsStatuses.secondaryColor, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  id: init.id,
                                  name: init.name,
                                  primaryColor: init.primaryColor,
                                  secondaryColor: status,
                                  background: init.background
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
              case /* BlurBackgroundField */4 :
                  var result$4 = Formality.validateFieldOnBlurWithoutValidator(state.input.background, state.fieldsStatuses.background, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  id: init.id,
                                  name: init.name,
                                  primaryColor: init.primaryColor,
                                  secondaryColor: init.secondaryColor,
                                  background: status
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
              case /* Submit */5 :
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
                                                          TAG: /* SetSubmittedStatus */5,
                                                          _0: input
                                                        });
                                            }),
                                          notifyOnFailure: (function (error) {
                                              return Curry._1(dispatch, {
                                                          TAG: /* SetSubmissionFailedStatus */6,
                                                          _0: error
                                                        });
                                            }),
                                          reset: (function (param) {
                                              return Curry._1(dispatch, /* Reset */8);
                                            }),
                                          dismissSubmissionResult: (function (param) {
                                              return Curry._1(dispatch, /* DismissSubmissionResult */7);
                                            })
                                        });
                            })
                        };
                  break;
              case /* DismissSubmissionError */6 :
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
              case /* DismissSubmissionResult */7 :
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
              case /* Reset */8 :
                  return {
                          TAG: /* Update */0,
                          _0: initialState(initialInput)
                        };
              
            }
          } else {
            switch (action.TAG | 0) {
              case /* UpdateIdField */0 :
                  var nextInput = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput.id, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            id: status,
                                            name: init.name,
                                            primaryColor: init.primaryColor,
                                            secondaryColor: init.secondaryColor,
                                            background: init.background
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateNameField */1 :
                  var nextInput$1 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$1,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$1.name, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            id: init.id,
                                            name: status,
                                            primaryColor: init.primaryColor,
                                            secondaryColor: init.secondaryColor,
                                            background: init.background
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdatePrimaryColorField */2 :
                  var nextInput$2 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$2,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$2.primaryColor, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            id: init.id,
                                            name: init.name,
                                            primaryColor: status,
                                            secondaryColor: init.secondaryColor,
                                            background: init.background
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateSecondaryColorField */3 :
                  var nextInput$3 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$3,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$3.secondaryColor, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            id: init.id,
                                            name: init.name,
                                            primaryColor: init.primaryColor,
                                            secondaryColor: status,
                                            background: init.background
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateBackgroundField */4 :
                  var nextInput$4 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$4,
                            fieldsStatuses: Formality.validateFieldOnChangeWithoutValidator(nextInput$4.background, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            id: init.id,
                                            name: init.name,
                                            primaryColor: init.primaryColor,
                                            secondaryColor: init.secondaryColor,
                                            background: status
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* SetSubmittedStatus */5 :
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
              case /* SetSubmissionFailedStatus */6 :
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
              case /* MapSubmissionError */7 :
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
          updateId: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateIdField */0,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateName: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateNameField */1,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updatePrimaryColor: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdatePrimaryColorField */2,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateSecondaryColor: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateSecondaryColorField */3,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateBackground: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateBackgroundField */4,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          blurId: (function (param) {
              return Curry._1(dispatch, /* BlurIdField */0);
            }),
          blurName: (function (param) {
              return Curry._1(dispatch, /* BlurNameField */1);
            }),
          blurPrimaryColor: (function (param) {
              return Curry._1(dispatch, /* BlurPrimaryColorField */2);
            }),
          blurSecondaryColor: (function (param) {
              return Curry._1(dispatch, /* BlurSecondaryColorField */3);
            }),
          blurBackground: (function (param) {
              return Curry._1(dispatch, /* BlurBackgroundField */4);
            }),
          idResult: Formality.exposeFieldResult(state.fieldsStatuses.id),
          nameResult: Formality.exposeFieldResult(state.fieldsStatuses.name),
          primaryColorResult: Formality.exposeFieldResult(state.fieldsStatuses.primaryColor),
          secondaryColorResult: Formality.exposeFieldResult(state.fieldsStatuses.secondaryColor),
          backgroundResult: Formality.exposeFieldResult(state.fieldsStatuses.background),
          input: state.input,
          status: state.formStatus,
          dirty: (function (param) {
              var match = state.fieldsStatuses;
              if (match.id || match.name || match.primaryColor || match.secondaryColor || match.background) {
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
              return Curry._1(dispatch, /* Submit */5);
            }),
          dismissSubmissionError: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionError */6);
            }),
          dismissSubmissionResult: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionResult */7);
            }),
          mapSubmissionError: (function (map) {
              return Curry._1(dispatch, {
                          TAG: /* MapSubmissionError */7,
                          _0: map
                        });
            }),
          reset: (function (param) {
              return Curry._1(dispatch, /* Reset */8);
            })
        };
}

function updateName(form) {
  var partial_arg = form.updateName;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, name) {
                  return {
                          id: input.id,
                          name: name,
                          primaryColor: input.primaryColor,
                          secondaryColor: input.secondaryColor,
                          background: input.background
                        };
                }), param);
  };
}

function updatePrimaryColor(form) {
  var partial_arg = form.updatePrimaryColor;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, primaryColor) {
                  return {
                          id: input.id,
                          name: input.name,
                          primaryColor: primaryColor,
                          secondaryColor: input.secondaryColor,
                          background: input.background
                        };
                }), param);
  };
}

function updateSecondaryColor(form) {
  var partial_arg = form.updateSecondaryColor;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, secondaryColor) {
                  return {
                          id: input.id,
                          name: input.name,
                          primaryColor: input.primaryColor,
                          secondaryColor: secondaryColor,
                          background: input.background
                        };
                }), param);
  };
}

function updateBackground(form) {
  var partial_arg = form.updateBackground;
  return function (param) {
    return Form$Timerlab.handleChange(partial_arg, (function (input, background) {
                  return {
                          id: input.id,
                          name: input.name,
                          primaryColor: input.primaryColor,
                          secondaryColor: input.secondaryColor,
                          background: background
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
  updateBackground ,
  
}
/* react Not a pure module */

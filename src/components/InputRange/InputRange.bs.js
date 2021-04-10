

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as InputRangeStyles$Timerlab from "./InputRangeStyles.bs.js";

function InputRange(Props) {
  var placeholder = Props.placeholder;
  var onChange = Props.onChange;
  var value = Props.value;
  var name = Props.name;
  var onBlur = Props.onBlur;
  var labelValue = Props.label;
  var innerRef = Props.innerRef;
  var requiredOpt = Props.required;
  var min = Props.min;
  var max = Props.max;
  var required = requiredOpt !== undefined ? requiredOpt : false;
  console.log(value);
  var tmp = {
    className: InputRangeStyles$Timerlab.input,
    max: max,
    min: min,
    required: required,
    step: 0.1,
    type: "range",
    value: value.toString()
  };
  if (innerRef !== undefined) {
    tmp.ref = Caml_option.valFromOption(innerRef);
  }
  if (name !== undefined) {
    tmp.name = Caml_option.valFromOption(name);
  }
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  if (onBlur !== undefined) {
    tmp.onBlur = Caml_option.valFromOption(onBlur);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement("div", undefined, labelValue !== undefined ? React.createElement("label", {
                    className: InputRangeStyles$Timerlab.rangeLabel
                  }, labelValue) : null, React.createElement("input", tmp), React.createElement("span", {
                  className: InputRangeStyles$Timerlab.rangeValue
                }, value.toString()));
}

var Styles;

var make = InputRange;

export {
  Styles ,
  make ,
  
}
/* react Not a pure module */

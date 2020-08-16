

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Label$Timerlab from "../Label/Label.bs.js";
import * as InputStyles$Timerlab from "./InputStyles.bs.js";

function Input(Props) {
  var placeholder = Props.placeholder;
  var onChange = Props.onChange;
  var value = Props.value;
  var name = Props.name;
  var onBlur = Props.onBlur;
  var labelValue = Props.label;
  var type_ = Props.type_;
  var tmp = {
    className: InputStyles$Timerlab.input
  };
  if (name !== undefined) {
    tmp.name = Caml_option.valFromOption(name);
  }
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  if (type_ !== undefined) {
    tmp.type = Caml_option.valFromOption(type_);
  }
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onBlur !== undefined) {
    tmp.onBlur = Caml_option.valFromOption(onBlur);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement("div", undefined, labelValue !== undefined ? React.createElement(Label$Timerlab.make, {
                    children: labelValue
                  }) : null, React.createElement("input", tmp));
}

var Styles;

var make = Input;

export {
  Styles ,
  make ,
  
}
/* react Not a pure module */

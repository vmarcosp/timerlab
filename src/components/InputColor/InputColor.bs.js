

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Label$Timerlab from "../Label/Label.bs.js";
import * as InputColorStyles$Timerlab from "./InputColorStyles.bs.js";

function InputColor(Props) {
  var placeholder = Props.placeholder;
  var onChange = Props.onChange;
  var value = Props.value;
  var name = Props.name;
  var onBlur = Props.onBlur;
  var labelValue = Props.label;
  var innerRef = Props.innerRef;
  var requiredOpt = Props.required;
  var required = requiredOpt !== undefined ? requiredOpt : false;
  var tmp = {
    className: InputColorStyles$Timerlab.input,
    required: required,
    type: "color"
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
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onBlur !== undefined) {
    tmp.onBlur = Caml_option.valFromOption(onBlur);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement("div", {
              className: InputColorStyles$Timerlab.wrapper
            }, labelValue !== undefined ? React.createElement(Label$Timerlab.make, {
                    children: labelValue
                  }) : null, React.createElement("input", tmp));
}

var Styles;

var make = InputColor;

export {
  Styles ,
  make ,
  
}
/* react Not a pure module */

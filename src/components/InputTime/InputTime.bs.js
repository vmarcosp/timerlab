

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Input$Timerlab from "../Input/Input.bs.js";
import ReactTextMask from "react-text-mask";

var number = /\d/;

var mask = [
  number,
  number,
  ":",
  number,
  number
];

function InputTime(Props) {
  var onChange = Props.onChange;
  var value = Props.value;
  var tmp = {
    mask: mask,
    render: (function (innerRef, props) {
        return React.createElement(Input$Timerlab.make, {
                    placeholder: "00:00",
                    onChange: props.onChange,
                    value: props.value,
                    label: "Time",
                    innerRef: innerRef
                  });
      })
  };
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement(ReactTextMask, tmp);
}

var make = InputTime;

export {
  number ,
  mask ,
  make ,
  
}
/* react Not a pure module */

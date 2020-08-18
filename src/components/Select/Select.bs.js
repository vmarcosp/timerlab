

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Label$Timerlab from "../Label/Label.bs.js";
import * as SelectStyles$Timerlab from "./SelectStyles.bs.js";

function Select(Props) {
  var labelValue = Props.label;
  var children = Props.children;
  var onChange = Props.onChange;
  var value = Props.value;
  var tmp = {
    className: SelectStyles$Timerlab.select
  };
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement("div", undefined, labelValue !== undefined ? React.createElement(Label$Timerlab.make, {
                    children: labelValue
                  }) : null, React.createElement("select", tmp, children));
}

var make = Select;

export {
  make ,
  
}
/* react Not a pure module */

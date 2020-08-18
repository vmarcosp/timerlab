

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Render$Timerlab from "../../lib/Render.bs.js";
import * as Select$Timerlab from "../Select/Select.bs.js";

function ThemeSelect(Props) {
  var options = Props.options;
  var onChange = Props.onChange;
  var value = Props.value;
  var tmp = {
    label: "Theme",
    children: Render$Timerlab.map(options, (function (index, theme) {
            return React.createElement("option", {
                        key: index,
                        value: theme.id
                      }, theme.name);
          }))
  };
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  return React.createElement(React.Fragment, undefined, React.createElement(Select$Timerlab.make, tmp));
}

var newKey = "new-theme";

var make = ThemeSelect;

export {
  newKey ,
  make ,
  
}
/* react Not a pure module */

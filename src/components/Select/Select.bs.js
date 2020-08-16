

import * as React from "react";
import * as Label$Timerlab from "../Label/Label.bs.js";
import * as SelectStyles$Timerlab from "./SelectStyles.bs.js";

function Select(Props) {
  var labelValue = Props.label;
  var children = Props.children;
  return React.createElement("div", undefined, labelValue !== undefined ? React.createElement(Label$Timerlab.make, {
                    children: labelValue
                  }) : null, React.createElement("select", {
                  className: SelectStyles$Timerlab.select
                }, children));
}

var make = Select;

export {
  make ,
  
}
/* react Not a pure module */

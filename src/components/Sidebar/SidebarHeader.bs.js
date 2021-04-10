

import * as React from "react";
import * as Logo$Timerlab from "../Logo/Logo.bs.js";
import * as SidebarStyles$Timerlab from "./SidebarStyles.bs.js";

function SidebarHeader(Props) {
  return React.createElement("div", {
              className: SidebarStyles$Timerlab.header
            }, React.createElement(Logo$Timerlab.make, {}));
}

var make = SidebarHeader;

export {
  make ,
  
}
/* react Not a pure module */

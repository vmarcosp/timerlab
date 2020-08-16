

import * as React from "react";
import * as Sidebar$Timerlab from "./components/Sidebar/Sidebar.bs.js";
import * as ThemeModal$Timerlab from "./components/ThemeModal/ThemeModal.bs.js";

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(Sidebar$Timerlab.make, {}), React.createElement(ThemeModal$Timerlab.make, {}));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */

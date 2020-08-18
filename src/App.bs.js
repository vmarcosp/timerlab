

import * as React from "react";
import * as Sidebar$Timerlab from "./components/Sidebar/Sidebar.bs.js";
import * as ThemeHook$Timerlab from "./hooks/ThemeHook.bs.js";
import * as ThemeModal$Timerlab from "./components/ThemeModal/ThemeModal.bs.js";

var initialValues = {
  id: "",
  name: "",
  primaryColor: "",
  secondaryColor: "",
  background: ""
};

function App(Props) {
  var match = ThemeHook$Timerlab.useThemes(undefined);
  return React.createElement(React.Fragment, undefined, React.createElement(Sidebar$Timerlab.make, {
                  themes: match[4],
                  onCreateTheme: match[0]
                }), React.createElement(ThemeModal$Timerlab.make, {
                  visible: match[3] === /* IsCreating */0,
                  onCancel: match[2],
                  initialValues: initialValues,
                  onFinish: match[1]
                }));
}

var make = App;

export {
  initialValues ,
  make ,
  
}
/* react Not a pure module */

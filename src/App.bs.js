

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Sidebar$Timerlab from "./components/Sidebar/Sidebar.bs.js";
import * as ThemeHook$Timerlab from "./hooks/ThemeHook.bs.js";
import * as ThemeModal$Timerlab from "./components/ThemeModal/ThemeModal.bs.js";

function App(Props) {
  var match = ThemeHook$Timerlab.useThemes(undefined);
  var status = match[5];
  var closeModal = match[4];
  return React.createElement(React.Fragment, undefined, React.createElement(Sidebar$Timerlab.make, {
                  themes: match[6],
                  onCreateTheme: match[0],
                  onEditTheme: match[2]
                }), React.createElement(ThemeModal$Timerlab.make, {
                  visible: status === /* IsCreating */0,
                  onCancel: closeModal,
                  initialValues: ThemeHook$Timerlab.initialValues,
                  onFinish: match[1]
                }), typeof status === "number" ? null : React.createElement(ThemeModal$Timerlab.make, {
                    visible: true,
                    onCancel: closeModal,
                    initialValues: status._1,
                    onFinish: Curry._1(match[3], status._0),
                    title: "Edit theme"
                  }));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */

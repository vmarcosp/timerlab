

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Sidebar$Timerlab from "./components/Sidebar/Sidebar.bs.js";
import * as TimerHook$Timerlab from "./hooks/TimerHook.bs.js";
import * as ThemeModal$Timerlab from "./components/ThemeModal/ThemeModal.bs.js";
import * as TimerPreview$Timerlab from "./components/TimerPreview/TimerPreview.bs.js";

function onSubmit(param, param$1) {
  
}

function App(Props) {
  var match = TimerHook$Timerlab.useTimer(undefined);
  var match$1 = match[12];
  var config = match$1[0];
  var status = match[8];
  var visible = match[7];
  var closeModal = match[5];
  return React.createElement(React.Fragment, undefined, React.createElement(Sidebar$Timerlab.make, {
                  themes: match[9],
                  onCreateTheme: match[1],
                  onEditTheme: match[3],
                  visible: visible,
                  onSubmit: match[0],
                  initialInput: match[10]
                }), React.createElement(TimerPreview$Timerlab.make, {
                  title: config.title,
                  description: config.description,
                  onToggle: match[6],
                  fullWidth: visible,
                  theme: match$1[1],
                  timer: match[11]
                }), React.createElement(ThemeModal$Timerlab.make, {
                  visible: status === /* IsCreating */0,
                  onCancel: closeModal,
                  initialValues: TimerHook$Timerlab.initialValues,
                  onFinish: match[2]
                }), typeof status === "number" ? null : React.createElement(ThemeModal$Timerlab.make, {
                    visible: true,
                    onCancel: closeModal,
                    initialValues: status._1,
                    onFinish: Curry._1(match[4], status._0),
                    title: "Edit theme"
                  }));
}

var make = App;

export {
  onSubmit ,
  make ,
  
}
/* react Not a pure module */



import * as React from "react";
import * as ReactDom from "react-dom";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as App$Timerlab from "./App.bs.js";
import * as GlobalStyles$Timerlab from "./ui/GlobalStyles.bs.js";

GlobalStyles$Timerlab.add(undefined);

var rootElement = document.querySelector("#root");

if (rootElement == null) {
  console.log("#root element not found");
} else {
  ReactDom.render(React.createElement(App$Timerlab.make, {}), rootElement);
}

var rootElement$1 = (rootElement == null) ? undefined : Caml_option.some(rootElement);

export {
  rootElement$1 as rootElement,
  
}
/*  Not a pure module */

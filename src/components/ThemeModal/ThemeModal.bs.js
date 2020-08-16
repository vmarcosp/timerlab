

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Input$Timerlab from "../Input/Input.bs.js";
import * as Modal$Timerlab from "../Modal/Modal.bs.js";
import * as Uploader$Timerlab from "../Uploader/Uploader.bs.js";
import * as ThemeModalStyles$Timerlab from "./ThemeModalStyles.bs.js";

function ThemeModal(Props) {
  var visible = Props.visible;
  var onCancel = Props.onCancel;
  var tmp = {
    children: null,
    title: "New theme",
    visible: visible
  };
  if (onCancel !== undefined) {
    tmp.onCancel = Caml_option.valFromOption(onCancel);
  }
  return React.createElement(Modal$Timerlab.make, tmp, React.createElement(Input$Timerlab.make, {
                  label: "Name"
                }), React.createElement("div", {
                  className: ThemeModalStyles$Timerlab.colors
                }, React.createElement(Input$Timerlab.make, {
                      label: "Primary color"
                    }), React.createElement(Input$Timerlab.make, {
                      label: "Secondary color"
                    })), React.createElement(Input$Timerlab.make, {
                  label: "Background"
                }), React.createElement("br", undefined), React.createElement(Uploader$Timerlab.make, {}));
}

var make = ThemeModal;

export {
  make ,
  
}
/* react Not a pure module */

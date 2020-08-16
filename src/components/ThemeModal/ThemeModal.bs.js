

import * as React from "react";
import * as Input$Timerlab from "../Input/Input.bs.js";
import * as Modal$Timerlab from "../Modal/Modal.bs.js";
import * as Uploader$Timerlab from "../Uploader/Uploader.bs.js";
import * as ThemeModalStyles$Timerlab from "./ThemeModalStyles.bs.js";

function ThemeModal(Props) {
  return React.createElement(Modal$Timerlab.make, {
              children: null,
              title: "New theme"
            }, React.createElement(Input$Timerlab.make, {
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



import * as React from "react";
import * as Form$Timerlab from "../Form/Form.bs.js";
import * as Input$Timerlab from "../Input/Input.bs.js";
import * as Modal$Timerlab from "../Modal/Modal.bs.js";
import * as Uploader$Timerlab from "../Uploader/Uploader.bs.js";
import * as ThemeForm$Timerlab from "./ThemeForm.bs.js";
import * as ThemeModalStyles$Timerlab from "./ThemeModalStyles.bs.js";

function ThemeModal(Props) {
  var visible = Props.visible;
  var onCancel = Props.onCancel;
  var initialInput = Props.initialValues;
  var onSubmit = Props.onFinish;
  var form = ThemeForm$Timerlab.useForm(initialInput, onSubmit);
  return React.createElement(Form$Timerlab.make, {
              children: React.createElement(Modal$Timerlab.make, {
                    children: null,
                    title: "New theme",
                    onCancel: onCancel,
                    visible: visible
                  }, React.createElement(Input$Timerlab.make, {
                        onChange: ThemeForm$Timerlab.updateName(form),
                        label: "Name",
                        required: true
                      }), React.createElement("div", {
                        className: ThemeModalStyles$Timerlab.colors
                      }, React.createElement(Input$Timerlab.make, {
                            onChange: ThemeForm$Timerlab.updatePrimaryColor(form),
                            label: "Primary color"
                          }), React.createElement(Input$Timerlab.make, {
                            onChange: ThemeForm$Timerlab.updatePrimaryColor(form),
                            label: "Secondary color"
                          })), React.createElement(Input$Timerlab.make, {
                        onChange: ThemeForm$Timerlab.updateBackground(form),
                        label: "Background"
                      }), React.createElement(Uploader$Timerlab.make, {})),
              onSubmit: form.submit
            });
}

var make = ThemeModal;

export {
  make ,
  
}
/* react Not a pure module */

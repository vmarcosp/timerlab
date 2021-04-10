

import * as React from "react";
import * as Form$Timerlab from "../Form/Form.bs.js";
import * as Input$Timerlab from "../Input/Input.bs.js";
import * as Modal$Timerlab from "../Modal/Modal.bs.js";
import * as OrLabel$Timerlab from "../OrLabel/OrLabel.bs.js";
import * as Uploader$Timerlab from "../Uploader/Uploader.bs.js";
import * as ThemeForm$Timerlab from "./ThemeForm.bs.js";
import * as InputColor$Timerlab from "../InputColor/InputColor.bs.js";
import * as ThemeModalStyles$Timerlab from "./ThemeModalStyles.bs.js";

function ThemeModal(Props) {
  var visible = Props.visible;
  var onCancel = Props.onCancel;
  var initialInput = Props.initialValues;
  var onSubmit = Props.onFinish;
  var titleOpt = Props.title;
  var title = titleOpt !== undefined ? titleOpt : "New theme";
  var form = ThemeForm$Timerlab.useForm(initialInput, onSubmit);
  return React.createElement(Form$Timerlab.make, {
              children: React.createElement(Modal$Timerlab.make, {
                    children: null,
                    title: title,
                    onCancel: onCancel,
                    visible: visible
                  }, React.createElement(Input$Timerlab.make, {
                        onChange: ThemeForm$Timerlab.updateName(form),
                        value: form.input.name,
                        label: "Name",
                        required: true
                      }), React.createElement("div", {
                        className: ThemeModalStyles$Timerlab.colors
                      }, React.createElement(InputColor$Timerlab.make, {
                            onChange: ThemeForm$Timerlab.updatePrimaryColor(form),
                            value: form.input.primaryColor,
                            label: "Primary color",
                            required: true
                          }), React.createElement(InputColor$Timerlab.make, {
                            onChange: ThemeForm$Timerlab.updateSecondaryColor(form),
                            value: form.input.secondaryColor,
                            label: "Secondary color",
                            required: true
                          })), React.createElement(InputColor$Timerlab.make, {
                        onChange: ThemeForm$Timerlab.updateBackgroundColor(form),
                        value: form.input.backgroundColor,
                        label: "Background color"
                      }), React.createElement(OrLabel$Timerlab.make, {}), React.createElement(Uploader$Timerlab.make, {
                        onChange: (function (param) {
                            return ThemeForm$Timerlab.updateBackgroundImage(form, param);
                          }),
                        value: form.input.backgroundImage,
                        onOpacityChange: ThemeForm$Timerlab.updateOpacity(form),
                        onOverlayChange: ThemeForm$Timerlab.updateOverlayColor(form),
                        opacity: form.input.opacity,
                        overlayColor: form.input.overlayColor
                      })),
              onSubmit: form.submit
            });
}

var make = ThemeModal;

export {
  make ,
  
}
/* react Not a pure module */

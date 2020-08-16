

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Button$Timerlab from "../Button/Button.bs.js";
import * as ModalStyles$Timerlab from "./ModalStyles.bs.js";

function Modal(Props) {
  var children = Props.children;
  var modalTitle = Props.title;
  var onCancel = Props.onCancel;
  var visibleOpt = Props.visible;
  var visible = visibleOpt !== undefined ? visibleOpt : false;
  var tmp = {
    children: "Cancel",
    variant: "default"
  };
  if (onCancel !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onCancel);
  }
  return React.createElement("div", {
              className: ModalStyles$Timerlab.wrapper(visible)
            }, React.createElement("div", {
                  className: ModalStyles$Timerlab.modal
                }, React.createElement("div", {
                      className: ModalStyles$Timerlab.header
                    }, React.createElement("h2", {
                          className: ModalStyles$Timerlab.title
                        }, modalTitle)), React.createElement("div", {
                      className: ModalStyles$Timerlab.content
                    }, children), React.createElement("div", {
                      className: ModalStyles$Timerlab.footer
                    }, React.createElement(Button$Timerlab.make, tmp), React.createElement(Button$Timerlab.make, {
                          children: "Save"
                        }))));
}

var make = Modal;

export {
  make ,
  
}
/* react Not a pure module */

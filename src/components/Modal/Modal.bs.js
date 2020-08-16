

import * as React from "react";
import * as Button$Timerlab from "../Button/Button.bs.js";
import * as ModalStyles$Timerlab from "./ModalStyles.bs.js";

function Modal(Props) {
  var children = Props.children;
  var modalTitle = Props.title;
  return React.createElement("div", {
              className: ModalStyles$Timerlab.wrapper
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
                    }, React.createElement(Button$Timerlab.make, {
                          children: "Cancel",
                          variant: "default"
                        }), React.createElement(Button$Timerlab.make, {
                          children: "Save"
                        }))));
}

var make = Modal;

export {
  make ,
  
}
/* react Not a pure module */

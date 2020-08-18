

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Button$Timerlab from "../Button/Button.bs.js";
import * as Helpers$Timerlab from "../../lib/Helpers.bs.js";
import * as ModalStyles$Timerlab from "./ModalStyles.bs.js";

function Modal(Props) {
  var children = Props.children;
  var modalTitle = Props.title;
  var onCancel = Props.onCancel;
  var visibleOpt = Props.visible;
  var visible = visibleOpt !== undefined ? visibleOpt : false;
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
                    }, React.createElement(Button$Timerlab.make, {
                          children: "Cancel",
                          onClick: (function (e) {
                              Helpers$Timerlab.preventDefault(e);
                              return Curry._1(onCancel, undefined);
                            }),
                          variant: "default"
                        }), React.createElement(Button$Timerlab.make, {
                          children: "Save",
                          type_: "submit"
                        }))));
}

var make = Modal;

export {
  make ,
  
}
/* react Not a pure module */



import * as React from "react";
import * as UploaderStyles$Timerlab from "./UploaderStyles.bs.js";

var icon = require("./upload-icon.svg");

function Uploader(Props) {
  return React.createElement("label", {
              className: UploaderStyles$Timerlab.wrapper
            }, React.createElement("input", {
                  type: "file"
                }), React.createElement("img", {
                  alt: "Upload icon",
                  src: icon
                }), React.createElement("p", {
                  className: UploaderStyles$Timerlab.label
                }, "Click here to select a file"));
}

var make = Uploader;

export {
  icon ,
  make ,
  
}
/* icon Not a pure module */

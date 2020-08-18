

import * as React from "react";
import * as ImagePreview$Timerlab from "./ImagePreview.bs.js";
import * as UploaderHook$Timerlab from "./UploaderHook.bs.js";
import * as UploaderStyles$Timerlab from "./UploaderStyles.bs.js";

var icon = require("./upload-icon.svg");

function Uploader(Props) {
  var match = UploaderHook$Timerlab.useUploader(undefined);
  var file = match[2];
  if (file !== undefined) {
    return React.createElement(ImagePreview$Timerlab.make, {
                src: file,
                onRemove: match[1]
              });
  } else {
    return React.createElement("label", {
                className: UploaderStyles$Timerlab.wrapper
              }, React.createElement("input", {
                    ref: match[3],
                    accept: ".png,.jpg",
                    type: "file",
                    onChange: match[0]
                  }), React.createElement("img", {
                    alt: "Upload icon",
                    src: icon
                  }), React.createElement("p", {
                    className: UploaderStyles$Timerlab.label
                  }, "Click here to select a file"));
  }
}

var make = Uploader;

export {
  icon ,
  make ,
  
}
/* icon Not a pure module */

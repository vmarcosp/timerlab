

import * as React from "react";
import * as ImagePreview$Timerlab from "./ImagePreview.bs.js";
import * as UploaderHook$Timerlab from "./UploaderHook.bs.js";
import * as UploaderStyles$Timerlab from "./UploaderStyles.bs.js";

var icon = require("./upload-icon.svg");

function Uploader(Props) {
  var onChange = Props.onChange;
  var value = Props.value;
  var match = UploaderHook$Timerlab.useUploader(onChange);
  if (value === "") {
    return React.createElement("label", {
                className: UploaderStyles$Timerlab.wrapper
              }, React.createElement("input", {
                    ref: match[2],
                    accept: ".png,.jpg",
                    type: "file",
                    onChange: match[0]
                  }), React.createElement("img", {
                    alt: "Upload icon",
                    src: icon
                  }), React.createElement("p", {
                    className: UploaderStyles$Timerlab.label
                  }, "Click here to select a image"));
  } else {
    return React.createElement(ImagePreview$Timerlab.make, {
                src: value,
                onRemove: match[1]
              });
  }
}

var make = Uploader;

export {
  icon ,
  make ,
  
}
/* icon Not a pure module */

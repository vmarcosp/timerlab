

import * as React from "react";
import * as Label$Timerlab from "../Label/Label.bs.js";
import * as InputColor$Timerlab from "../InputColor/InputColor.bs.js";
import * as InputRange$Timerlab from "../InputRange/InputRange.bs.js";
import * as ImagePreview$Timerlab from "./ImagePreview.bs.js";
import * as UploaderHook$Timerlab from "./UploaderHook.bs.js";
import * as UploaderStyles$Timerlab from "./UploaderStyles.bs.js";

var icon = require("./upload-icon.svg");

function Uploader(Props) {
  var onChange = Props.onChange;
  var value = Props.value;
  var onOpacityChange = Props.onOpacityChange;
  var onOverlayChange = Props.onOverlayChange;
  var opacity = Props.opacity;
  var overlayColor = Props.overlayColor;
  var match = UploaderHook$Timerlab.useUploader(onChange);
  if (value === "") {
    return React.createElement(React.Fragment, undefined, React.createElement(Label$Timerlab.make, {
                    children: "Use an image"
                  }), React.createElement("label", {
                    className: UploaderStyles$Timerlab.wrapper
                  }, React.createElement("input", {
                        ref: match[2],
                        accept: ".png,.jpg,.jpeg",
                        type: "file",
                        onChange: match[0]
                      }), React.createElement("img", {
                        alt: "Upload icon",
                        src: icon
                      }), React.createElement("p", {
                        className: UploaderStyles$Timerlab.label
                      }, "Click here to select an image")));
  } else {
    return React.createElement("div", {
                className: UploaderStyles$Timerlab.controls
              }, React.createElement(ImagePreview$Timerlab.make, {
                    src: value,
                    onRemove: match[1]
                  }), React.createElement("div", {
                    className: UploaderStyles$Timerlab.imageOptions
                  }, React.createElement(InputColor$Timerlab.make, {
                        onChange: onOverlayChange,
                        value: overlayColor,
                        label: "Overlay color"
                      }), React.createElement(InputRange$Timerlab.make, {
                        onChange: onOpacityChange,
                        value: opacity,
                        label: "Opacity",
                        min: "0",
                        max: "1"
                      })));
  }
}

var make = Uploader;

export {
  icon ,
  make ,
  
}
/* icon Not a pure module */

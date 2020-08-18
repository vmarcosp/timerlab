

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Helpers$Timerlab from "../../lib/Helpers.bs.js";
import * as UploaderStyles$Timerlab from "./UploaderStyles.bs.js";

function ImagePreview(Props) {
  var src = Props.src;
  var onRemove = Props.onRemove;
  return React.createElement("div", {
              className: UploaderStyles$Timerlab.previewContainer
            }, React.createElement("button", {
                  className: UploaderStyles$Timerlab.removeButton,
                  onClick: (function (e) {
                      Helpers$Timerlab.preventDefault(e);
                      return Curry._1(onRemove, undefined);
                    })
                }), React.createElement("img", {
                  className: UploaderStyles$Timerlab.preview,
                  src: src
                }));
}

var make = ImagePreview;

export {
  make ,
  
}
/* react Not a pure module */

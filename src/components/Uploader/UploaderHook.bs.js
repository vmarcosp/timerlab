

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function readFile(cb, $$event) {
  var file = Belt_Array.get($$event.target.files, 0);
  var reader = new FileReader();
  reader.addEventListener("load", (function ($$event) {
          return Curry._1(cb, $$event.target.result);
        }));
  reader.readAsDataURL(file);
  
}

function useUploader(onChange) {
  var inputRef = React.useRef(null);
  var onUploadImage = function (param) {
    return readFile(Curry.__1(onChange), param);
  };
  var removePreview = function (param) {
    return Curry._1(onChange, "");
  };
  return [
          onUploadImage,
          removePreview,
          inputRef
        ];
}

export {
  readFile ,
  useUploader ,
  
}
/* react Not a pure module */

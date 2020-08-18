

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function map(items, fn) {
  return Belt_Array.mapWithIndex(items, (function (index, item) {
                return Curry._2(fn, String(index), item);
              }));
}

export {
  map ,
  
}
/* No side effect */

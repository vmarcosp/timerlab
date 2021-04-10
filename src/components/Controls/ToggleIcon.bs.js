

import * as React from "react";

function ToggleIcon(Props) {
  var className = Props.className;
  var color = Props.color;
  return React.createElement("svg", {
              className: className,
              height: "20",
              width: "21",
              fill: "none",
              viewBox: "0 0 21 20",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
                  d: "M11 1L2 10L11 19",
                  stroke: color,
                  strokeLinecap: "round",
                  strokeWidth: "2"
                }), React.createElement("path", {
                  d: "M20 1L11 10L20 19",
                  stroke: color,
                  strokeLinecap: "round",
                  strokeWidth: "2"
                }));
}

var make = ToggleIcon;

export {
  make ,
  
}
/* react Not a pure module */

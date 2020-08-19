

import * as React from "react";

function ResetIcon(Props) {
  var color = Props.color;
  return React.createElement("svg", {
              height: "33",
              width: "33",
              fill: "none",
              viewBox: "0 0 33 33",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("circle", {
                  cx: "16.5",
                  cy: "16.5",
                  r: "15.5",
                  stroke: color,
                  strokeWidth: "2"
                }), React.createElement("path", {
                  d: "M17 11L17 21",
                  stroke: color,
                  strokeWidth: "10"
                }));
}

var make = ResetIcon;

export {
  make ,
  
}
/* react Not a pure module */

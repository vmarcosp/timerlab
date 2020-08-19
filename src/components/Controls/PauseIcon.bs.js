

import * as React from "react";

function PauseIcon(Props) {
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
                  stroke: "#FF357E",
                  strokeWidth: "2"
                }), React.createElement("path", {
                  d: "M14 10V22",
                  stroke: color,
                  strokeWidth: "3"
                }), React.createElement("path", {
                  d: "M20 10V22",
                  stroke: color,
                  strokeWidth: "3"
                }));
}

var make = PauseIcon;

export {
  make ,
  
}
/* react Not a pure module */

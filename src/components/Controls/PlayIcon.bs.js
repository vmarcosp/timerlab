

import * as React from "react";

function PlayIcon(Props) {
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
                  d: "M23 15.6316L13 9V23L23 15.6316Z",
                  fill: color
                }));
}

var make = PlayIcon;

export {
  make ,
  
}
/* react Not a pure module */

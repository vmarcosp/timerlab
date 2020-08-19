

import * as React from "react";
import * as Link$Timerlab from "../Link/Link.bs.js";
import * as Text$Timerlab from "../Text/Text.bs.js";
import * as Button$Timerlab from "../Button/Button.bs.js";
import * as SidebarStyles$Timerlab from "./SidebarStyles.bs.js";

function SidebarFooter(Props) {
  return React.createElement("div", {
              className: SidebarStyles$Timerlab.footer
            }, React.createElement("div", {
                  className: SidebarStyles$Timerlab.buttonsContainer
                }, React.createElement(Button$Timerlab.make, {
                      children: "Save",
                      block: true
                    })), React.createElement("p", undefined, React.createElement(Text$Timerlab.make, {
                      children: "Made with "
                    }), React.createElement(Link$Timerlab.make, {
                      href: "https://github.com/lukinco/timerlab",
                      children: "ReasonML ",
                      target: "_blank"
                    }), React.createElement(Text$Timerlab.make, {
                      children: " by "
                    }), React.createElement(Link$Timerlab.make, {
                      href: "https://lukin.co",
                      children: "Lukin Co.",
                      target: "_blank"
                    })));
}

var make = SidebarFooter;

export {
  make ,
  
}
/* react Not a pure module */

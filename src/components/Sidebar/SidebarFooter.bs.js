

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
                      children: "Apply changes",
                      block: true
                    })), React.createElement("p", undefined, React.createElement(Text$Timerlab.make, {
                      children: "Made with "
                    }), React.createElement(Link$Timerlab.make, {
                      href: "github.com",
                      children: "ReasonML "
                    }), React.createElement(Text$Timerlab.make, {
                      children: " by "
                    }), React.createElement(Link$Timerlab.make, {
                      href: "lukin.co",
                      children: "Lukin Co."
                    })));
}

var make = SidebarFooter;

export {
  make ,
  
}
/* react Not a pure module */



import * as React from "react";
import * as Link$Timerlab from "../Link/Link.bs.js";
import * as Text$Timerlab from "../Text/Text.bs.js";
import * as GithubIcon$Timerlab from "./GithubIcon.bs.js";
import * as SidebarStyles$Timerlab from "./SidebarStyles.bs.js";

function SidebarFooter(Props) {
  return React.createElement("div", {
              className: SidebarStyles$Timerlab.footer
            }, React.createElement("p", undefined, React.createElement(Text$Timerlab.make, {
                      children: "Made with "
                    }), React.createElement(Link$Timerlab.make, {
                      href: "https://reasonml.github.io/",
                      children: "ReScript ",
                      target: "_blank"
                    }), React.createElement(Text$Timerlab.make, {
                      children: " by "
                    }), React.createElement(Link$Timerlab.make, {
                      href: "https://github.com/vmarcosp",
                      children: "@vmarcosp",
                      target: "_blank"
                    })), React.createElement("a", {
                  className: SidebarStyles$Timerlab.forkMeText,
                  href: "https://github.com/lukinco/timerlab"
                }, React.createElement(GithubIcon$Timerlab.make, {}), "Fork me on GitHub"));
}

var make = SidebarFooter;

export {
  make ,
  
}
/* react Not a pure module */

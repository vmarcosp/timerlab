

import * as React from "react";
import * as Link$Timerlab from "../Link/Link.bs.js";
import * as Logo$Timerlab from "../Logo/Logo.bs.js";
import * as Text$Timerlab from "../Text/Text.bs.js";
import * as Input$Timerlab from "../Input/Input.bs.js";
import * as Select$Timerlab from "../Select/Select.bs.js";
import * as SidebarStyles$Timerlab from "./SidebarStyles.bs.js";

function Sidebar(Props) {
  return React.createElement("div", {
              className: SidebarStyles$Timerlab.sidebar
            }, React.createElement("div", {
                  className: SidebarStyles$Timerlab.header
                }, React.createElement(Logo$Timerlab.make, {})), React.createElement("div", {
                  className: SidebarStyles$Timerlab.content
                }, React.createElement(Input$Timerlab.make, {
                      placeholder: "Title",
                      label: "Title"
                    }), React.createElement(Input$Timerlab.make, {
                      placeholder: "Description",
                      label: "Description"
                    }), React.createElement(Input$Timerlab.make, {
                      placeholder: "00:00",
                      label: "Time",
                      type_: "number"
                    }), React.createElement(Select$Timerlab.make, {
                      label: "Theme",
                      children: React.createElement("option", undefined, "Custom theme")
                    })), React.createElement("div", {
                  className: SidebarStyles$Timerlab.footer
                }, React.createElement("p", undefined, React.createElement(Text$Timerlab.make, {
                          children: "Made with "
                        }), React.createElement(Link$Timerlab.make, {
                          href: "github.com",
                          children: "ReasonML "
                        }), React.createElement(Text$Timerlab.make, {
                          children: " by "
                        }), React.createElement(Link$Timerlab.make, {
                          href: "lukin.co",
                          children: "Lukin Co."
                        }))));
}

var make = Sidebar;

export {
  make ,
  
}
/* react Not a pure module */

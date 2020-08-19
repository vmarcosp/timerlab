

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Form$Timerlab from "../Form/Form.bs.js";
import * as Input$Timerlab from "../Input/Input.bs.js";
import * as InputTime$Timerlab from "../InputTime/InputTime.bs.js";
import * as SidebarForm$Timerlab from "./SidebarForm.bs.js";
import * as SidebarHook$Timerlab from "./SidebarHook.bs.js";
import * as ThemeSelect$Timerlab from "../ThemeSelect/ThemeSelect.bs.js";
import * as ThemeActions$Timerlab from "../ThemeActions/ThemeActions.bs.js";
import * as SidebarFooter$Timerlab from "./SidebarFooter.bs.js";
import * as SidebarHeader$Timerlab from "./SidebarHeader.bs.js";
import * as SidebarStyles$Timerlab from "./SidebarStyles.bs.js";

function Sidebar(Props) {
  var themes = Props.themes;
  var onCreateTheme = Props.onCreateTheme;
  var onEditTheme = Props.onEditTheme;
  var form = SidebarHook$Timerlab.useSidebar(undefined);
  return React.createElement("aside", {
              className: SidebarStyles$Timerlab.sidebar
            }, React.createElement(Form$Timerlab.make, {
                  children: null,
                  className: SidebarStyles$Timerlab.configForm,
                  onSubmit: form.submit
                }, React.createElement(SidebarHeader$Timerlab.make, {}), React.createElement("div", {
                      className: SidebarStyles$Timerlab.content
                    }, React.createElement(Input$Timerlab.make, {
                          placeholder: "Title",
                          onChange: SidebarForm$Timerlab.updateTitle(form),
                          value: form.input.title,
                          label: "Title"
                        }), React.createElement(Input$Timerlab.make, {
                          placeholder: "Description",
                          onChange: SidebarForm$Timerlab.updateDescription(form),
                          value: form.input.description,
                          label: "Description",
                          required: true
                        }), React.createElement(InputTime$Timerlab.make, {
                          onChange: SidebarForm$Timerlab.updateTime(form),
                          value: form.input.time
                        }), React.createElement(ThemeSelect$Timerlab.make, {
                          options: themes,
                          onChange: SidebarForm$Timerlab.updateTheme(form),
                          value: form.input.theme
                        }), React.createElement(ThemeActions$Timerlab.make, {
                          children: null
                        }, SidebarHook$Timerlab.canEdit(form.input.theme, themes) ? React.createElement(ThemeActions$Timerlab.Edit.make, {
                                onClick: (function (param) {
                                    return Curry._1(onEditTheme, form.input.theme);
                                  })
                              }) : null, React.createElement(ThemeActions$Timerlab.Add.make, {
                              onClick: onCreateTheme
                            }))), React.createElement(SidebarFooter$Timerlab.make, {})));
}

var make = Sidebar;

export {
  make ,
  
}
/* react Not a pure module */

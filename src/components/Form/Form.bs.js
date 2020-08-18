

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function getValue($$event) {
  return $$event.target.value;
}

function handleSubmit(onSubmit, $$event) {
  $$event.preventDefault();
  return Curry._1(onSubmit, undefined);
}

function handleChange(updater, cb, $$event) {
  return Curry._2(updater, cb, $$event.target.value);
}

function Form(Props) {
  var children = Props.children;
  var className = Props.className;
  var submit = Props.onSubmit;
  var styles = className !== undefined ? className : "";
  return React.createElement("form", {
              className: styles,
              onSubmit: (function (param) {
                  return handleSubmit(submit, param);
                })
            }, children);
}

var make = Form;

export {
  getValue ,
  handleSubmit ,
  handleChange ,
  make ,
  
}
/* react Not a pure module */

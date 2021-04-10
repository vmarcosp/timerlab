open Css;

Helpers.require("./reset.css");

let add = () => {
  global(
    "html, body, #root",
    [margin(zero), padding(zero), height(100.->pct), width(100.->pct)],
  );
  global("*", [boxSizing(`borderBox)]);
};

open Css;

let colors =
  style([
    display(`flex),
    selector("> *:nth-child(1)", [marginRight(1.->rem)]),
  ]);

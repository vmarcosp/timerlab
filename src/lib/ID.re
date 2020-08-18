let createId = () =>
  Js.Math.random()
  ->Js.Float.toStringWithRadix(~radix=36)
  ->Js.String.substring(~from=2, ~to_=9);

let generate = () => createId() ++ "-" ++ createId();

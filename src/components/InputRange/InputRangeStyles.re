open Css;
open CssHelpers;

let rangeLabel =
  style([
    fontSize(0.85->rem),
    Theme.Fonts.text,
    color(white),
    display(block),
  ]);

let input = style([fullWidth]);

let rangeValue =
  style([Theme.Fonts.text, color(Theme.Colors.primary), textAlign(`right)]);

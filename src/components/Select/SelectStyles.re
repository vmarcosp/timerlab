open Css;
open CssHelpers;
let icon = Helpers.import("./select-icon.svg");

let select =
  style([
    fullWidth,
    background(Theme.Colors.shape),
    noBorder,
    noOutline,
    Theme.Fonts.text,
    color(white),
    fontSize(1.->rem),
    borderRadius(2->px),
    focus([boxShadow(Shadow.box(~spread=2->px, Theme.Colors.primary))]),
    transitionDuration(400),
    marginBottom(1.25->rem),
    padding(0.75->rem),
    position(relative),
  ]);

let label =
  style([
    fontSize(0.85->rem),
    Theme.Fonts.text,
    color(white),
    marginBottom(0.5->rem),
    display(block),
  ]);

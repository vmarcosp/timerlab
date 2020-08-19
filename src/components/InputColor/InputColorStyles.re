open Css;
open CssHelpers;

let wrapper = style([fullWidth]);

let input =
  style([
    //
    fullWidth,
    background(Theme.Colors.shape),
    noBorder,
    noOutline,
    Theme.Fonts.text,
    color(white),
    fontSize(1.->rem),
    padding(0.75->rem),
    borderRadius(2->px),
    focus([boxShadow(Shadow.box(~spread=2->px, Theme.Colors.primary))]),
    transitionDuration(400),
    marginBottom(1.25->rem),
    placeholder([color("6F5D7A"->hex)]),
  ]);

open Css;
open CssHelpers;

let wrapper =
  style([
    position(fixed),
    background(rgba(88, 63, 103, 0.68)),
    fullHeight,
    fullWidth,
    top(zero),
    left(zero),
    display(`flex),
    justifyContent(center),
    alignItems(center),
  ]);

let modal =
  style([
    minWidth(425->px),
    background(Theme.Colors.background),
    borderRadius(2->px),
  ]);

let title =
  style([
    Theme.Fonts.text,
    color(white),
    fontWeight(`num(500)),
    margin(zero),
  ]);

let header = style([padding(1.5->rem)]);
let content = style([padding(1.5->rem), flex(`num(3.))]);
let footer =
  style([padding(1.5->rem), display(`flex), justifyContent(flexEnd)]);

open Css;
open CssHelpers;

let sidebar =
  style([
    background(Theme.Colors.background),
    height(100.->pct),
    maxWidth(350->px),
    display(`flex),
    flexDirection(column),
  ]);

let header =
  style([display(`flex), justifyContent(center), padding(2.->rem)]);

let content =
  style([
    paddingVH(zero, 1.5->rem),
    flex(`num(3.)),
    overflow(auto),
    selector(
      "::-webkit-scrollbar",
      [background("543a64"->hex), width(6->px)],
    ),
    selector(
      "::-webkit-scrollbar-thumb",
      [background("9480a0"->hex), borderRadius(2->px)],
    ),
  ]);

let footer =
  style([
    color(white),
    Theme.Fonts.text,
    display(`flex),
    justifyContent(center),
    alignItems(center),
    padding(1.->rem),
  ]);

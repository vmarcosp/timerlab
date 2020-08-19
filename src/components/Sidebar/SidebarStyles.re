open Css;
open CssHelpers;

let sidebar = visible =>
  style([
    position(fixed),
    top(zero),
    visible ? left(zero) : left((-350)->px),
    background(Theme.Colors.background),
    height(100.->pct),
    width(Theme.sidebarWidth),
    display(`flex),
    flexDirection(column),
    transitionDuration(400),
  ]);

let configForm =
  style([
    height(100.->pct),
    maxWidth(Theme.sidebarWidth),
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
    flexDirection(column),
  ]);

let buttonsContainer =
  style([display(`flex), fullWidth, marginBottom(1.->rem)]);

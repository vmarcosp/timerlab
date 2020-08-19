open Css;
open CssHelpers;
open TimerTypes;

let wrapper = (visible, theme) => {
  let wrapperBackground =
    switch (theme.background) {
    | Color(color) => [unsafe("background", color)]
    | Image(image) => [
        background(`url(image)),
        backgroundSize(`cover),
        backgroundPosition(`bottom),
        after([
          contentRule(`text(" ")),
          position(absolute),
          fullHeight,
          fullWidth,
          top(zero),
          left(zero),
          unsafe("backgroundColor", theme.overlayColor),
          opacity(theme.opacity),
          zIndex(2),
        ]),
      ]
    };

  style([
    visible ? marginLeft(Theme.sidebarWidth) : margin(zero),
    transitionDuration(400),
    fullHeight,
    padding(zero),
    position(relative),
    ...wrapperBackground,
  ]);
};

let header =
  style([
    display(`flex),
    justifyContent(spaceBetween),
    padding(3.->rem),
    position(absolute),
    width(100.->pct),
    zIndex(12),
  ]);

let content =
  style([
    display(`flex),
    justifyContent(center),
    alignItems(center),
    flexDirection(column),
    height(100.->pct),
    position(relative),
    zIndex(10),
  ]);

let title = color =>
  style([
    unsafe("color", color),
    Theme.Fonts.text,
    fontSize(3.->rem),
    fontWeight(`num(500)),
    margin(zero),
  ]);

let timerValue = color =>
  style([
    unsafe("color", color),
    fontSize(124->px),
    Theme.Fonts.text,
    fontWeight(`bold),
    margin(zero),
    marginTop(4.->rem),
  ]);

let subtitle = color =>
  style([
    unsafe("color", color),
    Theme.Fonts.text,
    fontSize(1.75->rem),
    fontWeight(`num(400)),
    margin(zero),
  ]);

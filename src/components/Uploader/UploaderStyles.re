open Css;

let wrapper =
  style([
    border(2->px, dashed, "351D43"->hex),
    display(`flex),
    flexDirection(column),
    alignItems(center),
    padding(1.5->rem),
    cursor(pointer),
    transitionDuration(400),
    selector("input", [display(none)]),
    hover([
      borderColor(Theme.Colors.primary),
      selector("*", [color(Theme.Colors.primary)]),
    ]),
  ]);

let label =
  style([
    Theme.Fonts.text,
    color("6F5D7A"->hex),
    transitionDuration(400),
    margin(zero),
    marginTop(1.->rem),
  ]);

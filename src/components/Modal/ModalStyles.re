open Css;
open CssHelpers;

let fadeIn = [
  animationName(
    keyframes([
      (0, [opacity(0.0), visibility(visible)]),
      (100, [opacity(1.0), visibility(visible)]),
    ]),
  ),
  animationFillMode(`forwards),
  animationDuration(200),
];

let wrapper = visible => {
  let base = [
    position(fixed),
    background(rgba(88, 63, 103, 0.68)),
    fullHeight,
    fullWidth,
    top(zero),
    left(zero),
    opacity(0.),
    display(`flex),
    visibility(hidden),
    justifyContent(center),
    alignItems(center),
  ];
  let animation = visible ? fadeIn : [];
  style(List.concat(base, animation));
};

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

let header = style([paddingVH(1.25->rem, 1.5->rem)]);
let content = style([paddingVH(1.->rem, 1.5->rem), flex(`num(3.))]);
let footer =
  style([padding(1.5->rem), display(`flex), justifyContent(flexEnd)]);

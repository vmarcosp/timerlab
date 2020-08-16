let link =
  Css.(
    style([
      color(white),
      color(Theme.Colors.primary),
      textDecoration(`none),
    ])
  );

[@react.component]
let make = (~href, ~children) => {
  <a href className=link> children->React.string </a>;
};

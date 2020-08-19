let orContainer =
  Css.(
    style([
      fontSize(1.->rem),
      color(Theme.Colors.shape),
      position(relative),
      Theme.Fonts.text,
      textAlign(center),
      margin2(~v=zero, ~h=auto),
      marginBottom(1.25->rem),
      display(block),
      fontWeight(`num(500)),
    ])
  );

[@react.component]
let make = () => <span className=orContainer> "or"->React.string </span>;

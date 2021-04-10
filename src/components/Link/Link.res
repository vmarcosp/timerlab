let link = {
  open Css
  style(list{
    color(Theme.Colors.primary),
    textDecoration(#none),
    position(relative),
    after(list{
      contentRule(#text(" ")),
      width(100.->pct),
      height(2->px),
      position(absolute),
      backgroundColor(Theme.Colors.primary),
      bottom(zero),
      left(zero),
      transform(scale(0., 0.)),
      transitionDuration(300),
    }),
    hover(list{after(list{transform(scale(1., 1.))})}),
  })
}

@react.component
let make = (~href, ~children, ~target=?) =>
  <a ?target href className=link> {children->React.string} </a>

module Styles = {
  open CssJs
  open CssHelpers

  let getColor = x =>
    switch x {
    | #primary => Theme.Colors.primary
    | #default => transparent
    }

  let getHoverColor = x =>
    switch x {
    | #primary => "C02A60"->hex
    | #default => rgba(69, 48, 82, #num(0.16))
    }

  let button = (~variant, ~block) =>
    style(.[
      background(getColor(variant)),
      noBorder,
      noOutline,
      color(white),
      borderRadius(2->px),
      cursor(pointer),
      block ? fullWidth : minWidth(140->px),
      height(40->px),
      Theme.Fonts.text,
      fontSize(1.->rem),
      transitionDuration(300),
      hover([background(getHoverColor(variant))]),
    ])
}

type variant = [#primary | #default]

@react.component
let make = (~children, ~onClick=?, ~variant=#primary, ~block=false, ~type_=?) => {
  open Styles
  <button ?type_ ?onClick className={button(~variant, ~block)}> {children->React.string} </button>
}

let label = {
  open Css
  style(list{
    fontSize(0.85->rem),
    Theme.Fonts.text,
    color(white),
    marginBottom(0.5->rem),
    display(block),
  })
}

@react.component
let make = (~children: string) => <label className=label> {children->React.string} </label>

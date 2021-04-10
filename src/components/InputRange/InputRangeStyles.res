open Css
open CssHelpers

let rangeLabel = style(list{fontSize(0.85->rem), Theme.Fonts.text, color(white), display(block)})

let input = style(list{fullWidth})

let rangeValue = style(list{Theme.Fonts.text, color(Theme.Colors.primary), textAlign(#right)})

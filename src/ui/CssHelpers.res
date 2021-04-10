open Css

let debugBorder = border(1->px, solid, red)
let fullWidth = width(100.->pct)
let fullHeight = height(100.->pct)
let noBorder = borderStyle(#none)
let noOutline = outlineStyle(#none)
let paddingVH = (v, h) => Css.padding2(~v, ~h)

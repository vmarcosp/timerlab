open CssJs
 open CssHelpers

let removeIcon = Helpers.\"import"("./remove.svg")

let wrapper = style(.[
  border(2->px, dashed, "351D43"->hex),
  display(#flex),
  flexDirection(column),
  alignItems(center),
  padding(1.5->rem),
  cursor(pointer),
  transitionDuration(400),
  selector("input", [display(none)]),
  hover([borderColor(Theme.Colors.primary), selector("*", [color(Theme.Colors.primary)])]),
])

let label = style(.[
   Theme.Fonts.text,
  color("6F5D7A"->hex),
  transitionDuration(400),
  margin(zero),
  marginTop(1.->rem),
])

let removeButton = style(.[
    noBorder,
    noOutline,
  padding(zero),
  margin(zero),
  position(absolute),
  top(-6->px),
  right(-6->px),
  width(23->px),
  height(22->px),
  cursor(pointer),
  borderRadius(50.->pct),
  background(Theme.Colors.primary),
  transitionDuration(400),
  after([contentRule(#url(removeIcon)), width(10->px), height(10->px)]),
])

let buttonSelector = j`.$(removeButton)`

let previewContainer = style(.[
  position(relative),
  width(124->px),
  marginTop(0.25->rem),
  selector(buttonSelector, [opacity(0.)]),
  hover([selector(buttonSelector, [opacity(1.)])]),
])

let preview = style(.[maxWidth(124->px), borderRadius(4->px)])

let controls = style(.[display(#flex)])

let imageOptions = style(.[
   fullWidth,
  marginLeft(1.5->rem),
])

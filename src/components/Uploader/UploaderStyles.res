open Css
open CssHelpers

let removeIcon = Helpers.\"import"("./remove.svg")

let wrapper = style(list{
  border(2->px, dashed, "351D43"->hex),
  display(#flex),
  flexDirection(column),
  alignItems(center),
  padding(1.5->rem),
  cursor(pointer),
  transitionDuration(400),
  selector("input", list{display(none)}),
  hover(list{borderColor(Theme.Colors.primary), selector("*", list{color(Theme.Colors.primary)})}),
})

let label = style(list{
  Theme.Fonts.text,
  color("6F5D7A"->hex),
  transitionDuration(400),
  margin(zero),
  marginTop(1.->rem),
})

let removeButton = style(list{
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
  after(list{contentRule(#url(removeIcon)), width(10->px), height(10->px)}),
})

let buttonSelector = j`.$(removeButton)`

let previewContainer = style(list{
  position(relative),
  width(124->px),
  marginTop(0.25->rem),
  selector(buttonSelector, list{opacity(0.)}),
  hover(list{selector(buttonSelector, list{opacity(1.)})}),
})

let preview = style(list{maxWidth(124->px), borderRadius(4->px)})

let controls = style(list{display(#flex)})

let imageOptions = style(list{fullWidth, marginLeft(1.5->rem)})

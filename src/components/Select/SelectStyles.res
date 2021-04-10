open CssJs
 open CssHelpers
let icon = Helpers.\"import"("./arrow-icon.svg")

let wrapper = style(.[
  position(relative),
  after([
    contentRule(#text(" ")),
    width(11->px),
    height(17->px),
    position(absolute),
    display(block),
    top(0.95->rem),
    right(0.95->rem),
    color(red),
    backgroundImage(#url(icon)),
    backgroundSize(#auto),
  ]),
])

let select = style(.[
  // CSS_HEPLERS fullWidth,
  background(Theme.Colors.shape),
  // CSS_HEPLERS fullWidth
   noBorder,
   noOutline,
    Theme.Fonts.text,
  color(white),
  fontSize(1.->rem),
  borderRadius(2->px),
  focus([boxShadow(Shadow.box(~spread=2->px, Theme.Colors.primary))]),
  transitionDuration(400),
  marginBottom(1.25->rem),
  padding(0.75->rem),
  display(block),
])

let label = style(.[
  fontSize(0.85->rem),
   Theme.Fonts.text,
  color(white),
  marginBottom(0.5->rem),
  display(block),
])

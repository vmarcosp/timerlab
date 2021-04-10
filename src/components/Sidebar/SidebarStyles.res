open Css
open CssHelpers

let sidebar = visible =>
  style(list{
    position(fixed),
    top(zero),
    visible ? left(zero) : left(-350->px),
    background(Theme.Colors.background),
    height(100.->pct),
    width(Theme.sidebarWidth),
    display(#flex),
    flexDirection(column),
    transitionDuration(400),
  })

let configForm = style(list{
  height(100.->pct),
  maxWidth(Theme.sidebarWidth),
  display(#flex),
  flexDirection(column),
})

let header = style(list{display(#flex), justifyContent(center), padding(2.->rem)})

let content = style(list{
  paddingVH(zero, 1.5->rem),
  flex(#num(3.)),
  overflow(auto),
  selector("::-webkit-scrollbar", list{background("543a64"->hex), width(6->px)}),
  selector("::-webkit-scrollbar-thumb", list{background("9480a0"->hex), borderRadius(2->px)}),
})

let footer = style(list{
  color(white),
  Theme.Fonts.text,
  display(#flex),
  justifyContent(center),
  alignItems(center),
  padding(1.->rem),
  flexDirection(column),
})

let buttonsContainer = style(list{display(#flex), fullWidth, marginBottom(1.->rem)})

let forkMeText = style(list{
  fontSize(0.95->rem),
  display(#flex),
  alignItems(#center),
  color(white),
  color(Theme.Colors.primary),
  textDecoration(#none),
  paddingVH(0.5->rem, zero),
})

let forkIcon = style(list{marginRight(1.->rem)})

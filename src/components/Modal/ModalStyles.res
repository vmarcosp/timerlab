open Css
open CssHelpers

let fadeIn = list{
  animationName(
    keyframes(list{
      (0, list{opacity(0.0), visibility(visible)}),
      (100, list{opacity(1.0), visibility(visible)}),
    }),
  ),
  animationFillMode(#forwards),
  animationDuration(200),
}

let wrapper = visible => {
  let base = list{
    position(fixed),
    background(rgba(88, 63, 103, #num(0.68))),
    fullHeight,
    fullWidth,
    top(zero),
    left(zero),
    opacity(0.),
    display(#flex),
    visibility(hidden),
    justifyContent(center),
    alignItems(center),
    zIndex(1000),
  }
  let animation = visible ? fadeIn : list{}
  style(List.concat(base, animation))
}

let modal = style(list{
  width(500->px),
  maxWidth(500->px),
  background(Theme.Colors.background),
  borderRadius(2->px),
})

let title = style(list{Theme.Fonts.text, color(white), fontWeight(#num(500)), margin(zero)})

let header = style(list{paddingVH(1.25->rem, 1.5->rem)})
let content = style(list{paddingVH(1.->rem, 1.5->rem), flex(#num(3.))})
let footer = style(list{padding(1.5->rem), display(#flex), justifyContent(flexEnd)})

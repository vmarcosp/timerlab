module Colors = {
  let primaryRaw = "FF357E";
  let backgroundRaw = "1E052D";
  let shapeRaw = "351D43";
  let primary = primaryRaw->Css.hex;
  let background = backgroundRaw->Css.hex;
  let shape = shapeRaw->Css.hex;
};

module Fonts = {
  let text = Css.fontFamily(`custom({|'Raleway', sans-serif|}));
};

module Colors = {
  let primaryRaw = "FF357E";
  let backgroundRaw = "1E052D";
  let shapeRaw = "351D43";
  let primary = primaryRaw->Css.hex;
  let background = backgroundRaw->Css.hex;
  let shape = shapeRaw->Css.hex;

  let toHex = value => "#" ++ value;
};

module Fonts = {
  let text = Css.fontFamily(`custom({|'Poppins', sans-serif|}));
};

let sidebarWidth = 350->Css.px;

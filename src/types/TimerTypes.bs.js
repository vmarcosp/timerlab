


function makeBackground(param) {
  var color = param[0];
  if (color !== undefined) {
    var image = param[1];
    if (image !== undefined) {
      return {
              TAG: /* Image */0,
              _0: image
            };
    } else {
      return {
              TAG: /* Color */1,
              _0: color
            };
    }
  }
  var image$1 = param[1];
  if (image$1 !== undefined) {
    return {
            TAG: /* Image */0,
            _0: image$1
          };
  } else {
    return {
            TAG: /* Color */1,
            _0: "#fff"
          };
  }
}

function fromThemeForm(output, id) {
  return {
          id: id,
          name: output.name,
          primaryColor: output.primaryColor,
          secondaryColor: output.secondaryColor,
          background: makeBackground([
                output.backgroundColor,
                output.backgroundImage
              ]),
          default: false
        };
}

function toInput(theme) {
  var color = theme.background;
  var tmp;
  tmp = color.TAG ? color._0 : "";
  var image = theme.background;
  var tmp$1;
  tmp$1 = image.TAG ? "" : image._0;
  return {
          name: theme.name,
          primaryColor: theme.primaryColor,
          secondaryColor: theme.secondaryColor,
          backgroundColor: tmp,
          backgroundImage: tmp$1
        };
}

export {
  makeBackground ,
  fromThemeForm ,
  toInput ,
  
}
/* No side effect */




function createId(param) {
  var arg = Math.random().toString(36);
  return (function (param) {
                return function (param$1) {
                  return arg.substring(param, param$1);
                };
              })(2)(9);
}

function generate(param) {
  return createId(undefined) + ("-" + createId(undefined));
}

export {
  createId ,
  generate ,
  
}
/* No side effect */

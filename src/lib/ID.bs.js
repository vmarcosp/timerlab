


function createId(param) {
  return Math.random().toString(36).substring(2, 9);
}

function generate(param) {
  return createId(undefined) + ("-" + createId(undefined));
}

export {
  createId ,
  generate ,
  
}
/* No side effect */

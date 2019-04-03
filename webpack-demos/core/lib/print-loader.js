const kindOf = require("kind-of");



function printObject(obj, indent = 2) {
  let description = `${kindOf(obj)}: \n`;
  const blanks = getBlank(indent);
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      description += `${blanks}${p}: ${kindOf(p)}\n`
    }
  }
  return description
}

function getBlank(indent) {
  return " ".repeat(indent);
}

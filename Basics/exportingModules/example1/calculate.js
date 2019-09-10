console.log('This is calculate.js')

const add = function(a, b) {
  return (a + b)
}

const sub = function(a, b) {
  return (a - b)
}

const mult = function(a, b) {
  return (a * b)
}

const div = function(a, b) {
  return (a / b)
}

module.exports.add = add
module.exports.sub = sub
module.exports.mult = mult
module.exports.div = div

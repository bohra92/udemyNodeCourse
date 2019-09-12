const validator = require('validator')

console.log(validator.isEmail("bohratanuj@gmail.com"))
console.log(validator.isEmail("bohratanuj@gmailcom"))

console.log(validator.isURL("http://google.com"))
console.log(validator.isEmail("http/google.com"))

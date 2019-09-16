const fs = require('fs')

fs.writeFileSync('notes.txt', "this is the beginning of the note ")
fs.appendFileSync('notes.txt', "\nthis is the second line of the note ")
fs.appendFileSync('notes.txt', "\nthis is the third line of the note ")

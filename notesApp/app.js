const util = require('./util.js')
const notes = require('./notes.js')
const yargs = require('yargs');

//console.log(getNotes());
yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'adding a note',
  handler: function() {
    console.log("Adding a new note");
  }
})

yargs.command({
  command: 'rv',
  describe: 'removing a note a note',
  handler: function() {
    console.log("Removing a new note");
  }
})

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function() {
    console.log("Reading a new note");
  }
})

yargs.command({
  command: 'list',
  describe: 'listing all the notes',
  handler: function() {
    console.log("listing all the notes");
  }
})

console.log(yargs.argv);

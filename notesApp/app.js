const yargs = require('yargs');
const notes = require('./notes.js')
//console.log(getNotes());
//yargs.command(command,describe,builder,handler())
yargs.version('1.1.0')

//adding a note ****************************************************************
yargs.command(
  'add',
  'adding a note', {
    name: {
      alias: 'n',
      type: 'string',
      describe: 'note name',
      demandOption: true
    },
    technology: {
      alias: 't',
      type: 'string',
      describe: 'note technology',
      demandOption: true
    }
  },
  (argv) => {
    if (typeof(argv.n) != "string" || typeof(argv.t) != "string") {
      console.log("technology/name are not in correct type");
    } else {
      notes.addNote(argv.name, argv.technology)
      console.log("Added successfully");
    }
  })

//removing a note **************************************************************
yargs.command(
  'rv',
  'removing a note a note', {
    name: {
      alias: 'n',
      type: 'string',
      describe: 'note name',
      demandOption: true
    }
  },
  () => {
    //function goes here
    console.log("Removing a new note");
  })

//reading a note ***************************************************************
yargs.command(
  'read',
  'Reading a note', {
    name: {
      alias: 'n',
      type: 'string',
      describe: 'note name',
      demandOption: true
    }
  },
  () => {
    console.log("Reading a new note");
  })

//listing all the notes ********************************************************
yargs.command(
  'list',
  'listing all the notes',
  () => {
    console.log("listing all the notes");
  })

console.log(yargs.argv);

const yargs = require('yargs');
const notes = require('./notes.js')
const chalk = require('chalk');

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
      console.log(chalk.inverse.red("technology/name are not in correct type"))
    } else {
      console.log(notes.addNote(argv.name, argv.technology).msg);

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
  (argv) => {
    console.log("Removing a note");
    console.log(notes.removeNote(argv.name).msg);
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
  (argv) => {
    console.log("Reading a new note")
    console.log();
    console.log(notes.readNote(argv.name).msg);
  })

//listing all the notes ********************************************************
yargs.command(
  'list',
  'listing all the notes',
  () => {
    console.log("listing all the notes");
    notes.getAllNotes()
  })

//listing all the notes ********************************************************
yargs.command(
  'upt',
  'updating a note', {
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
      console.log(chalk.inverse.red("technology/name are not in correct type"))
    } else {
      console.log(notes.updateNote(argv.name, argv.technology).msg);
    }
  }).argv


//console.log(yargs.argv);

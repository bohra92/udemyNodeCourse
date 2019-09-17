const yargs = require('yargs');

//console.log(getNotes());
//yargs.command(command,describe,builder,handler())
yargs.version('1.1.0')

//adding a note ****************************************************************
yargs.command(
  'add',
  'adding a note', {
    title: {
      alias: 't',
      type: 'string',
      describe: 'note title',
      demandOption: true
    },
    marks: {
      alias: 'm',
      type: 'number',
      describe: 'note marks',
      demandOption: false
    }
  },
  (argv) => {
    console.log("Adding a new note with \n title :", argv.title, "\n marks :", argv.marks)
    //function goes here
    if (isNaN(argv.m) || typeof(argv.t) != "string") {
      console.log("marks/title are not in correct type");
    } else {
      console.log("Added successfully");
    }
  })

//removing a note **************************************************************
yargs.command(
  'rv',
  'removing a note a note', {
    title: {
      alias: 't',
      type: 'string',
      describe: 'note title',
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
    title: {
      alias: 't',
      type: 'string',
      describe: 'note title',
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

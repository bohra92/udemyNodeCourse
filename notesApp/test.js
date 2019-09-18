const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
  .command({
    command: 'add',
    describe: 'Adding command',
    handler: argv => {
      console.log('Adding notes');
    }
  })
  .argv;

const readJSON = fs.readFileSync('notes.json')
const notes = JSON.parse(readJSON)
console.log(`${notes.length} notes found`);
notes.forEach((note) => {
  console.log(`\nNAME : ${note.name} \nTECH.: ${note.technology}`);
})

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

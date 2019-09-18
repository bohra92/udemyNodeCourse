const fs = require('fs');
const chalk = require('chalk');

getNotes = () => {
  return 'I am a note'
}

const addNote = (name, technology) => {
  const notes = loadNotes()
  const checkDuplicates = notes.filter((note) => {
    return note.name === name
  })
  if (checkDuplicates.length === 0) {
    notes.push({
      name: name,
      technology: technology
    })
    saveNote(notes)
    console.log(chalk.inverse.blue(`Note ${name} Added successfully`));
  } else console.log(chalk.inverse.red(`Name ${name} Already Taken`));
}

const removeNote = (name) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => {
    return note.name !== name
  })
  saveNote(notesToKeep)
  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.blue(`Note ${name} removed successfully`));
  } else console.log(chalk.inverse.red(`Note ${name} not found in records`));
}

const readNote = (name) => {
  console.log(name);
  const notes = loadNotes()
  const desiredNote = notes.find((note) => note.name === name)
  if (!desiredNote) {
    console.log(chalk.inverse.red(`Note ${name} not found in records`));
  } else console.log(chalk.inverse.green(`Note ${name} found in records \nNAME:  ${desiredNote.name} \nTECH.:  ${desiredNote.technology}`))
}

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json')
    notes = JSON.parse(notesBuffer.toString())
    return notes
  } catch (e) {
    return []
  }
}

const saveNote = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote

}

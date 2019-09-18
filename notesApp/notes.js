const fs = require('fs');
const chalk = require('chalk');

const getAllNotes = () => {
  const notes = loadNotes()
  console.log(`${notes.length} notes found`);
  notes.forEach((note) => {
    console.log(`\nNAME : ${note.name} \nTECH.: ${note.technology}`);
  })
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
    return {
      msg: chalk.inverse.blue(`Note ${name} Added successfully`),
      success: true
    }
  } else return {
    msg: chalk.inverse.red(`Name ${name} Already Taken`),
    success: false
  };
}

const removeNote = (name) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => {
    return note.name !== name
  })
  saveNote(notesToKeep)
  if (notes.length > notesToKeep.length) {
    return {
      msg: chalk.inverse.blue(`Note ${name} removed successfully`),
      success: true
    }
  } else return {
    msg: chalk.inverse.red(`Note ${name} not found in records`),
    success: false
  }
}

const readNote = (name) => {
  console.log(name);
  const notes = loadNotes()
  const desiredNote = notes.find((note) => note.name === name)
  if (!desiredNote) {
    return {
      msg: chalk.inverse.red(`Note ${name} not found in records`),
      success: false
    }
  } else return {
    msg: chalk.inverse.green(`Note ${name} found in records \nNAME:  ${desiredNote.name} \nTECH.:  ${desiredNote.technology}`),
    success: true
  }
}

const updateNote = (name, technology) => {
  if (removeNote(name).success) {
    if (addNote(name, technology).success) {
      return {
        msg: chalk.inverse.green(`Note with name ${name} updated`),
        success: true
      }
    }
  } else return {
    msg: chalk.inverse.red(`Note with name ${name} not found`),
    success: false
  }
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
  getAllNotes: getAllNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  updateNote: updateNote
}

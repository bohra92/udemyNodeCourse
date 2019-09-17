const fs = require('fs');
console.log('notes.js')

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
    console.log(notes);
    saveNote(notes)
  } else console.log('Name Already Taken');
}

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json')
    notes = JSON.parse(notesBuffer.toString())
    return notes
  } catch (e) {
    console.log(e);
    return []
  }
}

const saveNote = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}

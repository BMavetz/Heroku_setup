const deleteNote = require('express').Router();

const notes = require('../db/note.json');
const {removeNote} = require('../helpers/fsUtils');

deleteNote.delete('/', (req, res) => {
    console.log('100');
    console.log(req.params.id);
    const noteID = req.params.id;
    for (let i = 0; i < notes.length; i++) {
        const currentNote = notes[i];
        if (currentNote.id === noteId) {
          removeNote(currentNote, notes);
          return;
        }
      }
    // const note = findById(req.params.id, notes);

    //removeNote(note, notes);
    res.json();
});

module.exports = deleteNote;
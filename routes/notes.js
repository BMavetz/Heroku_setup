const noteList = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const { readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid')

noteList.get('/', (req, res) => {
  readFromFile('./db/note.json').then((data) => res.json(JSON.parse(data)))
});

noteList.post('/', (req, res) => {
    console.log(req);
    const { title, text } = req.body;
  
    if (title && text) {
      
      const getNote = {
        title,
        text,
        id: uuid(),

      };
  
      readAndAppend(getNote, './db/note.json');
  
      const response = {
        status: 'success',
        body: getNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting new note');
    }
  });

  const notes = require('../db/note.json');
const {removeNote} = require('../helpers/fsUtils');

noteList.delete('/:id', (req, res) => {
    console.log('100');
    console.log(req.params.id);
    const noteID = req.params.id;
    for (let i = 0; i < notes.length; i++) {
        const currentNote = notes[i];
        if (currentNote.id === noteID) {
          removeNote(currentNote, notes);
          return;
        }
      }
  
    res.json();
});
  
  module.exports = noteList;
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
  
  module.exports = noteList, app;
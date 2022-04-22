const noteList = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const { readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid')

noteList.get('/', (req, res) => {
  readFromFile('./db/note.json').then((data) => res.json(JSON.parse(data)))
});


  
  module.exports = noteList;
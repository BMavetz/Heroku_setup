const express = require('express');

const getNotes = require('./notes');
const delNote = require('./delete')
const app = express();

app.use('/notes', getNotes);
app.use('/notes/:id', delNote);
module.exports = app;
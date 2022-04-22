const express = require('express');

const getNotes = require('./notes');

const app = express();

app.use('/notes', getNotes);

module.exports = app;
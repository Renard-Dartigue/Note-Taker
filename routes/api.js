// require router & store
//  create routes for posting(get) notes and deleting(delete) notes
const express = require('express');

const notesRouter = require('./notes');
//const storeRouter = require('./db/store.js')

const app = express();

app.use('/notes', notesRouter);
app.use('./db/store.js')

module.exports = app;
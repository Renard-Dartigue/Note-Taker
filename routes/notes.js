const notes = require('express').Router();
const store = require('../db/store');
const path = require('path');

notes.get('/notes' , (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

notes.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
});

module.exports = notes;
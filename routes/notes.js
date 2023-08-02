const notes = require('express').Router();
const store = require('../db/store');
const path = require('path');

notes.get('/notes' , (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

module.exports = notes;
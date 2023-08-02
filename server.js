///
const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index.js');

////// Init instance of express ====================================/
const app = express();

const PORT = 3001;

//middleware
app.use(express.json());
app.use('/api', api);
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

// GET route Startpage=========================================================/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});
// GET route Notespage=========================================================/
app.get('/notes' , (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);
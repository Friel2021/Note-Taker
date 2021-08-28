var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

currentID = notes.length

app.get('/api/notes', (req, res) => {
    // Let the client know that their request was received
    res.json(notes);
});

app.post('/api/notes', function (req, res)  {
    // Let the client know that their POST request was received
    var newNote = req.body;































    // Listen

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// Functions
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Set up the database connection
const db = new sqlite3.Database('./chatbot.db');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to get a response from the database
app.post('/chat', (req, res) => {
    const userQuestion = req.body.question.toLowerCase();
    db.get('SELECT response FROM responses WHERE question = ?', [userQuestion], (err, row) => {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        } else {
            if (row) {
                res.send({ response: row.response });
            } else {
                res.send({ response: 'Sorry, I do not understand that question.' });
            }
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
'use strict'

const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, './../build', './../build/index.html'));
    }
});

app.use(express.static(path.join(__dirname, './../build')))

app.use((req, res) => {
    res.status(200).send('This is the backend')
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
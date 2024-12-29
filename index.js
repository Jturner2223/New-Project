console.log('hello world');
// Create
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// Handle
eventEmitter.on('lunch', () => {

    console.log('yum 🍣');

});

// Emit
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

const { hello } = require('./cool.js');

console.log(hello);
// world


// yum 🍣
// yum 🍣


/* big block of text

const { readFile, readFileSync } = require('fs');

// Blocking!
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt)


// Non-blocking
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

// Promise based, also non-blocking
const { readFile } = require('fs').promises;

const txt = await readFile('./hello.txt', 'utf8');  */


// IMPORTANT CODE

const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
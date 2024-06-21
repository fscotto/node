const EventEmitter = require('events');
const { writeFileSync, readFileSync, createReadStream } = require('fs');

// const customEmitter = new EventEmitter();
// customEmitter.on('messaggio', (msg) => console.log(msg));
// customEmitter.emit('messaggio', 'ciao esci?');

// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./filegrande.txt', `riga ${i}\n`, {flag: 'a'});
// }

// const filegrande = readFileSync('./filegrande.txt');
// console.log(filegrande);

const stream = createReadStream('./filegrande.txt');
stream.on('data', (result) => console.log(result));
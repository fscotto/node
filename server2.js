const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Benvenuto sul nostro sito");
    res.end();
});

server.listen(3000);
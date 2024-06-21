const {readFile, writeFile} = require('fs');

const prova = readFile('./prova.txt', 'utf8', (error, result) => {
	if (error) {
		console.log(error);
		return;
	}
	console.log(result);
});

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var stringifyFil = " ";

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    console.log('Wywołano getNote');
    fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		stringifyFile = data
		res.send(data);
	});
});

app.get('/updateNote/:note', function(req, res) {
    console.log('Wywołano updateNote/:note');
	stringifyFile += req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(err) {
		if (err) throw err;
		console.log('file updated');
	});
});

app.listen(3000);



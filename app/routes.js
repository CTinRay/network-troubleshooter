var path = require('path');
var publicFileRoot = path.join(__dirname, './public');

module.exports = function(app) {

	//
	// view -------------------------------------------------------------
	//
	app.get('/', function(req, res) {
		res.sendFile('index.html', { root: publicFileRoot });
	});

	app.get('/en', function(req, res) {
		res.sendFile('en.index.html', { root: publicFileRoot });
	});

	app.get('/test', function(req, res) {
		res.sendFile('test.html', { root: publicFileRoot });
	});


	//
	// api ---------------------------------------------------------------------
	// 
	app.get('/api/todos', function(req, res) {

	});

	app.post('/api/todos', function(req, res) {

	});


	
};

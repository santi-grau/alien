// ┌────────────────────────────────────────────────────────────────────┐
// | Filename: web.js
// └────────────────────────────────────────────────────────────────────┘

// ┌────────────────────────────────────────────────────────────────────┐
// | Require modules
// └────────────────────────────────────────────────────────────────────┘
var express = require("express");
var stylus = require('stylus');
var nib = require('nib');

// ┌────────────────────────────────────────────────────────────────────┐
// | Initialize vars + constants
// └────────────────────────────────────────────────────────────────────┘
var app = express();
var port = Number(process.env.PORT || 5000);

// ┌────────────────────────────────────────────────────────────────────┐
// | App setup
// └────────────────────────────────────────────────────────────────────┘
app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade');
app.use(
	stylus.middleware({
		src: __dirname + '/public',
		compress: true,
		compile: function(str, path) { return stylus(str).set('filename', path).use(nib()); }
	})
);
app.use(express.static(__dirname + '/public'));

// ┌────────────────────────────────────────────────────────────────────┐
// | Routes
// └────────────────────────────────────────────────────────────────────┘
app.get('/', function(req, res){
	res.render('index');
});
app.get('/rainbow', function(req, res){
	res.render('rainbow');
});

// ┌────────────────────────────────────────────────────────────────────┐
// | Init!!
// └────────────────────────────────────────────────────────────────────┘
app.listen(port, function() {
	console.log('\n─────> Listening on port: ' + port);
});
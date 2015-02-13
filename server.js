path = require('path');
var express = require('express');
var bodyParser = require('body-parser');


/**
 * Settings
 */

// JSX compiler
require('node-jsx').install();

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ejs template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



/**
 * Routes
 */

// Require React and the main template
var React = require('react');
var Index = React.createFactory(require('./app/components/Index.jsx'));

app.get('/', function(req, res){
	// Index.jsx need this.props.name value
	var state = 'disable';

	// Render the React component object to string
	var reactHtml = React.renderToString(Index({
		state: state
	}));

	// Loading in the Ejs template
	res.render('index', { 
		reactOutput: reactHtml 
	});
});


// 404 not found
app.get('*', function(req, res) {
	res.json({
		"message": ["404", "page not found"]
	});
});


/**
 * App launch
 */

app.listen(port);
console.log('Server running at : http://localhost:%s', port);

'use strict'

/** @jsx React.DOM */

var React = require('react');
var Index   = React.createFactory(require('./components/Index.jsx'));


React.render(
	new Index({state: 'enable'}),
	document.body
);

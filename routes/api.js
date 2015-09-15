var express = require('express');
var router = express.Router();

function createCon (req, res) {
	var mysql = require('mysql');
	var dbconfig = require('../dbconfig');
	var connection = mysql.createConnection(dbconfig);
	// var that = this;

	connection.connect(function(err) {
		if (err) {res.send("mysql sucks"); }
	});
	return connection;
}

/* POST a post */
router.post('/post', function (req, res, next) {
	if (!(req.body)) {
		res.send({error: "no data posted."});
	}
	
	if (!(req.body.post)) {
		res.send({error: "no post posted."});
	}

	createCon()
	.query('insert into posts (post) values ("?");', req.body.post, function (error, results, fields) {
		if (error) {
			// res.send('mysql sucks again');
			return;
		}
		console.log(results);
		res.send(''+results.insertId);
	});
});

/* GET a post */
router.get('/post/:id', function (req, res, next) {
	createCon(req, res)
	.query('SELECT * FROM posts where id = ?;', req.params['id'], function(error, results, fields) {
		res.send(results);
	});
});

module.exports = router;
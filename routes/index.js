var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
const URLparse      = require('url').parse;

/* GET home page. */
router.get('/', function( req, res) {
  	res.render('index', { warp: process.env.WARP });
});

router.post('/', function( req, res ) {
	console.log(' ---- +++ HEADERS +++ ----');
	console.log( req.headers );
	console.log('---- JSON FILE ---');
	console.log(req.body);
  	res.end();
});

module.exports = router;

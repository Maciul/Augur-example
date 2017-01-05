var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function( req, res) {
  	res.render('index', { warp: process.env.WARP });
});

router.post('/', function( req, res ) {
	console.log(' ---- +++ HEADERS +++ ----');
	console.log( req.headers );
	console.log('---- JSON FILE ---');
	if (req.body.json) {
	console.log(req.body.json);		
	} else {
	console.log('rawBody', (req.rawBody));		
	}
  	res.end();
});

module.exports = router;

var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var colors = require('colors');

/* GET home page. */
router.get('/', function( req, res) {
  	res.render('index', { warp: process.env.WARP });
});

router.post('/', function( req, res ) {
	console.log(' ---- +++ HEADERS +++ ----'.cyan);
	console.log( req.headers );
	console.log('---- JSON FILE ---'.cyan);
	if (req.body.json) {
	console.log(req.body.json);		
	} else {
	var data = JSON.parse(req.rawBody);	
	console.log('Consumer ID: '.magenta, data.consumer.UID);	
	console.log('Device ID: '.magenta, data.device.ID);	
	// console.log('Device ID', JSON.parse(req.rawBody.device));		
	}
  	res.end();
});

module.exports = router;

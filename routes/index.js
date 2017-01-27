var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var colors = require('colors');

// CORS SET UP 

// var cors = require('cors');

// var whitelist = ['http://testing123.augur.io'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
//   }
// };

/* GET home page. */
router.get('/', function( req, res) {
  	res.render('index', { warp: process.env.WARP });
});

router.post('/', function( req, res ) {
	console.log(' ---- +++ HEADERS +++ ----'.cyan);
	console.log( req.headers );
	console.log('---- JSON FILE ---'.cyan);
	console.log(req).cyan;
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

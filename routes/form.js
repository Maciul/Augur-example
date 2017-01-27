var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function( req, res) {
  	res.render('form', { warp: process.env.WARP });
});

router.post('/', function( req, res ) {
	console.log(req); 
	res.end();
});

module.exports = router;
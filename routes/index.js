var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function( req, res, next ) {
  res.render('index', { warp: process.env.WARP });
});

router.post('/', function( req, res, next ) {
  console.log(req.body); 
});



router.get

module.exports = router;

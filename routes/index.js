var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function( req, res, next ) {
  res.render('index', { warp: process.env.WARP });
});

module.exports = router;

/**
 * Created by LocNT on 7/22/2014 1:11 AM.
 */

var express = require('express');
var router = express.Router();
var homeService = require('../services/homeService');

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;

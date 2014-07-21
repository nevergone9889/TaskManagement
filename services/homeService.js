/**
 * Created by LocNT on 7/22/2014 1:09 AM.
 */
var express = require('express');
var router = express.Router();
var db = require('./mongodbService').db();
var accounts = db.collection('accounts');

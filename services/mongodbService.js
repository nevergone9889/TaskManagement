/**
 * Created by LocNT on 7/22/2014.
 */
var Server 		= require('mongodb').Server;
var MongoDB 	= require('mongodb').Db;

var dbPort 		= 27017;
var dbHost 		= 'localhost';
var dbName 		= 'task-management';

/* establish the database connection */

exports.db = function() {
    var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
    db.open(function (e, d) {
        if (e) {
            console.log(e);
        } else {
            console.log('connected to database :: ' + dbName);
        }
    });

    return db;
}
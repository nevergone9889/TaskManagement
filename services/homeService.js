/**
 * Created by LocNT on 7/22/2014 1:09 AM.
 */
var express = require('express');
var moment = require('moment');
var router = express.Router();

var db = require('./mongodbService').db();
var accountsTable = db.collection('accounts');

function Account(/*id,*/fullname,email,username,password,datecreate){
    //this.id = 0;
    this.fullname = "";
    this.email = "";
    this.username = "";
    this.password = "";
    this.datecreate = moment().format('MMMM Do YYYY, h:mm:ss a');

    /*if(id != undefined){
        this.id = id;
    }*/

    if(fullname != undefined){
        this.fullname = fullname;
    }

    if(email != undefined){
        this.email = email;
    }

    if(username != undefined){
        this.username = username;
    }

    if(password != undefined){
        this.password = password;
    }

    if(datecreate != undefined){
        this.datecreate = datecreate;
    }
}

exports.newAccount = function(id,fullname,email,username,lassname){
    return new Account(id,fullname,email,username,lassname,new Date());
};

exports.addNewAccount = function(account,callback){
    accountsTable.findOne({email : account.email},function(error, result){
        if(result){
            callback("email is exist");
        }else{
            accountsTable.findOne({username : account.username},function(error, result){
                if(result){
                    callback("username is exist");
                }else{
                    accountsTable.insert(account, {safe: false}, callback);
                }
            })
        }
    })
};

module.exports = router;
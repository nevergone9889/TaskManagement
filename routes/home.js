/**
 * Created by LocNT on 7/22/2014 1:11 AM.
 */

var express = require('express');
var router = express.Router();
var homeService = require('../services/homeService');

/* GET login listing. */
router.get('/login', function(req, res) {
    res.render('home/login',{title:"Login"});
});

router.get('/register', function(req, res) {
    var account = homeService.newAccount();
    res.render('home/accountEdit',{title:"Register",account:account});
});

router.post('/saveAccount', function(req, res) {
   /* var id = req.param("id");*/
    var id = "0";
    var fullname = req.param("id");
    var email = req.param("email");
    var username = req.param("username");
    var password = req.param("password");
    var account = homeService.newAccount(/*id,*/fullname,email,username,password,undefined);

    if(isNaN(id) || id == "0"){
        //account.id = undefined;
        homeService.addNewAccount(account,function(error){
            if(error){
                res.render('home/accountEdit',{title:"Register",account:account,result:error});
            }else{
                res.render('home/accountEdit',{title:"Register",account:account,result:"success"});
            }
        });
    }
});

module.exports = router;

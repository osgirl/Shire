var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema
var loginSchema = new Schema({
	user: String,
	password: String
});
var loginModel = mongoose.model("login",loginSchema);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});

router.post('/login_user', function(req,res,next){
	//req.session.currentUser = req.body.user;
	var emptyUserAndPassword = req.body.user.length<1 && req.body.password.length<1
	if (!req.session.currentUser && !emptyUserAndPassword){
		loginModel.findOne({user:req.body.user},function(error,users){
			if (users.password===req.body.password){
				req.session.currentUser = req.body.user;
				res.redirect('/');
			}
			else {
				res.send('Incorrect password or username not found');
			}
		})
	}
	else {
		res.send('Invalid inputs');
	}
	//console.log(!req.session.currentUser);
	//res.redirect('/');
	//res.end();
	//res.redirect('/');
	//console.log("hi");
});

router.post('/new_user',function(req,res,next){
	var sufficientCredentials = req.body.secret==="turquoise" && req.body.user!="" && req.body.password!="";
	if (sufficientCredentials){
		var newUser = new loginModel({
			user: req.body.user,
			password: req.body.password
		});
		loginModel.find(function(err,users){
			var hasUserName = false;
			for (index in users){
				if (users[index]["user"]===req.body.user){
					hasUserName = true;
				}
			}

			if (hasUserName){
				res.send("Already has that username");				
			}
			else {
				newUser.save(function(error){
					if (error){
						return handleError(error);
					}
				})
				req.session.currentUser = req.body.user;
				res.redirect("/");
			}
		});
	}
	else {
		res.redirect("/login");
	}
});

router.post('/logout',function(req,res,next){
	req.session.currentUser = false;
	res.redirect('/');
})

module.exports = router;

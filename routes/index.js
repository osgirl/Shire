var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	//req.session.currentUser = true;
  	if (!req.session.currentUser){
		res.render('index',{message:"",
							isLoggedIn:false});
	}
	else {
		res.render('index',{message:"",
							isLoggedIn:true});
	}
});

module.exports = router;

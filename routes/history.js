var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	if (!req.session.currentUser){
		res.render('history',{isLoggedIn:false});
	}
	else {
		res.render('history',{isLoggedIn:true});
	}
});

module.exports = router;

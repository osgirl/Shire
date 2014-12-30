var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	if (!req.session.currentUser){
		res.render('balls',{isLoggedIn:false});
	}
	else {
		res.render('balls',{isLoggedIn:true});
	}
});

module.exports = router;

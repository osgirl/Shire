var express = require('express');
var router = express.Router();
var shirePeople = require('../shire_peeps.json');

/* GET home page. */
router.get('/', function(req, res) {

	//req.session.currentUser = true;
	if (!req.session.currentUser){
		res.redirect('/login');	
	}
	else {
		res.render('people',{title:"people",
						shirePeople:shirePeople});  
	}

});

module.exports = router;
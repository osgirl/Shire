var express = require('express');
var router = express.Router();
var shirePeople = require('../shire_peeps.json');

/* GET home page. */
router.get('/', function(req, res) {
  //console.log(shirePeople);
  res.render('people',{title:"people",
						shirePeople:shirePeople});
  res.end();
});

module.exports = router;

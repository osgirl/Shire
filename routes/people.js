var express = require('express');
var router = express.Router();
var shirePeople = require('../shire_peeps.json');

/* GET home page. */
router.get('/', function(req, res) {
	var randomNumbers = shuffle(shirePeople);
	var shireArray=[];
	var shirePeopleRandomized = {}
	for (i in shirePeople){
		shireArray.push(i);
	}
	for (var j=0;j<randomNumbers.length;j++){
		//console.log(shireArray[randomNumbers[j]]);
		shirePeopleRandomized[shireArray[randomNumbers[j]]]=shirePeople[shireArray[randomNumbers[j]]];
	}
	//req.session.currentUser = true;
	if (!req.session.currentUser){
		res.render('login',{message:"please log in",
							isLoggedIn:false});
	}
	else {
		res.render('people',{title:"people",
            isLoggedIn:true,
						shirePeople:shirePeopleRandomized});
	}
});

function shuffle(shireObject) {
  var length=0;
  for (var key in shireObject){
  	length+=1;
  }
  var array = [];
  for (var j=0;j<length;j++){
  	array.push(j);
  }
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = router;

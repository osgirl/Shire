var express = require('express');
var router = express.Router();
var shirePeople = require('../shire_peeps.json');

/* GET home page. */
router.get('/', function(req, res) {
	var shirePeopleAlphabetized = Object.keys(shirePeople).sort();
  var newShirePeople = {
    "Freshman":{},
    "Sophomore":{},
    "Junior":{},
    "Senior":{}
  }
  for (var i=0;i<shirePeopleAlphabetized.length;i++){
    var shirePerson = shirePeople[shirePeopleAlphabetized[i]];
    var shireYear = shirePerson["Year"];
    var newPerson = {};
    newPerson["Name"]=shirePerson["Name"];
    newPerson["Course Number"]=shirePerson["Course Number"];
    if (!req.session.currentUser){
      newPerson["Kerberos"]="Login to view"
    }
    else {
      newPerson["Kerberos"]=shirePerson["Kerberos"];      
    }
    newPerson["Kerberos"]=shirePerson["Kerberos"];
    newPerson["Bio"]=shirePerson["Bio"];
    if (shireYear==="1"){
      newShirePeople["Freshman"][shirePeopleAlphabetized[i]]=newPerson;
    }
    else if (shireYear==="2"){
      newShirePeople["Sophomore"][shirePeopleAlphabetized[i]]=newPerson;
    }
    else if (shireYear==="3"){
      newShirePeople["Junior"][shirePeopleAlphabetized[i]]=newPerson;
    }
    else {
      newShirePeople["Senior"][shirePeopleAlphabetized[i]]=newPerson;
    }
  }
	//req.session.currentUser = true;
	if (!req.session.currentUser){
		res.render('people',{isLoggedIn:false,
                          shirePeople:newShirePeople});
	}
	else {
		res.render('people',{isLoggedIn:true,
						              shirePeople:newShirePeople});
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

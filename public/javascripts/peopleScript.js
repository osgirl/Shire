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
//console.log(shuffle(shirePeople));
//ideas: these are only my vague thoughts...
//maybe use jquery to create all the story divs
//add classes to hide them so only one at a time gets displayed
//use the buttons to trigger the switching of displays
//oooh and we should do some fade in fade out magic, or maybe animate left to right 
//and right to left

$(document).ready(function(){
	$.getJSON("../history.json",function(historyJSON){
		//you can only acces the historyJSON object inside this getJSON function
		console.log(historyJSON);
	})
})
$(document).ready(function(){
	$.getJSON("../history.json",function(historyJSON){
		console.log(historyJSON);
	})
})
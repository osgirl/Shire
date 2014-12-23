$(document).ready(function(){
	events = [{
		"title": "Christmas Celebration",
		"description": "This was made using javascript ;D",
		"event-where": "my house",
		"event-when": "christmas day",
		"meet-where": "your house",
		"meet-when": "christmas eve"
	},
	{
		"title": "Christmas Celebration2",
		"description": "This was made using javascript ;D",
		"event-where": "my house",
		"event-when": "christmas day",
		"meet-where": "your house",
		"meet-when": "christmas eve"
	}];
	for (var i in events){
		makeEvent(events[i]);
	}
});

function makeEvent(event){
	$("#event-all").append("<div class='event-outer'>"+
							"<h2 class='event-title'>"+event["title"]+"</h2>"+
							"<h4 class='event-description'>"+event["description"]+"</h4>"+
							"<input class='mySubmit' id='event-delete' type='submit' value='Delete'/>"+
							"<div class='event-table-outer'>"+
							"<div class='event-info'>"+
							"<p class='event-where'>Where: "+event["event-where"]+"</p>"+
							"<p class='event-when'>When: "+event["event-when"]+"</p>"+
							"</div>"+
							"<div class='meet-info'>"+
							"<p class='meet-where'>Meeting where: "+event["meet-where"]+"</p>"+
							"<p class='meet-when'>Meeting when: "+event["meet-when"]+"</p>"+
							"</div>"+
							"</div>"+
							"</div>");
}
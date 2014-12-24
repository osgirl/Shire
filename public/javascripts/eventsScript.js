$(document).ready(function(){
	// events = [{
	// 	"title": "Christmas Celebration",
	// 	"description": "This was made using javascript ;D",
	// 	"eventWhere": "my house",
	// 	"eventWhen": "christmas day",
	// 	"meetWhere": "your house",
	// 	"meetWhen": "christmas eve"
	// },
	// {
	// 	"title": "Christmas Celebration2",
	// 	"description": "This was made using javascript ;D",
	// 	"eventWhere": "my house",
	// 	"eventWhen": "christmas day",
	// 	"meetWhere": "your house",
	// 	"meetWhen": "christmas eve"
	// }];
	// for (var i in events){
	// 	makeEvent(events[i]);
	// }

});

function makeEvent(event){
	$("#event-all").append("<div class='event-outer'>"+
							"<h2 class='event-title'>"+event["title"]+"</h2>"+
							"<h4 class='event-description'>"+event["description"]+"</h4>"+
							"<input class='mySubmit' id='event-delete' type='submit' value='Delete'/>"+
							"<div class='event-table-outer'>"+
							"<div class='event-info'>"+
							"<p class='eventWhere'>Where: "+event["eventWhere"]+"</p>"+
							"<p class='eventWhen'>When: "+event["eventWhen"]+"</p>"+
							"</div>"+
							"<div class='meet-info'>"+
							"<p class='meetWhere'>Meeting where: "+event["meetWhere"]+"</p>"+
							"<p class='meetWhen'>Meeting when: "+event["meetWhen"]+"</p>"+
							"</div>"+
							"</div>"+
							"</div>");
}
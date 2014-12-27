$(document).ready(function(){
    $("#add-event-form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="addSuccessful"){
            		window.location.href = "/events";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
	            	$('.userInput').attr("value","");
            	}
            }
        });
    });

    $(".delete-event-form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="deleteSuccessful"){
            		window.location.href = "/events";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
	            	$('.userInput').attr("value","");
            	}
            }
        });
    });
});

$(document).ready(function(){

    $("#add-movies-form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="addSuccessful"){
            		window.location.href = "/movies";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
            	}
            }
        });
    });

    $(".vote-movie-form").on("submit", function(f) {
        f.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="voteSuccessful"){
            		window.location.href = "/movies";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
            	}
            }
        });
    });

    $(".delete-movie-form").on("submit", function(g) {
        g.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="deleteSuccessful"){
            		window.location.href = "/movies";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
            	}
            }
        });
    });
})
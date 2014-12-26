$(document).ready(function(){


    $("#loginForm").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="loginSuccessful"){
            		window.location.href = "/";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
	            	$('.userInput').attr("value","");
            	}
            }
        });
    });

    $("#newUserForm").on("submit", function(f) {
    	console.log("hihi");
        f.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="loginSuccessful"){
            		window.location.href = "/";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
	            	$('.userInput').attr("value","");
            	}
            }
        });
    });

})
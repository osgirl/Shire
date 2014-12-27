$(document).ready(function(){
	$(".photosPicSmall").click(function(){
		$("#overlay").addClass("photosCoverVisible");
		$(this).removeClass("photosPicSmall").addClass("photosPicBig")
	})
	$("#overlay").on("click",function(){
		$(this).removeClass("photosCoverVisible");
		$(".photosPicBig").removeClass("photosPicBig").addClass("photosPicSmall");
	})

	$(".delete-photo-form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
            	if (message==="deleteSuccessful"){
            		window.location.href = "/photos";
            	}
            	else{
	            	$('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
            	}
            }
        });
    });
})
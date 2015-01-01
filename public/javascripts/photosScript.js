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
    $("#urlAdd").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
                if (message==="addSuccessful"){
                    window.location.href = "/photos";
                }
                else{
                    $('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
                }
            }
        });
    });
    $("#fileAdd").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {
            },
            success: function(message) {
                if (message==="addSuccessful"){
                    window.location.href = "/photos";
                }
                else{
                    $('body').append("<div id='loginMessage'><p>"+message+"</p></div>")
                }
            }
        });
    });
})

function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) 
        {
            var textAreaFileContents = document.getElementById
            (
                "textAreaFileContents"
            );
    
            textAreaFileContents.innerHTML = fileLoadedEvent.target.result;
        };

        fileReader.readAsDataURL(fileToLoad);
    }
}
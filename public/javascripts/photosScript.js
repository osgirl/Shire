$(document).ready(function(){
    $('#mygallery').justifiedGallery({
        lastRow : 'nojustify', 
        rowHeight : 150, 
        rel : 'gallery1', //replace with 'gallery1' the rel attribute of each link
        margins : 1
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth : '80%',
            maxHeight : '80%',
            opacity : 0.8,
            transition : 'elastic',
            current : ''
        });
    });
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
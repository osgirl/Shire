

$(document).ready(function(){
	$.getJSON("../history.json",function(historyJSON){
		trackArray = ['active']
		for (var j=0;j<Object.keys(historyJSON).length-1;j++){
			trackArray.push('inactive');
		}

		for (historyPage in historyJSON){
			if (historyPage.substring(historyPage.length-1)==="0"){
				$('#toAddHistory').append("<div class='history-pic-container track"+historyPage.substring(historyPage.length-1)+"'>"+
								"<div class='history-words-container'>"+
								"<p class='history-words'>"+
								historyJSON[historyPage]+
								"</p>"+
								"</div>"+
								"<div class='page-nav'>"+
								"<a href='#' class='previous-story'><i class='fa fa-chevron-left'></i></a>"+
								"<ul class='slider-dots'>"+
								getSliderDots(historyPage,historyJSON)+
								"</ul>"+
								"<a href='#' class='next-story'><i class='fa fa-chevron-right'></i></a>"+
								"</div>"+
								"</div>");
			}
			else {
				$('#toAddHistory').append("<div class='history-hide track"+historyPage.substring(historyPage.length-1)+"'>"+
								"<div class='history-words-container'>"+
								"<p class='history-words'>"+
								historyJSON[historyPage]+
								"</p>"+
								"</div>"+
								"<div class='page-nav'>"+
								"<a href='#' class='previous-story'><i class='fa fa-chevron-left'></i></a>"+
								"<ul class='slider-dots'>"+
								getSliderDots(historyPage,historyJSON)+
								"</ul>"+
								"<a href='#' class='next-story'><i class='fa fa-chevron-right'></i></a>"+
								"</div>"+
								"</div>");
			}
		}

		$('.next-story').on('click',function(){
			var currentIndex = trackArray.indexOf('active');
			var whichKey = 'track' + trackArray.indexOf('active');
			if (currentIndex===trackArray.length-1){
				var nextIndex=0;
			}
			else {
				var nextIndex = currentIndex+1;
			}
			var nextKey = 'track' + nextIndex;
			trackArray[currentIndex] = 'inactive';
			trackArray[nextIndex] = 'active';
			$('.'+whichKey).removeClass('history-pic-container').addClass('history-hide');
			$('.'+nextKey).removeClass('history-hide').addClass('history-pic-container');				
		});

		$('.previous-story').on('click',function(){
			var currentIndex = trackArray.indexOf('active');
			var whichKey = 'track' + trackArray.indexOf('active');
			if (currentIndex===0){
				var previousIndex = trackArray.length-1;
			}
			else {
				var previousIndex = currentIndex-1;
			}
			var previousKey = 'track' + previousIndex;
			trackArray[currentIndex] = 'inactive';
			trackArray[previousIndex] = 'active';
			$('.'+whichKey).removeClass('history-pic-container').addClass('history-hide');
			$('.'+previousKey).removeClass('history-hide').addClass('history-pic-container');			
		});
	})
})

function getSliderDots(historyPage,historyJSON){
	var addHistoryString = "";
	for (var i=0;i<Object.keys(historyJSON).length;i++){
		if (i.toString()===historyPage.substring(historyPage.length-1)){
			addHistoryString += "<li class='dot active-dot'>&bull;</li>"
		}
		else {
			addHistoryString += "<li class='dot'>&bull;</li>"
		}
	}
	return addHistoryString
}
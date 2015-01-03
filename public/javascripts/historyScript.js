

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
			var nextIndex = currentIndex+1;
			var whichKey = 'track' + trackArray.indexOf('active');
			var nextKey = 'track' + nextIndex;
			if (nextIndex<trackArray.length){
				trackArray[currentIndex] = 'inactive';
				trackArray[nextIndex] = 'active';
				$('.'+whichKey).removeClass('history-pic-container').addClass('history-hide');
				$('.'+nextKey).removeClass('history-hide').addClass('history-pic-container');				
			}
		});

		$('.previous-story').on('click',function(){
			var currentIndex = trackArray.indexOf('active');
			var previousIndex = currentIndex-1;
			var whichKey = 'track' + trackArray.indexOf('active');
			var previousKey = 'track' + previousIndex;
			if (currentIndex>0){
				trackArray[currentIndex] = 'inactive';
				trackArray[previousIndex] = 'active';
				$('.'+whichKey).removeClass('history-pic-container').addClass('history-hide');
				$('.'+previousKey).removeClass('history-hide').addClass('history-pic-container');
			}
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
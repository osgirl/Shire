/*$(document).ready(function(){
	$('#shirePic2').hide();
	$('img').click(function(){
		$('#shirePic2').fadeIn('slow');
	})
})

$(document).ready(function(){
	$('#shirePic2').hide();
	$('img').click(function(){
		$('#shirePic2').effect('explode',1000);
	})
})
*/

$(document).ready(function(){
	$(".dropdown").hover(function(){
		$(".dropdown-menu").css({"display":"inline-block"});
	},
	function(){
		$(".dropdown-menu").css({"display":"none"});
	})
	//$('#dropdownRAYRAY').hover()
	$(window).scroll(function(){
		if ($(window).scrollTop()>150){
			$(".navbar").css({"box-shadow":"0px 0px 10px"});
			$(".navbar").css({"background-color":"rgb(152,230,172,1)"});
		}
		else if ($(window).scrollTop()>=100 && $(window).scrollTop()<=150){
			scrollDifference = $(window).scrollTop()-100;
			$(".navbar").css({"box-shadow":"0px 0px "+scrollDifference/5.0+"px"});
			$(".navbar").css({"background-color":"rgb(152,230,172,"+scrollDifference/50.0+")"});
		}
		else {
			$(".navbar").css({"box-shadow":"0px 0px 0px"});
			$(".navbar").css({"background-color":"transparent"});
		}
	})
	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop());
	// })
})

function shuffle(shireObject) {
  var length=0;
  for (var key in shireObject){
  	length+=1;
  }
  var array = [];
  for (var j=0;j<length;j++){
  	array.push(j);
  }
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//		$(".dropbdown-menu").css({"display":"inline-block"});
    // <% var shireArray = shuffle(shirePeople.length)%>
    // <% for (var name in shirePeople[shireArray]){ %>
    //   <tr>
    //     <td><div><img class="peeps" src="./images/shire_people/<%=name%>.jpg"></div></td>
    //     <% for (var category in shirePeople[name]) {%>
    //     <td><%= shirePeople[name][category] %></td>
    //     <% } %>
    //   </tr>
    // <% } %>
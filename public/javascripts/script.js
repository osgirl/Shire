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
	$(".backofnav").hide();
	$(window).scroll(function(){
		if ($(window).scrollTop()>15){
			$(".backofnav").fadeIn(300);
		// 	$(".navbar").css({"box-shadow":"0px 0px 10px"});
		// 	$(".navbar").css({"background-color":"rgb(152,230,172,1)"});
		}
		// else if ($(window).scrollTop()>=100 && $(window).scrollTop()<=150){
		// 	scrollDifference = $(window).scrollTop()-100;
		// 	$(".navbar").css({"box-shadow":"0px 0px "+scrollDifference/5.0+"px"});
		// 	$(".navbar").css({"background-color":"rgb(152,230,172,"+scrollDifference/50.0+")"});
		// }
		else {
			$(".backofnav").fadeOut(300);
		// 	$(".navbar").css({"box-shadow":"0px 0px 0px"});
		// 	$(".navbar").css({"background-color":"transparent"});
		}
	});
	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop());
	// })
});


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
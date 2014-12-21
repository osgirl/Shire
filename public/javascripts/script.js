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
$('body').click(function(){
	console.log("jfsdkjfksdj")
})

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

//		$(".dropbdown-menu").css({"display":"inline-block"});

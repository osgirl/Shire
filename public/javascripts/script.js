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
		if ($(window).scrollTop()>110){
			$(".navbar").css({"box-shadow":"0px 0px 10px"});
		}
		else {
			$(".navbar").css({"box-shadow":"0px 0px 0px"});
		}
		if ($(window).scrollTop()>110){
			$(".navbar").css({"background-color":"#98E6AC"});
		}
		else {
			$(".navbar").css({"background-color":"transparent"});
		}
	})
	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop());
	// })
})

//		$(".dropbdown-menu").css({"display":"inline-block"});

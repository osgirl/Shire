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
		if ($(window).scrollTop()>0){
			$(".navbar").css({"box-shadow":"0px 0px 5px"});
		}
		else {
			$(".navbar").css({"box-shadow":"0px 0px 0px"});
		}
	})
})

//		$(".dropbdown-menu").css({"display":"inline-block"});

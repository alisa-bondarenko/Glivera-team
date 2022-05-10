$(document).ready(function(){

	$('.header_infoCloseButton').click(function(e){
		e.preventDefault();
		$('.header_infoClose').slideToggle();
	});

	$('.menuButton').click(function(e){
		e.preventDefault();
		$('.menuCase').slideToggle();
	});

	
		$('.subButton').click(function(e){
			e.preventDefault();
			$(this).parent().next().slideToggle();
			$(this).toggleClass('subButtonActive');
		});
	
	// w=$(window).width();
	// if(w>1023){
	// 	$('.subButton').click(function(e){
	// 		e.preventDefault();
	// 		$(this).parent().next().slideToggle();
	// 		$(this).toggleClass('subButtonActive');
	// 	});
	// }

	$(window).resize(function(){var ww=$(window).width();
		if(ww>1023){
			$('.menuCase').show();
		}
		else{
			$('.menuCase').hide();
		}
	});

});

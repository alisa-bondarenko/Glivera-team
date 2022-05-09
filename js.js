$(document).ready(function(){

	$('.header_infoCloseButton').click(function(e){
		e.preventDefault();
		$('.header_infoClose').slideToggle();
	});

	$('.menuButton').click(function(e){
		e.preventDefault();
		$('.menuCase').slideToggle();
	});

	$(window).resize(function(){var ww=$(window).width();
		if(ww>1023){
			$('.menuCase').show();
		}
		else{
			$('.menuCase').hide();
		}
	});

});

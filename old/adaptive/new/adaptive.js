$(document).ready(function(){
	/* ↓ RESIZE ↓ */
	function body_type(initial){
		if($('.container').width() == 1000){
			$('.body').removeClass('mobile').addClass('monitor');
			$('#menu_btn').removeClass('opened').siblings('ul').show();
			$('#menu_lft_btn').removeClass('opened').siblings('.lft').show();
		}
		
		if($('.container').width() == 320){
			$('.body').removeClass('monitor').addClass('mobile');
			$('#menu_btn').removeClass('opened').siblings('ul').hide();
			$('#menu_lft_btn').removeClass('opened').siblings('.lft').hide();
		}
	}
	
	body_type(true);
	$(window).resize(body_type);
	/* ↑ RESIZE ↑ */
	
	if($('.body').hasClass('mobile')){
		/* ↓ MENU ↓ */
		$('#menu_btn').click(function(){
			if($(this).hasClass('opened')){
				$(this).removeClass('opened').siblings('ul').slideUp(300);
			}else{
				$(this).addClass('opened').siblings('ul').slideDown(300);
			}
		});
		/* ↑ MENU ↑ */
		
		$('#menu_lft_btn').click(function(){
			if($(this).hasClass('opened')){
				$(this).removeClass('opened').siblings('.lft').slideUp(500);
			}else{
				$(this).addClass('opened').siblings('.lft').slideDown(500);
			}
		});
	}
});
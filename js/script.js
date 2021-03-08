$(document).ready(function(){
	// ↓ Удалить ↓
	$('.top_line .login_btns_wrp .links_wrp a').click(function(event){
		event.preventDefault();
		$(this).parent().addClass('hidden').siblings().removeClass('hidden');
	});
	
	$('.promocode_wrp .btn_style').click(function(){
		$(this).siblings('.done').fadeIn(300);//.delay(2000).fadeOut(300);
	});
	
	$('.articul_request_form_wrp').find('.btn_style').click(function(){
		$(this).closest('.fields_wrp').slideUp(300).siblings('.done').slideDown(300);
	});
	// ↑ Удалить ↑
	
	/* ↓ REGISTRATION ↓ */
	$('.click_btn').click(function(){
		$(this).closest('.personal_form_wrp').slideUp(300).siblings('.personal_form_done').slideDown(300);
	});
	/* ↑ REGISTRATION ↑ */
	
	/* ↓ RESIZE ↓ *
	function body_type(initial){
		if($('.container').width() == 1140){
			$('.body').removeClass('mobile').addClass('monitor');
			$('#adaptiv_menu_btn').removeClass('opened').hide().siblings('ul.menu_top_list').css({'margin-right':0});
						
			var get_docs_popup_width = $('#get_docs_popup').outerWidth();
			var window_position = $(window).scrollTop();
			$('#get_docs_popup').css({'margin-left':'-'+get_docs_popup_width/2+'px','top':(window_position+50)+'px'});
		}
		
		if($('.container').width() == 300){
			$('.body').removeClass('monitor').addClass('mobile');
			$('#adaptiv_menu_btn').removeClass('opened').show().siblings('ul.menu_top_list').css({'margin-right':0});
			
			var get_docs_popup_width = $('#get_docs_popup').outerWidth();
			var window_position = $(window).scrollTop();
			$('#get_docs_popup').css({'margin-left':'-'+get_docs_popup_width/2+'px','top':(window_position+50)+'px'});
		}
	}
	
	body_type(true);
	$(window).resize(body_type);
	/* ↑ RESIZE ↑ */
	
	/* ↓ SHADES_VERTICAL_SLIDER ↓ */
	$('.shades_list_slider').bxSlider({
		mode: 'vertical',
		slideWidth: 115,
		minSlides: 3,
		moveSlides: 2,
		slideMargin: 35,
		speed: 50,
		pager: false,
		infiniteLoop: false,
	});
	
	$('.interior_wrapper .shades_wrp ul.shades_list_slider .color_wrp').click(function(){
		var selected_color = $(this).css('background-color');
		console.log('click - '+selected_color);
		$(this).closest('li').addClass('selected_color').siblings().removeClass('selected_color');
		$('.interior_wrapper .inperior_view_wrp .interior_image').css({'background-color':selected_color})
	});
	$('.interior_wrapper .shades_wrp ul.shades_list_slider > li:first-child .color_wrp').click();
	
	$('.interior_wrapper .inperior_view_wrp ul.interiors_view_list > li').click(function(){
		var image_index = $(this).index();
		$(this).addClass('selected').siblings().removeClass('selected').parent().siblings('.interior_image').find('.interior_img').eq(image_index).addClass('selected').siblings().removeClass('selected');
	});
	$('.interior_wrapper .inperior_view_wrp ul.interiors_view_list > li:first-child').click();
	/* ↑ SHADES_VERTICAL_SLIDER ↑ */
	
	/* ↓ LEFT_MENU_FILTER_CATALOG ↓ */
	$('.wrapper_catalog_filter ul.left_menu_filter_list .open_filter_btn').click(function(){
		var parent_li = $(this).parent();
		
		if(parent_li.hasClass('opened')){
			$(this).siblings('ul.menu_filter_links_list,ul.left_menu_filter_country_list').stop().slideUp(300).parent().removeClass('opened');
		}else{
			$(this).siblings('ul.menu_filter_links_list,ul.left_menu_filter_country_list').stop().slideDown(300).parent().addClass('opened');
		}
	});
	
	$('.wrapper_catalog_filter ul.left_menu_filter_list ul.menu_filter_links_list .open_categories_btn').click(function(){
		var parent_li = $(this).parent();
		
		if(parent_li.hasClass('opened')){
			console.log('close');
			parent_li.removeClass('opened').find('ul.menu_filter_categories_list').stop().slideUp(300);;
		}else{
			console.log('open');
			parent_li.addClass('opened').find('ul.menu_filter_categories_list').stop().slideDown(300);
		}
	});
	$('.wrapper_catalog_filter ul.left_menu_filter_list ul.left_menu_filter_country_list .open_country_btn').click(function(){
		var parent_li = $(this).parent();
		
		if(parent_li.hasClass('opened')){
			console.log('close');
			parent_li.removeClass('opened').find('ul.menu_filter_links_list').stop().slideUp(300);;
		}else{
			console.log('open');
			parent_li.addClass('opened').find('ul.menu_filter_links_list').stop().slideDown(300);
		}
	});
	/* ↑ LEFT_MENU_FILTER_CATALOG ↑ */
	
	/* ↓ DETAIL_TABS ↓ */
	$('.detail_wrp .info_wrp .item_tabs_wrp ul.item_tabs_list li').click(function(){
		var tab_index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active').parent().siblings('ul.item_tabs_content_list').children().eq(tab_index).slideDown(300).siblings().slideUp(300);
	});
	/* ↑ DETAIL_TABS ↑ */
	
	/* ↓ MENU_GREEN ↓ */
	$('.menu_green ul.menu_green_list li').mouseover(function(){
		var li_pos_left = $(this).position().left;
		var li_width = $(this).outerWidth();
		//console.log('pos left = '+li_pos_left+'px;\nwidth = '+li_width+'px;');
		$(this).closest('ul.menu_green_list').siblings('.menu_green_hover_bg').css({'left':(li_pos_left+(li_width/2)),'margin-left':'-'+(li_width/2)+'px','width':li_width,'opacity':1});
	}).mouseleave(function(){
		$(this).closest('ul.menu_green_list').siblings('.menu_green_hover_bg').css({'opacity':0});
	});
	/* ↑ MENU_GREEN ↑ */
	
	// ↓ POPUP ↓
	$('.popup_click').click(function(event){
		event.preventDefault();
		var body_width = $('body').outerWidth();
		$('body').addClass('overflow_hide').css({'width':body_width});
		$('.popup_wrp').fadeIn(300).addClass('overflow_scroll');
		$('#scroll_up_btn, #scroll_down_btn').hide();
	});
	$('.closing_click').click(function(event){
		var block_object = $(event.target);
		if(block_object.hasClass('closing_click')){
			$('.popup_wrp').fadeOut(500).removeClass('overflow_scroll').find('.popup').fadeOut(300);
			$('body').removeClass('overflow_hide').css({'width':'auto'});
			$('#scroll_up_btn, #scroll_down_btn').show();
		}
	});
	$('#room_space_btn').click(function(){$('#room_space_calculate_wrp').fadeIn(500);});
	$('#city_change_btn').click(function(){$('#city_change_wrp').fadeIn(500);});
	// ↑ POPUP ↑
	
	/* ↓ ADD_WINDOW_DOOR ↓ */
	$('#add_window_btn').click(function(){
		$(this).closest('.text_wrp').siblings('ul.window_wrp').find('li:first-child').clone(true).appendTo('ul.window_wrp');
	});
	$('#add_door_btn').click(function(){
		$(this).closest('.text_wrp').siblings('ul.door_wrp').find('li:first-child').clone(true).appendTo('ul.door_wrp');
	});
	$('#room_space_calculate_wrp .delete_element').click(function(){
		$(this).closest('li').remove();
	});
	/* ↑ ADD_WINDOW_DOOR ↑ */
	
	// ↓ TABS ↓
	$('ul.tabs_list li').click(function(){
		var index_li = $(this).index();
		$(this).addClass('active').siblings().removeClass('active').closest('ul.tabs_list').siblings('ul.tabs_content_list').find('li').eq(index_li).slideDown(300).siblings().slideUp(300);
	});
	$('ul.tabs_list li:first-child').click();
	// ↑ TABS ↑
	
	// ↓ SELECT_STYLE ↓
	$('select.input_style,select.filter_select').styler();
	// ↑ SELECT_STYLE ↑
		
	/* ↓ PHONE_NUMBER_INPUT_MASK ↓ */
	$(".phone_number_input").mask("+7 (999) 999-99-99");
	/* ↑ PHONE_NUMBER_INPUT_MASK ↑ */
	
	/* ↓ SCROLL_LINK ↓ */
	$('a.scroll_link').click(function(event){
		event.preventDefault();
		
		var object_name = $(this).attr('href').replace('#', '');
			$scroll_object = $('a[name="' + object_name + '"]');
		
		if($scroll_object.length){
			$('html, body').animate({
				scrollTop: $scroll_object.offset().top
			}, 600);
		}
	});
	/* ↑ SCROLL_LINK ↑ */
	
	/* ↓ SCROLL_UP_BTN ↓ *
	$('#scroll_up_btn').click(function(){
		$('html, body').animate({
			 scrollTop: 0
		}, 500);
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop() >= 500){
			$('#scroll_up_btn').stop().animate({'marginRight': 0}, 300);
		}else{
			$('#scroll_up_btn').stop().animate({'marginRight': -100}, 300);
		}
	});
	/* ↑ SCROLL_UP_BTN ↑ */
	
	/* ↓ SCROLL_UP_BTN ↓ */
	$('#scroll_up_btn').click(function(){
		var win_pos = $(window).scrollTop();
		$('#scroll_down_btn').attr('data-win-pos', win_pos).css({'z-index':10});
		$('html, body').animate({
			 scrollTop: 0
		}, 300);
	});
	
	$('#scroll_down_btn').click(function(){
		var last_win_pos = $(this).attr('data-win-pos');
		$(this).css({'z-index':-1});
		$('#scroll_up_btn').css({'z-index':10});
		$('html, body').animate({
			 scrollTop: last_win_pos
		}, 300);
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop() >= 500){
			$('#scroll_up_btn').stop().css({'z-index':11});
		}else{
			$('#scroll_up_btn').stop().css({'z-index':-1});
		}
	});
	/* ↑ SCROLL_UP_BTN ↑ */
	
	/* ↓ CAROUSELS ↓ */
	$('#top_sell_carousel').owlCarousel({
		items : 4,
		singleItem : false,
		navigation : true,
		slideSpeed : 600,
		pagination : false,
		autoPlay : false,
		scrollPerPage : true,
		rewindNav : false,
	});
	$('#new_items_carousel').owlCarousel({
		items : 4,
		singleItem : false,
		navigation : true,
		slideSpeed : 600,
		pagination : false,
		autoPlay : false,
		scrollPerPage : true,
		rewindNav : false,
	});
	$('#discounts_carousel').owlCarousel({
		items : 4,
		singleItem : false,
		navigation : true,
		slideSpeed : 600,
		pagination : false,
		autoPlay : false,
		scrollPerPage : true,
		rewindNav : false,
	});
	$('#other_colors_carousel').owlCarousel({
		items : 3,
		singleItem : false,
		navigation : true,
		slideSpeed : 600,
		pagination : false,
		autoPlay : false,
		scrollPerPage : true,
		rewindNav : false,
	});
	/* ↑ CAROUSELS ↑ */
	
	// ↓ SLIDER_MAIN ↓
		var time = 5; // time in seconds

		var $progressBar,
			$bar, 
			$elem, 
			isPause, 
			tick,
			percentTime;
		  
		$("#slider_main").owlCarousel({
			singleItem : true,
			navigation : true,
			afterInit : progressBar,
			afterMove : moved,
			startDragging : pauseOnDragging,
			slideSpeed : 600,
			pagination : false,
		});
		
			//Init progressBar where elem is $("#owl-demo")
		function progressBar(elem){
		  $elem = elem;
		  //build progress bar elements
		  buildProgressBar();
		  //start counting
		  start();
		}
	 
		//create div#progressBar and div#bar then prepend to $("#owl-demo")
		function buildProgressBar(){
		  $progressBar = $("<div>",{
			id:"slider_main_progressBar"
		  });
		  $bar = $("<div>",{
			id:"slider_main_bar"
		  });
		  $progressBar.append($bar).appendTo($elem);
		}
	 
		function start() {
		  //reset timer
		  percentTime = 0;
		  isPause = false;
		  //run interval every 0.001 second
		  tick = setInterval(interval, 10);
		};
	 
		function interval() {
		  if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		  }
		}
	 
		//pause while dragging 
		function pauseOnDragging(){
		  isPause = true;
		}
	 
		//moved callback
		function moved(){
		  //clear interval
		  clearTimeout(tick);
		  //start again
		  start();
		}
	 
		//uncomment this to make pause on mouseover 
		$elem.on('mouseover',function(){
		   isPause = true;
		});
		
		$elem.on('mouseout',function(){
		   isPause = false;
		});
	// ↑ SLIDER_MAIN ↑
});
$(window).load(function(){
	/* ↓ DETAIL_IMAGE_HEIGHT ↓ */
	var info_block_height = $('.detail_wrp .main_info_wrp .info_wrp').outerHeight();
	$('.detail_wrp .main_info_wrp .wallpaper_image_wrp').css({'height':info_block_height});
	/* ↑ DETAIL_IMAGE_HEIGHT ↑ */
});
	
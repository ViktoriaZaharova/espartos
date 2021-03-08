$(document).ready(function(){
	/* ↓ MENU ↓ */
	$('#mobile_menu_btn').click(function(){
		var menu_height = $(this).siblings('.menu_list').outerHeight();
		if($(this).hasClass('opened')){
			$(this).removeClass('opened').siblings('.menu_list').removeClass('opened');
			$('body').css({'min-height':0});
			$('html, body').animate({scrollTop:0},0);
		}else{
			$(this).addClass('opened').siblings('.menu_list').addClass('opened');
			$('body').css({'min-height':menu_height});
		}
	});
	/*
	$('.menu_wrp').find('.dropdown_btn').click(function(){
		var parent_menu_item = $(this).parent('.dropdown_wrp');
		if(parent_menu_item.hasClass('opened')){
			parent_menu_item.removeClass('opened');
		}else{
			parent_menu_item.addClass('opened');
		}
	});
	*/
	/* ↑ MENU ↑ */
	
	/* ↓ CITIES ↓ */
	$('.cities_open_btn').click(function(event){
		event.preventDefault();
		var body_height = $('body').outerHeight();
		$('.mobile_cities_wrp').addClass('opened').css({'height':body_height-64});
	});
	$('.return_back_btn').click(function(event){
		event.preventDefault();
		$('.mobile_cities_wrp').removeClass('opened');
	});
	$('#mobile_menu_btn').click(function(){
		var $cities_wrp = $('.mobile_cities_wrp');
		if($cities_wrp.hasClass('opened')){
			$cities_wrp.removeClass('opened');
		}
	});
	/* ↑ CITIES ↑ */
	
	/* ↓ SEARCH ↓ */
	$('.mobile_search_btn').click(function(event){
		event.preventDefault();
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$('.mobile_search_wrp').slideUp(300);
		}else{
			$(this).addClass('opened');
			$('.mobile_search_wrp').slideDown(300);
		}
	});
	/* ↑ SEARCH ↑ */
	
	/* ↓ PROMOCODE ↓ */
	$('.enter_promocode_btn').click(function(event){
		event.preventDefault();
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$('.basket_promocode_wrp').slideUp(300);
		}else{
			$(this).addClass('opened');
			$('.basket_promocode_wrp').slideDown(300);
		}
	});
	/* ↑ PROMOCODE ↑ */
	
	/* ↓ FILTER ↓ */
	$('.mobile_filter_btn').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened').closest('.mobile_filter_catalog_wrp').find('.mobile_filter_list_wrp').slideUp(100);
		}else{
			$(this).addClass('opened').closest('.mobile_filter_catalog_wrp').find('.mobile_filter_list_wrp').slideDown(100);
		}
	});
	$('.mobile_sort_btn').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened').closest('.mobile_filter_catalog_wrp').find('.mobile_sort_list_wrp').slideUp(100);
		}else{
			$(this).addClass('opened').closest('.mobile_filter_catalog_wrp').find('.mobile_sort_list_wrp').slideDown(100);
		}
	});
	$('.sale_sort_btn_wrp').find('.sale_sort_link').click(function(event){
		event.preventDefault();
		var $parent_wrp_block = $(this).closest('.sale_sort_btn_wrp');
		if($parent_wrp_block.hasClass('active')){
			$parent_wrp_block.removeClass('active').find('.sale_sort_filter_list').slideUp(100);
		}else{
			$parent_wrp_block.addClass('active').find('.sale_sort_filter_list').slideDown(100);
		}
	});
	$('.sale_sort_filter_list').children().click(function(){
		$(this).toggleClass('opened').find('.sale_sort_filter_category_list').slideToggle(100);
	}).find('.dropdown_item').click(function(event){
		event.preventDefault();
		var $dropdown_item_index = $(this).closest('li').index();
		var $dropdown_item_text = $(this).text();
		var $caption_info_selected_item = $(this).closest('.sale_sort_filter_category_list').siblings('.caption_wrp').find('.selected_info_wrp');
		if($dropdown_item_index == 0){
			$caption_info_selected_item.text('').hide();
		}else{
			$caption_info_selected_item.text(': '+$dropdown_item_text).show();
		}
	});
	$('.mobile_filter_list').find('.filter_category_open_btn:not(.country_open_btn)').click(function(){
		var $parent_li = $(this).closest('li');
		if($parent_li.hasClass('opened')){
			$parent_li.removeClass('opened').find('.filter_category_list').slideUp(100);
		}else{
			$parent_li.addClass('opened').find('.filter_category_list').slideDown(100);
		}
	});
	$('.mobile_filter_list').find('.filter_category_open_btn.country_open_btn').click(function(){
		var $parent_li = $(this).closest('li');
		if($parent_li.hasClass('opened')){
			$parent_li.removeClass('opened').find('.filter_countries_list').slideUp(100);
		}else{
			$parent_li.addClass('opened').find('.filter_countries_list').slideDown(100);
		}
	});
	$('.filter_category_list').find('.filter_category_list_link').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active');
	});
	$('.mobile_filter_list').children('.mobile_filter_list_item').find('.show_all_btn').click(function(){
		$(this).closest('.mobile_filter_list_item').removeClass('items_hidden').addClass('items_showed');
	}).siblings('.hide_all_btn').click(function(){
		$(this).closest('.mobile_filter_list_item').addClass('items_hidden').removeClass('items_showed');
	});
	$('.filter_countries_list').find('.country_name_wrp').click(function(){
		var $parent_li = $(this).closest('li');
		if($parent_li.hasClass('country_opened')){
			$parent_li.removeClass('country_opened').find('.manufacturer_name_list').slideUp(100);
		}else{
			$parent_li.addClass('country_opened').find('.manufacturer_name_list').slideDown(100);
		}
	});
	$('.manufacturer_name_list').find('.manufacturer_list_btn').click(function(){
		var $parent_li = $(this).closest('.mobile_filter_list_item');
		if($parent_li.hasClass('manufacturer_opened')){
			$parent_li.removeClass('manufacturer_opened').find('.manufacturer_list').slideUp(100);
		}else{
			$parent_li.addClass('manufacturer_opened').find('.manufacturer_list').slideDown(100);
		}
	});
	/* ↑ FILTER ↑ */
	
	/* ↓ DETAIL_TABS ↓ */
	$('.detail_info_tabs_list').find('.tab_btn').click(function(){
		var $tab_index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active').closest('.detail_info_tabs_list').siblings('.detail_info_tabs_content_list').children().eq($tab_index).fadeIn(300).addClass('active').siblings().hide().removeClass('active');
	});
	/* ↑ DETAIL_TABS ↑ */
	
	/* ↓  ↓ */
	$('.more_colors_slider').owlCarousel({
		items: 5,
		slideBy: 4,
		margin: 5,
		nav: true,
		navText: ["пред.","след."],
		dots: false,
		responsive: {
			0: {
				items: 3,
				slideBy: 2,
			},
			400: {
				items: 4,
				slideBy: 3,
			},
			500: {
				items: 5,
				slideBy: 4,
			},
		},
	});
	/* ↑  ↑ */
	
	/* ↓ POPUP ↓ *
	$('.popup_click').click(function(event){
		event.preventDefault();
		var body_width = $('body').outerWidth();
		$(this).addClass('popup_opened');
		$('body').addClass('overflow_hide').css({'width':body_width});
		$('.popup_wrp').delay(200).fadeIn(300).addClass('overflow_scroll');
		$('#scroll_up_btn, #scroll_down_btn').hide();
	});
	$('.closing_click').click(function(event){
		var block_object = $(event.target);
		if(block_object.hasClass('closing_click')){
			$('.popup_click').removeClass('popup_opened');
			$('.popup_wrp').fadeOut(500).removeClass('overflow_scroll').find('.popup').fadeOut(300);
			$('body').removeClass('overflow_hide').css({'width':'auto'});
			$('#scroll_up_btn, #scroll_down_btn').show();
		}
	});
	$('.zayavka_btn').click(function(){$('#zayavka_wrp').delay(200).fadeIn(500);});
	/* ↑ POPUP ↑ */
	
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
});
$(window).load(function(){
	
});
	
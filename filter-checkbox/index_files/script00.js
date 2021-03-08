function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
			
			if (cookie.substring(0, name.length + 1) == (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

function setCookie(name, value, options){
	options = options || {};

	var expires = options.expires;

	if (typeof expires == "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires*1000);
		expires = options.expires = d;
	}
	
	if (expires && expires.toUTCString) { 
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;
	options.domain = '.espartos.ru';//window.location.hostname;
	options.path = '/';

	for(var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

function deleteCookie(name) {
	setCookie(name, "", { expires: -1 });
}

function ya_goal(goal_name, visit_params){
	if(typeof yaCounter26260449 !== 'undefined'){
		if(typeof visit_params !== 'undefined'){
			yaCounter26260449.reachGoal(goal_name, visit_params);
		}else{
			yaCounter26260449.reachGoal(goal_name);
		}
	}else{
		console.log('No counter for ' + goal_name);
	}
}

function ga_event(category, action, label){
	if(typeof ga !== 'undefined'){
		if(typeof category !== 'undefined' && typeof action !== 'undefined' && typeof label !== 'undefined'){
			ga('send', 'event', category, action, label);
		}else if(typeof category !== 'undefined' && typeof action !== 'undefined'){
			ga('send', 'event', category, action);
		}
	}
}

function mail_goal(goal_name){
	if(typeof _tmr !== 'undefined'){
		_tmr.push({ id: "2805011", type: "reachGoal", goal: goal_name });
		return true;
	}
	
	return false;
}

function fb_event(event_name, event_options){
	if(typeof fbq !== 'undefined' && typeof event_name !== 'undefined' && event_name){
		if(typeof event_options === 'object'){
			fbq('track', event_name, event_options);
		}else{
			fbq('track', event_name);
		}
	}
}

function number_format(number, decimals, dec_point, thousands_sep) {
	/***
	number - исходное число
	decimals - количество знаков после разделителя
	dec_point - символ разделителя
	thousands_sep - разделитель тысячных
	***/
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
	prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
	dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
	s = '',
	toFixedFix = function(n, prec) {
		var k = Math.pow(10, prec);
		return '' + (Math.round(n * k) / k)
			.toFixed(prec);
	};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
	.split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '')
	.length < prec) {
	s[1] = s[1] || '';
	s[1] += new Array(prec - s[1].length + 1)
		.join('0');
	}
	return s.join(dec);
}

function update_header_basket(callback){
	$.get("/ajax/header_basket.php?redesign=1", function(data){
		$("#header_basket").html(data);
		
		update_site_basket_total_quantity();
		
		if(typeof callback !== 'undefined'){
			callback();
		}
	});
}

function update_site_basket_total_quantity(){
	var total_quantity_value = ((typeof window.site_basket_items_total_quantity === 'number') ? site_basket_items_total_quantity : 0);
	var $site_basket_quantity_holders = $('.mobile_basket_quantity_value');
	
	if($site_basket_quantity_holders.length){
		if(total_quantity_value){
			$site_basket_quantity_holders.text(total_quantity_value).show();
		}else{
			$site_basket_quantity_holders.text(0).hide();
		}
	}
}

function calculate_wallpaper_height(){
	var $wallpaper_info_block = $('.detail_wrp .main_info_wrp .info_wrp');
	
	if($wallpaper_info_block.length){
		var block_height = $wallpaper_info_block.outerHeight();
		var $wallpaper_image_wrp = $('.detail_wrp .main_info_wrp .wallpaper_image_wrp');
		
		if(!$wallpaper_image_wrp.hasClass('solid_image')){
			$wallpaper_image_wrp.css({'height': block_height < 700 ? 700 : block_height});
			console.log('Should calculate');
		}
	}
}

function mark_in_basket(element_id, quantity){
	var quantity_selector_area = document.getElementById('quantity_selector_' + element_id);
	var to_basket_button = document.getElementById('to_basket_btn_' + element_id);
	var faktura_selector = document.getElementById('faktura_oboev_carousel');
	
	if(quantity_selector_area){
		quantity_selector_area.className += ' in_basket disabled';
		
		var quantity_input = quantity_selector_area.getElementsByTagName('input')[0];
		
		if(quantity_input){
			quantity_input.value = quantity;
			quantity_input.readOnly = true;
		}
		
	}
	
	if(typeof to_basket_button.dataset !== 'undefined' && to_basket_button.dataset['hasFaktura'] && faktura_selector){
		var btns = faktura_selector.getElementsByClassName('select_btn');
		
		if(btns && btns.length){
			for(var i = 0; i < btns.length; i++){
				btns[i].style.display = 'none';
			}
			
			console.log('Hid the faktura buttons');
		}
	}
	
	if(to_basket_button){
		to_basket_button.parentNode.innerHTML = '<a href="/cart/" class="to_basket_btn orange_btn" title="Перейти в корзину">Перейти в корзину</a>';
	}
}

function hide_embedded_block(){
	$('.empty_embedded_block').closest('.embedded_section_block').hide();
}

function set_global_clientid(){
	if(typeof ga !== 'undefined'){
		ga(function(tracker){ window.clientId = tracker.get('clientId');});
	}
}

function get_yandex_client_id(){
	//console.log('Trying to get yandex client id');
	if(window._yandex_counter_id && typeof window[window._yandex_counter_id] === 'object'){
		window.yandexClientId = window[window._yandex_counter_id].getClientID();
		console.log('Yandex client id found and it is: ' + window.yandexClientId);
	}else{
		setTimeout(get_yandex_client_id, 500);
	}
}

function get_yandex_counter_id(){
	//console.log('Trying to find yandex counter object');
	var yandex_counter_id = '';
	
	for(var var_name in window){
		if(var_name.search('yaCounter') === 0){
			yandex_counter_id = var_name;
			break;
		}
	}
	
	if(yandex_counter_id){
		window._yandex_counter_id = yandex_counter_id;
		console.log('Yandex counter id found and it is: ' + window._yandex_counter_id);
		get_yandex_client_id();
	}else{
		setTimeout(get_yandex_counter_id, 500);
	}
}

$(document).ready(function(){
	/* ↓ FAST_LINKS ↓ */
	$('.fast_links_list').find('.show_hide_btn.show').click(function(){
		$(this).parent().addClass('visible');
	}).siblings('.show_hide_btn.hide').click(function(){
		$(this).parent().removeClass('visible');
	});
	/* ↑ FAST_LINKS ↑ */

	/* ↓↓↓ MOBILE_HEADER ↓↓↓ */

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

	/* ↑↑↑ MOBILE_HEADER ↑↑↑ */

	/* ↓ FILTER_CATALOG_MOBILE_BTN ↓ */
	$('.catalog_filter_btn').click(function(){
		$('.filter_btn_mobile').addClass('opened').siblings('.left_menu_filter_list').addClass('opened');
	});
	$('.filter_btn_mobile').click(function(){
		$(this).removeClass('opened').siblings('.left_menu_filter_list').removeClass('opened');
		/*
		if($(this).hasClass('opened')){
			$(this).removeClass('opened').siblings('.left_menu_filter_list').removeClass('opened');
		}else{
			$(this).addClass('opened').siblings('.left_menu_filter_list').addClass('opened');
		}
		*/
	});
	$('.catalog_sort_btn').click(function(){
		$(this).closest('.catalog_filter_btns_wrp').siblings('.catalog_filter_wrp').toggleClass('opened');
	});
	/* ↑ FILTER_CATALOG_MOBILE_BTN ↑ */

	/* ↓ TOP_LINE_MENU ↓ */
	$('#menu_btn').click(function(event){
		event.stopPropagation();
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$('.top_line.menu_wrp').removeClass('opened');
		}else{
			$(this).addClass('opened');
			$('.top_line.menu_wrp').addClass('opened');
		}
	});
	$('body').click(function(){
		$('#menu_btn,.top_line.menu_wrp').removeClass('opened');
	});
	/* ↑ TOP_LINE_MENU ↑ */

	/* ↓ LONG_NAME ↓ */
	$('.catalog_main_list').find('.name_wrp .text').each(function(){
		/*
		var closest_li = $(this).closest('li');
		var hidden_info_wrp = $(this).find('.hidden_info_wrp');
		var name_wrp = hidden_info_wrp.find('.name_wrp');
		var text_wrp = name_wrp.children('.text');
		var text_height = text_wrp.outerHeight();
		*/
		
		var $this = $(this);
		
		if($this.outerHeight() > 60){
			$this.closest('li').addClass('smaller_name');
		}
	});
	/* ↑ LONG_NAME ↑ */
	
	$('body').on('change', '.quantity_selector input', function(){
		var $this = $(this);
		var new_value = parseInt($this.val());
		
		if(isNaN(new_value)){
			new_value = 1;
		}
		
		if(new_value < 1){
			new_value = 1;
		}
		
		if(new_value > 999){
			new_value = 999;
		}
		
		$this.val(new_value);
	}).on('click', '.quantity_selector .minus, .quantity_selector .plus', function(){
		var $this = $(this);
		var $parent_wrapper = $this.closest('.quantity_selector');
		
		if($parent_wrapper.hasClass('disabled')){
			return;
		}
		
		var $input = $this.closest('.quantity_selector').find('input');
		var current_value = parseInt($input.val());
		
		if(isNaN(current_value)){
			current_value = 1;
		}
		
		if($this.hasClass('plus')){
			var new_value = current_value + 1;
		}else{
			var new_value = current_value - 1;
		}
		
		if(new_value < 1){
			new_value = 1;
		}
		
		if(new_value > 999){
			new_value = 999;
		}
		
		$input.val(new_value).change();
	});
	
	$('.detail_wrp').on('click', 'button.to_basket_btn', function(){
		var $this = $(this);
		var element_id = $this.data('id');
		var quantity_value = 1;
		var has_faktura_selector = $this.data('has-faktura') ? true : false;
		
		if(element_id){			
			var $quantity_selector = $('#quantity_selector_' + element_id);
			
			if($quantity_selector.length){
				var quantity_value = parseInt($quantity_selector.find('input').val(), 10);
				
				if(isNaN(quantity_value)){
					quantity_value = 1;
				}
			}
			
			var product_params_data = [];
			
			if(has_faktura_selector){
				var $faktura_oboev_wrp = $('.faktura_oboev_wrp');
				var $faktura_oboev_items = $faktura_oboev_wrp.find('.slide');
				
				if($faktura_oboev_wrp.length && $faktura_oboev_items.length){
					var $selected_faktura_item = $faktura_oboev_wrp.find('.slide.selected_item');
					
					if($selected_faktura_item.length){
						product_params_data.push('faktura=' + $selected_faktura_item.data('value'));
					}else{
						$faktura_oboev_wrp.find('.error_text_wrp').slideDown('fast');
						return false;
					}
				}
			}
			
			$this.css({'opacity': .3, 'cursor': 'wait'}).prop('disabled', true);
			
			$.ajax({
				'url': '/ajax/add_to_basket.php',
				'type': "POST",
				'cache': false,
				'context': $this,
				'data': {'action': 'add_to_basket', 'element_id': element_id, 'quantity': quantity_value, 'params': product_params_data},
			}).done(function(data){
				var $this = $(this);
				var element_id = $this.data('id');
				var has_faktura_selector = $this.data('has-faktura') ? true : false;
				
				if(data.STATUS == 'OK'){
					show_add_to_basket_animation(this);
					mark_in_basket(data.PRODUCT_ID, data.QUANTITY);
					update_header_basket();
					
					if(has_faktura_selector){
						var $faktura_oboev_wrp = $('.faktura_oboev_wrp');
						
						if($faktura_oboev_wrp.length){
							$faktura_oboev_wrp.find('.select_btn').hide();
						}
					}
					
					if(typeof window.vk_retargeting_event !== 'undefined'){
						vk_retargeting_event('ProductEvent', [window.vk_retargeting_price_id, 'add_to_cart', {'products': [{'id': element_id}]}]);
					}
					
					fb_event('AddToCart');
				}else{
					if(typeof data.ERROR_TEXT !== 'undefined' && data.ERROR_TEXT){
						var $add_to_basket_error_text = $('#add_to_basket_error_text');
						
						if($add_to_basket_error_text.length){
							$add_to_basket_error_text.html(data.ERROR_TEXT).slideDown('fast');
						}else{
							var $cost_wrapper_bg = $this.closest('.cost_wrapper_bg');
							
							if($cost_wrapper_bg.length){
								$('<div class="error_text_wrp add_to_basket_error_text mb10" id="add_to_basket_error_text" style="display: none;">' + data.ERROR_TEXT + '</div>').insertBefore($cost_wrapper_bg).slideDown('fast');
							}else{
								alert('Произошла ошибка: ' + data.ERROR_TEXT);
							}
						}
					}else{
						alert('Произошла ошибка');
					}
				}
			}).fail(function(){
				alert('Произошла ошибка');
			}).always(function(){
				var $this = $(this);
				$this.css({'opacity': 1, 'cursor': 'pointer'}).prop('disabled', false);
			});
		}
	});
	
	// ↓ Удалить ↓
	/*
	$('.top_line .login_btns_wrp .links_wrp a').click(function(event){
		event.preventDefault();
		$(this).parent().addClass('hidden').siblings().removeClass('hidden');
	});
	*/
	/*
	$('.promocode_wrp .btn_style').click(function(){
		$(this).siblings('.done').fadeIn(300);//.delay(2000).fadeOut(300);
	});
	*/
	// ↑ Удалить ↑
	
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
	
	/* ↓ LEFT_MENU_FILTER_CATALOG ↓ */
	$('.wrapper_catalog_filter ul.left_menu_filter_list .open_filter_btn').click(function(){
		var parent_li = $(this).parent();
		
		if(parent_li.hasClass('no_toggle')){
			return false;
		}
		
		if(parent_li.hasClass('opened')){
			$(this).siblings('ul.menu_filter_links_list,ul.left_menu_filter_country_list').stop().slideUp(300).parent().removeClass('opened');
		}else{
			$(this).siblings('ul.menu_filter_links_list,ul.left_menu_filter_country_list').stop().slideDown(300).parent().addClass('opened');
		}
	});
	
	$('.wrapper_catalog_filter ul.left_menu_filter_list ul.menu_filter_links_list .open_categories_btn').click(function(event){
		event.stopPropagation();
		
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
	
	$('#city_change_btn, .city_change_btn').click(function(event){
		console.log('Clicked');
		$('#city_change_wrp').fadeIn(500);
		event.preventDefault();
	});
	
	$('#city_change_wrp, #city_change_mobile_wrp').find('.cities_list a').click(function(e){
		e.preventDefault();
		
		var $this = $(this);
		
		var city_url = $this.attr('href').replace(/\/$/, '');
		var new_url = city_url + window.location.pathname + window.location.search + window.location.hash;
		window.location.href = new_url;
	});
	
	$('.cities_list a').click(function(){
		var $this = $(this);
		var city_id = parseInt($this.data('id'));
		
		if(!isNaN(city_id)){
			setCookie('sc_id', city_id, {'expires': 3600*24*30});
			console.log('Set cookie with city id');
		}
	});
	
	$('.site_city_search_input').on('change keyup', function(){
		var $this = $(this);
		var $site_cities_list_window = $this.closest('.site_cities_list_window');
		var $cities_items = $site_cities_list_window.find('.cities_list').find('li');
		var entered_text = $.trim($this.val()).toLowerCase();
		
		if(entered_text.length){
			console.log('Search query is: ' + entered_text);
			$site_cities_list_window.addClass('city_search_mode');
			
			$cities_items.removeClass('found not_found');
			
			$cities_items.each(function(){
				var $this = $(this);
				
				if(!$this.hasClass('letter')){
					var city_name = $.trim($this.text()).toLowerCase();
					
					if(city_name.indexOf(entered_text) === 0){
						console.log('Found city ' + city_name);
						$this.addClass('found');
					}else{
						$this.addClass('not_found');
					}
				}
			});
			
			//$cities_items.show().not('.found, .letter').hide();
		}else{
			console.log('Search query is empty');
			$site_cities_list_window.removeClass('city_search_mode');
			$cities_items.removeClass('found not_found');
		}
	});
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
	$('#faktura_oboev_carousel').owlCarousel({
		items : 5,
		singleItem : false,
		navigation : true,
		slideSpeed : 600,
		pagination : false,
		autoPlay : false,
		scrollPerPage : true,
		rewindNav : false,
	});
	$('#faktura_oboev_carousel').find('.select_btn').click(function(){
		var $parent_slide_block = $(this).parent('.slide');
		
		if($parent_slide_block.hasClass('selected_item')){
			$parent_slide_block.removeClass('selected_item');
		}else{
			$('#faktura_oboev_carousel').find('.slide').removeClass('selected_item');
			$parent_slide_block.addClass('selected_item');
			
			$('.faktura_oboev_wrp .error_text_wrp').slideUp('fast');
		}
	});
	
	//if(window.location.hash == '#tezt'){
	//	$('#faktura_oboev_carousel').find('.select_btn').removeClass('hidden');
	//}
	
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
	/*
	//uncomment this to make pause on mouseover 
	$elem.on('mouseover',function(){
	   isPause = true;
	});
	
	$elem.on('mouseout',function(){
	   isPause = false;
	});
	// ↑ SLIDER_MAIN ↑
	*/
	
	var basket_row_markup = '<ul class="table_list item_row" id="item_row_#ID#" data-id="#ID#"> \
		<li> \
			<div class="check_wrp"> \
				<input type="checkbox" id="chb#ID#" class="checkbox_style item_checkbox" data-id="#ID#" autocomplete="off" /> \
				<label for="chb#ID#">Checking-label</label> \
			</div> \
			<div class="img_wrp"><a href="#IMAGE_SRC#" data-lightbox="product"><img src="#THUMBNAIL_SRC#" alt="#ARTICUL#" title="#ARTICUL#" /></a></div> \
			<div class="descr_wrp"> \
				<div class="text_wrp" title="#ARTICUL#" #ARTICUL_STYLE#><strong>Артикул: </strong><a href="#DETAIL_PAGE_URL#" target="_blank">#ARTICUL#</a></div> \
				<div class="text_wrp" title="#MANUFACTURER#" #MANUFACTURER_STYLE#><strong>Производитель: </strong>#MANUFACTURER#</div> \
				<div class="text_wrp" title="#COLLECTION#" #COLLECTION_STYLE#><strong>Коллекция: </strong>#COLLECTION#</div> \
			</div> \
		</li> \
		<li> \
			<div class="amount_wrp quantity_selector"> \
				<div class="minus">&ndash;</div> \
				<input type="text" class="amount_input_style item_quantity_input" value="#QUANTITY#" title="Укажите количество" data-id="#ID#" autocomplete="off" /> \
				<div class="plus">+</div> \
			</div> \
		</li> \
		<li> \
			<div class="cost_wrp"> \
				<div class="old_cost_wrp" title="Старая цена" #OLD_PRICE_STYLE#><span class="old_price_value">#OLD_PRICE#</span> Р</div> \
				<div class="now_cost_wrp" title="#PRICE# руб."><span class="price_value">#PRICE#</span> <span class="rubl_icon large_green"></span></div> \
			</div> \
		</li> \
		<li><div class="cost_wrp" title="#SUM# руб."><span class="sum_value">#SUM#</span> <span class="rubl_icon large_green"></span></div></li> \
		<li><div class="availability_wrp #AVAILABILITY_CLASS#">#AVAILABILITY_TEXT#</div></li> \
		<li> \
			<div class="content_wrp"> \
				<div class="btn_wrp"><button class="delete_btn item_delete" title="Удалить обои из списка" data-id="#ID#"><strong class="red_text">&times;</strong>&nbsp;Удалить</button></div> \
				<div class="btn_wrp"><button class="favorites_btn item_favourites" data-id="#ID#">Отложить</button></div> \
			</div> \
		</li> \
	</ul>';
	
	$('.cart_area .control_checkboxes').change(function(){
		var $this = $(this);
		
		var current_state = $this.prop('checked');
		
		$('.item_checkbox').prop('checked', current_state);
	});
	
	function render_basket_row(template, data){
		var result = template;
		var regex;
		
		for(key in data){
			if(data.hasOwnProperty(key)){
				regex = new RegExp('#' + key + '#', "g");
				result = result.replace(regex, data[key]);
			}
		}
		
		return result;
	}
	
	function handle_basket_response(data){
		if(!data['ITEMS']){
			data['ITEMS'] = {};
		}
		
		console.log(data);
		
		var current_basket_item_ids = [];
		
		$('.cart_area').find('.item_row').each(function(){
			var $this = $(this);
			var item_id = $this.data('id');
			
			if(data['ITEMS'].hasOwnProperty(item_id)){
				current_basket_item_ids.push(item_id);
				
				var current_item_data = data['ITEMS'][item_id];
				
				$this.find('.item_quantity_input').val(current_item_data['QUANTITY']);
				
				if(current_item_data['DISCOUNT_PRICE']){
					$this.find('.old_price_value').text(number_format(current_item_data['FULL_PRICE'], 0, '', ' ')).parent().show();
				}else{
					$this.find('.old_price_value').text('0').parent().hide();
				}
				
				$this.find('.price_value').text(number_format(current_item_data['PRICE'], 0, '', ' '));
				$this.find('.sum_value').text(number_format(current_item_data['COMMON_SUM'], 0, '', ' '));
			}else{
				$this.remove();
			}
		});
		
		$('#basket_sum').text(number_format(data['allSum'], 0, '', ' '));
			
		if(data['DISCOUNT_PRICE_ALL']){
			$('#basket_full_sum').text(number_format(data['FULL_PRICE_WITHOUT_DISCOUNT'], 0, '', ' ')).parent().show();
			$('#basket_discount_price').text(number_format(data['DISCOUNT_PRICE_ALL'], 0, '', ' ')).parent().show();
		}else{
			$('#basket_full_sum').text('0').parent().hide();
			$('#basket_discount_price').text('0').parent().hide();
		}
		
		console.log(current_basket_item_ids);
		
		var basket_items_count = 0;
		var new_basket_items_markup = '';
		
		for(item_id in data['ITEMS']){
			if(data['ITEMS'].hasOwnProperty(item_id) && current_basket_item_ids.indexOf(parseInt(item_id)) == -1){
				var current_item_data = data['ITEMS'][item_id];
				
				var item_data = {
					'ID': current_item_data['ID'],
					'IMAGE_SRC': current_item_data['IMAGE'] ? current_item_data['IMAGE']['SRC'] : '',
					'THUMBNAIL_SRC': current_item_data['THUMBNAIL'] ? current_item_data['THUMBNAIL']['SRC'] : '',
					'DETAIL_PAGE_URL': current_item_data['DETAIL_PAGE_URL'],
					'ARTICUL': current_item_data['ARTICUL'],
					'ARTICUL_STYLE': current_item_data['ARTICUL'] ? '' : 'style="display: none;"',
					'MANUFACTURER': current_item_data['PRODUCTION_DATA']['MANUFACTURER'] ? current_item_data['PRODUCTION_DATA']['MANUFACTURER']['NAME'] : '',
					'MANUFACTURER_STYLE': current_item_data['PRODUCTION_DATA']['MANUFACTURER'] ? '' : 'style="display: none;"',
					'COLLECTION': current_item_data['PRODUCTION_DATA']['COLLECTION'] ? current_item_data['PRODUCTION_DATA']['COLLECTION']['NAME'] : '',
					'COLLECTION_STYLE': current_item_data['PRODUCTION_DATA']['COLLECTION'] ? '' : 'style="display: none;"',
					'QUANTITY': current_item_data['QUANTITY'],
					'PRICE': number_format(current_item_data['PRICE'], 0, '', ' '),
					'OLD_PRICE': current_item_data['DISCOUNT_PRICE'] ? number_format(current_item_data['FULL_PRICE'], 0, '', ' ') : '0',
					'OLD_PRICE_STYLE': current_item_data['DISCOUNT_PRICE'] ? '' : 'style="display: none;"',
					'SUM': number_format(current_item_data['COMMON_SUM'], 0, '', ' '),
					'AVAILABILITY_CLASS': 'yes',
					'AVAILABILITY_TEXT': 'В наличии',
				};
				
				new_basket_items_markup += render_basket_row(basket_row_markup, item_data);
			}
			
			if(data['ITEMS'].hasOwnProperty(item_id)){
				basket_items_count++;
			}
		}
		
		if(new_basket_items_markup){
			$('.cart_area').append(new_basket_items_markup);
		}
		
		if(data['ACTIVE_COUPON']){
			$('#coupon_success_message').fadeIn(500);
			$('#coupon_value').val(data['ACTIVE_COUPON']);
		}else{
			$('#coupon_success_message').hide();
		}
		
		if(basket_items_count){
			$('.cart_area').removeClass('empty_cart');
			$('#checkout_area').show();
		}else{
			$('.cart_area').addClass('empty_cart');
			$('#checkout_area').hide();
		}
		
		update_header_basket();
	}
	
	$('.cart_area').on('change', '.item_quantity_input', function(event){
		var $this = $(this);
		var item_id = $this.data('id');
		var quantity = $(this).val();
		console.log($this.data('id') + ': ' + $this.val());
		
		$('#basket_loading').show();
		
		$.ajax({
			'url': '/ajax/basket.php',
			'type': "GET",
			'cache': false,
			'context': $this,
			'data': {'action': 'change_quantity', 'item_id': item_id, 'quantity': quantity},
		}).done(function(data){
			handle_basket_response(data);
		}).fail(function(){
			alert('Произошла ошибка');
		}).always(function(){
			console.log('Quantity change finished');
			$('#basket_loading').hide();
		});
	}).on('click', '.item_delete', function(event){
		var $this = $(this);
		var item_id = $this.data('id');
		
		$('#basket_loading').show();
		
		$.ajax({
			'url': '/ajax/basket.php',
			'type': "GET",
			'cache': false,
			'context': $this,
			'data': {'action': 'delete', 'item_id': item_id},
		}).done(function(data){
			handle_basket_response(data);
		}).fail(function(){
			alert('Произошла ошибка');
		}).always(function(){
			console.log('Delete request finished');
			$('#basket_loading').hide();
		});
		
		console.log("Delete " + item_id);
	}).on('click', '.item_favourites', function(event){
		var $this = $(this);
		var item_id = $this.data('id');
		
		$('#basket_loading').show();
		
		$.ajax({
			'url': '/ajax/basket.php',
			'type': "GET",
			'cache': false,
			'context': $this,
			'data': {'action': 'to_favourites', 'item_id': item_id},
		}).done(function(data){
			handle_basket_response(data);
		}).fail(function(){
			alert('Произошла ошибка');
		}).always(function(){
			console.log('Add to favourites finished');
			$('#basket_loading').hide();
		});
		
		console.log("Favourite " + $this.data('id'));
	}).on('click', '.set_coupon', function(){
		var $this = $(this);
		var coupon_value = $.trim($('#coupon_value').val());
		
		if(coupon_value){
			$('#basket_loading').show();
			
			$.ajax({
				'url': '/ajax/basket.php',
				'type': "GET",
				'cache': false,
				'context': $this,
				'data': {'action': 'coupon', 'coupon_value': coupon_value},
			}).done(function(data){
				handle_basket_response(data);
			}).fail(function(){
				alert('Произошла ошибка');
			}).always(function(){
				console.log('Set coupon finished');
				$('#basket_loading').hide();
			});
		}
	}).on('click', '.clear_basket', function(){
		var $this = $(this);
		
		$('#basket_loading').show();
		
		$.ajax({
			'url': '/ajax/basket.php',
			'type': "GET",
			'cache': false,
			'context': $this,
			'data': {'action': 'clear_basket'},
		}).done(function(data){
			handle_basket_response(data);
		}).fail(function(){
			alert('Произошла ошибка');
		}).always(function(){
			console.log('Set coupon finished');
			$('#basket_loading').hide();
		});
	});
	
	$('.wallpapers_by_purpose_filter').on('click', '.purpose_item', function(){
		if(!window.purpose_filter_active){
			window.purpose_filter_active = true;
			var $this = $(this);
			var purpose_id = $this.data('id');
			
			$this.addClass('active').siblings().removeClass('active');
			
			$('#wallpapres_by_destination_list_wrp').addClass('show_loading');
			
			$.get("/ajax/get_wallpapers_by_destination.php?destination_id=" + purpose_id, function(data) {
				$('#wallpapres_by_destination_list_wrp').html(data).removeClass('show_loading');
				window.purpose_filter_active = false;
			});
		}
	});
	
	/* ↓ DETAIL_TABS ↓ */
	$('.detail_wrp .info_wrp .item_tabs_wrp ul.item_tabs_list li').click(function(){
		var tab_index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active').parent().siblings('ul.item_tabs_content_list').children().eq(tab_index).slideDown(300).siblings().slideUp(300);
	});
	/* ↑ DETAIL_TABS ↑ */
	
	$('.articul_request_form_wrp').on('click', '.submit-button', function(){
		var $this = $(this);
		var $form = $this.closest('.articul_request_form_wrp');
		
		var articul_input = $form.find('.articul_input');
		var phone_input = $form.find('.phone_input');
		
		var articul_value = $.trim(articul_input.val());
		var phone_value = $.trim(phone_input.val());
		
		var correct = true;
		
		if(articul_value.length == 0){
			articul_input.addClass('error_input');
			correct = false;
		}
		
		if(phone_value.length == 0){
			phone_input.addClass('error_input');
			correct = false;
		}
		
		if(correct){
			$(this).css({'opacity': '.3', 'cursor': 'wait'}).prop('disabled', true);
			
			$.ajax({
				'url': '/ajax/articul_request.php',
				'type': "POST",
				'cache': false,
				'context': $this,
				'data': {'articul': articul_value, 'phone': phone_value},
			}).done(function(data){
				if(data === 'Ok'){
					$(this).closest('.fields_wrp').slideUp(300).siblings('.done').slideDown(300);
					
					ya_goal('ARTICUL_REQUEST_SENT');
					ga_event('articul_request', 'sent');
				}else{
					alert('Произошла ошибка: ' + data);
				}
			}).fail(function(){
				alert('Произошла ошибка');
			}).always(function(){
				$(this).css({'opacity': '1', 'cursor': 'pointer'}).prop('disabled', false);
			});
		}
	}).on('change keydown', 'input', function(){
		$(this).removeClass('error_input');
	});
	
	$('.paginator_wrp').each(function(){
		var $wrapper = $(this);
		var $show_more_button = $wrapper.find('.show_more_button');
		
		if($show_more_button.length){
			var $next_page_item = $wrapper.find('.next_page');
			var $prev_page_item = $wrapper.find('.prev_page');
			
			var href_value = '';
			var button_text_value = '';
			
			if($next_page_item.length){
				href_value = $next_page_item.find('a').attr('href');
				button_text_value = 'Следующая страница';
			}else if($prev_page_item.length){
				href_value = $prev_page_item.find('a').attr('href');
				button_text_value = 'Предыдущая страница';
			}
			
			if(href_value && button_text_value){
				$show_more_button.text(button_text_value).data('href', href_value).removeClass('hidden');
			}
		}
	});
	
	$('.paginator_wrp .show_more_button').click(function(){
		var $this = $(this);
		var href_value = $this.data('href');
		
		if(href_value){
			window.location.href = href_value;
		}
	});
	
	/* ↓ PROMOCODE ↓ */
	$('.promocode_show_detail_btn').click(function(){
		$(this).closest('.promocode_content_wrp').find('.hidden_content_wrp').stop().slideToggle(200);
	});
	/* ↑ PROMOCODE ↑ */
	
	function show_add_to_basket_animation(item){
		var $item = $(item);
		
		if($item.length){
			var $header_basket = false;
			
			var $ordinary_basket = $('#header_basket');
			var $mobile_basket = $('#header_basket_mobile');
			
			if($mobile_basket.length && $mobile_basket.is(':visible')){
				$header_basket = $mobile_basket;
				console.log('Mobile basket found');
			}else if($ordinary_basket.length && $ordinary_basket.is(':visible')){
				$header_basket = $ordinary_basket;
				console.log('Ordinary basket found');
			}
			
			if($header_basket && $header_basket.length){
				console.log('We gonna animate');
				var $wallpaper_roll_block = $('#wallpaper_roll_block');
				var item_coordinates = $item.position();
				
				var start_top = item_coordinates.top + ($item.height() / 2) - 24;
				var start_left = item_coordinates.left + ($item.width() / 2) - 24;
				
				setTimeout(function(){
					$wallpaper_roll_block.css({'top': start_top + 'px', 'left': start_left + 'px'});
					console.log('Set coordinates to item');
					console.log([start_top, start_left]);
				}, 10);
				
				var header_basket_coordinates = $header_basket.position();
				
				var end_top = header_basket_coordinates.top + ($header_basket.height() / 2) - 24;
				var end_left = header_basket_coordinates.left + ($header_basket.width() / 2) - 24;
				
				setTimeout(function(){ $wallpaper_roll_block.css({'top': end_top + 'px', 'left': end_left + 'px', 'opacity': 0}); $wallpaper_roll_block.css({'transition': 'all 1s ease-in-out'}); console.log('Set coordinates to basket'); console.log([end_top, end_left]); }, 20);
				setTimeout(function(){ $wallpaper_roll_block.attr('style', ''); console.log('Removed style attr'); }, 1100);
			}
		}
	}
	
	//window['show_add_to_basket_animation'] = show_add_to_basket_animation;
	
	
	$('.delivery_services_tabs_wrp').find('.tab_buttons li').click(function(){
		var $this = $(this);
		$this.addClass('active').siblings().removeClass('active');
		
		$('.delivery_services_tabs_wrp').find('.tab_content').eq($this.index()).addClass('active').siblings().removeClass('active');
	});

	function init_delivery_offices_map() {
		if(!delivery_services_data){
			return false;
		}
		
		var myMap = new ymaps.Map("delivery_offices_map", {
				center: [55.76, 37.64],
				zoom: 10
			}, {
				searchControlProvider: 'yandex#search'
			});
		
		for (var j = 0; j < delivery_services_data.length; j++){
			var current_delivery_service = delivery_services_data[j];
			
			for(var i = 0; i < current_delivery_service.offices_data.length; i++){
				var current_point_item = current_delivery_service.offices_data[i];
				var point_number = '<span style="font-size: 10px;">' + (i + 1) + '</span>';
				var point_description = /*'<strong>' + current_point_item.name + '</strong><br />' +*/ current_point_item.address;
				var point_lat = current_point_item.lat;
				var point_lon = current_point_item.lon;
				
				myMap.geoObjects.add(new ymaps.Placemark([point_lat, point_lon], {
					balloonContent: point_description,
					//iconContent: point_number
				}, {
					//preset: 'islands#icon',
					//iconColor: '#1dbaaf'//'#0095b6'
					/**
					 * Options.
					 * You must specify this type of layout.
					 */
					iconLayout: 'default#image',
					// Custom image for the placemark icon.
					iconImageHref: current_delivery_service.map_icon,
					// The size of the placemark.
					iconImageSize: [50, 50],
					/**
					 * The offset of the upper left corner of the icon relative
					 * to its "tail" (the anchor point).
					 */
					iconImageOffset: [-25, -50]
				}));
			}
		}
		
		myMap.setBounds(myMap.geoObjects.getBounds());
		
		window.delivery_offices_map = myMap;
		window.delivery_offices_map_initialized = true;
		
		if(window.delivery_map_office_coordinates_callback){
			console.log('Gonna call callback');
			window.delivery_offices_map.panTo(window.delivery_map_office_coordinates_callback).then(function(){ delivery_offices_map.setZoom(16, {duration: 500}); });
		}
	}

	$('table.samovivoz').on('click', '.show_on_map', function(){
		var coordinates = $(this).data('coordinates').split(',');
		console.log(coordinates);
		
		var office_coordinates_array = [parseFloat(coordinates[0]), parseFloat(coordinates[1])];
		
		if(!window.delivery_offices_map_initialized){
			console.log('Initializing map and ussing callback');
			window.delivery_map_office_coordinates_callback = office_coordinates_array;
			ymaps.ready(init_delivery_offices_map);
		}else{
			console.log('Moving to office');
			delivery_offices_map.panTo(office_coordinates_array).then(function(){ delivery_offices_map.setZoom(16, {duration: 500}); });
		}
		
		$('#delivery_offices_map_wrp').fadeIn('fast');
	});
	
	$('.self_photo_wallpaper_wrp .self_photo_wallpaper_btn').click(function(){
		var $parent_block = $(this).closest('.self_photo_wallpaper_wrp');
		if($parent_block.hasClass('showed')){
			$parent_block.removeClass('showed').find('.hidden_wrp').slideUp(300);
		}else{
			$parent_block.addClass('showed').find('.hidden_wrp').slideDown(300);
		}
	});
	
	$('.element_additional_products_tabs li a').click(function(){
		var $this = $(this);
		
		if(!$this.closest('li').hasClass('active')){
			console.log('Tab clicked');
			var category_id = $this.data('id');
			
			if(category_id){
				var $carousel_item = $('.additional_products_carousel_' + category_id + '_wrp');
				
				if($carousel_item.length){
					$this.closest('li').addClass('active').siblings().removeClass('active');
					$carousel_item.addClass('active').siblings().removeClass('active');
					
					if(typeof window['additional_products_carousel_' + category_id] !== 'undefined'){
						window['additional_products_carousel_' + category_id].data('owlCarousel').reinit();
					}
				}
			}
		}
	});
	
	update_site_basket_total_quantity();
	
	calculate_wallpaper_height();
	
	set_global_clientid();
	get_yandex_counter_id();
});

$(window).load(function(){
	calculate_wallpaper_height();
	/* ↓ DETAIL_IMAGE_HEIGHT ↓ 
	var info_block_height = $('.detail_wrp .main_info_wrp .info_wrp').outerHeight();
	$('.detail_wrp .main_info_wrp .wallpaper_image_wrp').css({'height':info_block_height});
	/* ↑ DETAIL_IMAGE_HEIGHT ↑ */
	
	set_global_clientid();
});
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
		
		if(typeof callback !== 'undefined'){
			callback();
		}
	});
}

$(document).ready(function(){
	$('body').on('change', '.quantity_selector input', function(){
		var $this = $(this);
		var new_value = parseInt($this.val());
		
		if(isNaN(new_value)){
			new_value = 1;
		}
		
		if(new_value < 1){
			new_value = 1;
		}
		
		if(new_value > 99){
			new_value = 99;
		}
		
		$this.val(new_value);
	}).on('click', '.quantity_selector .minus, .quantity_selector .plus', function(){
		var $this = $(this);
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
		
		if(new_value > 99){
			new_value = 99;
		}
		
		$input.val(new_value).change();
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
		}else{
			$('.cart_area').addClass('empty_cart');
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
			'url': '/new/ajax/basket.php',
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
			'url': '/new/ajax/basket.php',
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
			'url': '/new/ajax/basket.php',
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
				'url': '/new/ajax/basket.php',
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
			'url': '/new/ajax/basket.php',
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
});

$(window).load(function(){
	/* ↓ DETAIL_IMAGE_HEIGHT ↓ */
	var info_block_height = $('.detail_wrp .main_info_wrp .info_wrp').outerHeight();
	$('.detail_wrp .main_info_wrp .wallpaper_image_wrp').css({'height':info_block_height});
	/* ↑ DETAIL_IMAGE_HEIGHT ↑ */
});
	
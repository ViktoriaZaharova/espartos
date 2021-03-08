$(function(){
	var $lg = $('.lightgallery');
	
	if($lg.length){
		var $lightgallery_items = $lg.find('.lightgallery-item')
		
		function arrows_positioning(){
			var window_width = $(window).width();
			var half_window_width = window_width / 2;
			var image_width = $('.lg-current').find('.lg-image').width();
			var half_image_width = image_width / 2;
			
			//console.log('Window width: ' + window_width);
			//console.log('Window half width: ' + half_window_width);
			//console.log('Image width: ' + image_width);
			//console.log('Image half width: ' + half_image_width);
			
			var arrows_offset = half_window_width - half_image_width + 20;
			
			//console.log('Arrows offset: ' + arrows_offset);
			
			$('.lg-prev').css('left', arrows_offset);
			$('.lg-next').css('right', arrows_offset);
		}
		
		$lg.lightGallery({
			selector: '.lightgallery-item',
			download: false,
			loop: false,
			enableDrag: false,
			thumbnail:true,
			exThumbImage: 'data-thumb',
		});
		
		$lg.on('onSlideItemLoad.lg',function(event, index){
			//console.log('onSlideItemLoad: ' + index);
			arrows_positioning(index);
		}).on('onAfterSlide.lg', function(event, prevIndex, index){
			console.log('onAfterSlide: ' + index);
			//console.log($lightgallery_items[index]);
			
			var gallery_item = $($lightgallery_items[index]);
			
			if(gallery_item){
				var big_image_src = gallery_item.data('big-picture-href');
				
				if(big_image_src){
					$('.lg-current').find('.lg-image').data('big-image-src', big_image_src);
					$('.lg').addClass('bigPictureAvailable');
				}else{
					$('.lg').removeClass('bigPictureAvailable');
				}
			}
			
			arrows_positioning();
			
			$('#big_image_preloader').fadeOut('fast');
			
			if(typeof fake_big_image !== 'undefined'){
				fake_big_image.src = '';
			}
		}).on('onBeforeClose.lg', function(){
			$('.lg').removeClass('bigPictureAvailable').removeClass('bigPictureLoading');
			$('#big_image_preloader').fadeOut('fast');
			
			if(typeof fake_big_image !== 'undefined'){
				fake_big_image.src = '';
			}
		});
		
		$('body').on('click', '.lg-image', function(){
			var big_picture_src = $(this).data('big-image-src');
			
			if(big_picture_src){
				fake_big_image = document.createElement('img');
						
				var bigPictureLoaderTimeout = setTimeout(function(){ $('.lg').addClass('bigPictureLoading'); $('#big_image_preloader').fadeIn('fast'); }, 500);
				
				fake_big_image.onload = function(){
					var $this = $(this);
					
					if($this.attr('src')){
						$this.rictuserectus();
						$this.rictuserectus("show");
					}
					
					clearTimeout(bigPictureLoaderTimeout);
					$('.lg').removeClass('bigPictureLoading');
					
					$('#big_image_preloader').fadeOut('fast');
				};
				
				fake_big_image.src = big_picture_src;
			}
		});
		
		$(window).resize(function(){
			arrows_positioning();
		});
	}
});
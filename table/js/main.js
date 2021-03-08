$( document ).ready(function() {
	$('.local_pages_tabs_wrp').find('.local_page_tab_btn').click(function(event){
		event.preventDefault();

		var $parentTab = $(this).closest('.local_page_tab_wrp');
		var checkedTabIndex = $parentTab.index();

		$parentTab.addClass('opened').siblings().removeClass('opened');
		$parentTab.closest('.local_pages_tabs_wrp').siblings('.local_pages_content_wrp').find('.local_page_content_tab_wrp').eq(checkedTabIndex).fadeIn(300).siblings().hide();
	});
	$('.local_pages_tabs_wrp').find('.local_page_tab_wrp:first-child').find('.local_page_tab_btn').click();

	/* v  v */
	$('.input_accept_btn_wrp').find('.table_input_style').focus(function(){
		$(this).closest('.input_accept_btn_wrp').addClass('focused');
	}).siblings('.input_accept_btn').click(function(){
		$(this).closest('.input_accept_btn_wrp').removeClass('focused');
	});
	/* ^  ^ */
});
$(document).ready(function () {
    /* v FILTER_BTN v */
    $('.catalog_filter_mobile_btn_wrp').find('.catalog_filter_mobile_btn').click(function () {
        $('.catalog_filter_left_wrp').addClass('opened');
    });
    $('.catalog_filter_left_wrp').find('.catalog_filter_mobile_close_btn').click(function () {
        $('.catalog_filter_left_wrp').removeClass('opened');
    });
    /* ^ FILTER_BTN ^ */

    /* v SUBCATEGORIES_HIDDEN v */
    $('.categories_list_wrp').find('.category_content_wrp').each(function () {
        var $subcategories_list_wrp = $(this).find('.subcategories_list_wrp');
        var $subcategories_list = $(this).find('.subcategories_list');
        var $hide_show_other_btns_wrp = $(this).find('.hide_show_other_btns_wrp');
        var subcategories_count = $subcategories_list.find('li:last-child').index();
        if (subcategories_count > 3) {
            $subcategories_list_wrp.find('.other_subcategories_count').html(subcategories_count - 3);
        } else {
            $hide_show_other_btns_wrp.hide();
        }
    });
    $('.subcategories_list_wrp').find('.show_other_btn').click(function () {
        $(this).closest('.hide_show_other_btns_wrp').removeClass('hide_other').siblings('.subcategories_list').removeClass('hide_other');
    }).siblings('.hide_other_btn').click(function () {
        $(this).closest('.hide_show_other_btns_wrp').addClass('hide_other').siblings('.subcategories_list').addClass('hide_other');
    });
    /* ^ SUBCATEGORIES_HIDDEN ^ */

    /* v SELECT_DELIVERY_TABS v */
    $('.select_delivery_tabs_wrp').find('.select_delivery_tab_wrp').click(function () {
        var tab_index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected').closest('.select_delivery_tabs_wrp').siblings('.select_delivery_tabs_content_wrp').find('.select_delivery_tab_content').eq(tab_index).fadeIn(300).siblings().hide();
    });
    $('.select_delivery_tabs_wrp').find('.select_delivery_tab_wrp:first-child').click();
    /* ^ SELECT_DELIVERY_TABS ^ */

    /* v DELETE_BASKET_ITEM v */
    $('.basket_table').find('.delete_item_btn').click(function () {
        $(this).closest('.basket_tovar_item_wrp').remove();
    });
    /* ^ DELETE_BASKET_ITEM ^ */

    /* v ALPHABET_LETTERS v */
    $('.alphabet_letters_btns_list').find('.alphabet_letter_btn').click(function () {
        var $letter_parent = $(this).closest('li');
        var letter_selected = $(this).text();
        var $cities_content = $(this).closest('.alphabet_letters_btns_list_wrp').siblings('.cities_alphabet_content_wrp');
        $letter_parent.addClass('selected').siblings().removeClass('selected');
        $cities_content.find('.cities_alphabet_letter_content_wrp').each(function () {
            if ($(this).data('letter') == letter_selected) {
                $(this).fadeIn(300).siblings().hide();
            }
        });
    });
    $('.alphabet_letters_btns_list').children('li:first-child').find('.alphabet_letter_btn').click();
    /* ^ ALPHABET_LETTERS ^ */

    /* v FAVORITES v */
    $('.add_favorites,.add_to_favourites_btn').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('added');
    });
    /* ^ FAVORITES ^ */

    /* v FILTER_HIDDING_CONTENT v */
    $('.can_hide_content').find('.filter_section_caption_wrp').click(function () {
        var $parent_wrp = $(this).closest('.can_hide_content');

        $(this).siblings('.filter_section_content_wrp').stop().slideToggle(300);
        $parent_wrp.stop().toggleClass('hidded');
    });

    $('.show_hide_btn_wrp').find('.show_all_link').click(function () {
        $(this).closest('.show_hide_btn_wrp').removeClass('hidded').siblings('.filter_list').removeClass('hidded');
    }).siblings('.hide_link').click(function () {
        $(this).closest('.show_hide_btn_wrp').addClass('hidded').siblings('.filter_list').addClass('hidded');
    });
    /* ^ FILTER_HIDDING_CONTENT ^ */

    /* v QUANTITY_INPUT v */
    $(function () {
        (function quantityProducts() {
            var $quantityMinus = $('.quantity_input_wrp').find('.minus_btn');
            var $quantityPlus = $('.quantity_input_wrp').find('.plus_btn');

            $quantityMinus.click(quantityMinus);
            $quantityPlus.click(quantityPlus);

            function quantityMinus() {
                var $quantityInput = $(this).siblings('.quantity_input');

                if ($quantityInput.val() > 1) {
                    $quantityInput.val(+$quantityInput.val() - 1);
                }
            }

            function quantityPlus() {
                var $quantityInput = $(this).siblings('.quantity_input');

                $quantityInput.val(+$quantityInput.val() + 1);
            }
        })();
    });
    /* ^ QUANTITY_INPUT ^ */

    /* v SELECT_STYLE v */
    $('.select_style').styler({
        selectSearch: true,
        selectSearchLimit: 6,
    });
    /* ^ SELECT_STYLE ^ */

    /* v CENA_POLZUNOK v */
    // http://egorkhmelev.github.io/jslider/
    // $('.slider_polzunok').slider({
    //     range: true,
    //   from: 200,
    //   to: 4000,
    //   //heterogeneity: ['50/50000'],
    //   step: 10,
    //   // dimension: '&nbsp;руб.',
    // });

    $(document).ready(function () {
        $('.slider_polzunok').slider({
            range: true,
            min: 0,
            max: 4000,
            values: [0, 2000],
            classes: {
                "ui-slider-handle": "ui-corner-all"
            },
            slide: function (event, ui) {
                //Поле минимального значения
                $(".dec1").val(ui.values[0]);
                //Поле максимального значения
                $(".dec2").val(ui.values[1]);
            }
        });

        $(".dec1").val($(".slider_polzunok").slider("values", 0));
        $(".dec2").val($(".slider_polzunok").slider("values", 1));
    });
    /* ^ CENA_POLZUNOK ^ */

    /* v DETAIL_TABS v */
    $('.detail_tabs_wrp').find('.detail_tab_wrp').click(function () {
        var tab_index = $(this).index();
        var $tabs_content = $(this).closest('.detail_tabs_wrp').siblings('.detail_tabs_content_wrp');

        $(this).addClass('selected').siblings().removeClass('selected');
        $tabs_content.find('.detail_tab_content_wrp').eq(tab_index).fadeIn(300).siblings().hide();
    });
    $('.detail_tabs_wrp').find('.detail_tab_wrp:first-child').click();
    /* ^ DETAIL_TABS ^ */

    /* v BOTTOM_TABS v */
    $('.bottom_tabs_wrp').find('.tab_wrp').click(function () {
        var tab_index = $(this).index();
        var $tabs_content = $(this).closest('.bottom_tabs_wrp').siblings('.bottom_tabs_content_wrp');

        $(this).addClass('selected').siblings().removeClass('selected');
        $tabs_content.find('.tab_content_wrp').eq(tab_index).fadeIn(300).siblings().hide();
    });
    $('.bottom_tabs_wrp').find('.tab_wrp:first-child').click();
    /* ^ BOTTOM_TABS ^ */

    /* v PHONE_NUMBER_INPUT v */
    $('.phone_number_input').mask('+7 (999) 999-99-99');
    /* ^ PHONE_NUMBER_INPUT ^ */

    /* v PROMOCODE_INPUT v */
    $('.promocode_input').mask('999-99-99-9999');
    /* ^ PROMOCODE_INPUT ^ */

    /* ↓ PERFECT_SCROLLBAR ↓ */
    $('.scrollbar').perfectScrollbar();
    /* ↑ PERFECT_SCROLLBAR ↑ */

    /* ↓ DELIVERY_ADRESS_BTNS ↓ */
    $('.adress_list').find('.delivery_adress_btn').click(function (event) {
        event.preventDefault();
        var $parent_li = $(this).closest('li');
        var $adress_location_list = $(this).closest('.adresses_list_content_wrp').siblings('.map_location_dots_wrp').find('.adress_location_list');
        var btn_index = $parent_li.index();
        $(this).addClass('selected');
        $parent_li.siblings('li').each(function () {
            $(this).find('.delivery_adress_btn').removeClass('selected');
        });
        $adress_location_list.children().each(function () {
            $(this).find('.delivery_adress_location_btn').removeClass('selected');
        });
        $adress_location_list.children().eq(btn_index).find('.delivery_adress_location_btn').addClass('selected');
    });
    $('.adress_location_list').find('.delivery_adress_location_btn').click(function () {
        event.preventDefault();
        var $parent_li = $(this).closest('li');
        var $adress_list = $(this).closest('.map_location_dots_wrp').siblings('.adresses_list_content_wrp').find('.adress_list');
        var btn_index = $parent_li.index();
        $(this).addClass('selected');
        $parent_li.siblings('li').each(function () {
            $(this).find('.delivery_adress_location_btn').removeClass('selected');
        });
        $adress_list.children().each(function () {
            $(this).find('.delivery_adress_btn').removeClass('selected');
        });
        $adress_list.children().eq(btn_index).find('.delivery_adress_btn').addClass('selected');
    });
    /* ↑ DELIVERY_ADRESS_BTNS ↑ */

    /* v POPUP v */
    $('.popup_click').click(function (event) {
        event.preventDefault();
        let body_width = $('body').outerWidth();
        $(this).addClass('popup_opened');
        $('body').addClass('overflow_hide').css({'width': body_width});
        $('.popup_wrp').delay(200).fadeIn(300).addClass('overflow_scroll');
        $('#scroll_up_btn, #scroll_down_btn').hide();
    });
    $('.popup').find('a').click(function () {
        let link_url = $(this).attr('href');
        window.location.href = link_url;
    });
    $('.closing_click').click(function (event) {
        event.preventDefault();
        var block_object = $(event.target);
        if (block_object.hasClass('closing_click')) {
            $('.popup_click').removeClass('popup_opened');
            $('.popup_wrp').fadeOut(500).removeClass('overflow_scroll').find('.popup').fadeOut(300);
            $('body').removeClass('overflow_hide').css({'width': 'auto'});
            $('#scroll_up_btn, #scroll_down_btn').show();
        }
    });

    $('.city_change_btn').click(function () {
        $('#city_change_popup').delay(200).fadeIn(500);
    });
    $('.add_to_basket_btn').click(function () {
        $('#added_to_basket_popup').delay(200).fadeIn(500);
    });
    $('.login_btn').click(function () {
        $('#login_popup').delay(200).fadeIn(500);
    });
    $('.btn-catalog').click(function () {
        $('#catalog_popup').delay(200).fadeIn(500);
    });
    $('.reviews_photo_gallery_btn').click(function () {
        $('#reviews_photo_gallery').delay(200).fadeIn(500);
    });
    $('.delivery_adress_change_btn').click(function () {
        $('#delivery_adress_change_popup').delay(200).fadeIn(500);
    });
    /* ^ POPUP ^ */

    /* v SCROLL_UP_BTN v */
    $('#scroll_up_btn').click(function () {
        var win_pos = $(window).scrollTop();
        $('#scroll_down_btn').attr('data-win-pos', win_pos).css({'z-index': 10});
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#scroll_down_btn').click(function () {
        var last_win_pos = $(this).attr('data-win-pos');
        $(this).css({'z-index': -1});
        $('#scroll_up_btn').css({'z-index': 10});
        $('html, body').animate({
            scrollTop: last_win_pos
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $('#scroll_up_btn').stop().css({'z-index': 11});
        } else {
            $('#scroll_up_btn').stop().css({'z-index': -1});
        }
    });
    /* ^ SCROLL_UP_BTN ^ */

    // slider catalog card
    $('.card-product__slider').slick({
        slideToShow: 1,
        arrows: false,
        dots: true,
        variableWidth: false,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 1000,
        fade: true,
    });
    $(".card-product__slider").mouseover(function () {
        $(this).slick("play");
    });
    $(".card-product__slider").mouseout(function () {
        $(this).slick("pause");
    });

});

$(function () {

    $(".rateYo").rateYo({
        starWidth: '20px',
        rating: 2.2,
        "starSvg": '<svg viewBox="0 0 22 21.02">\n' +
            '        <path d="M12,2l3.09,6.26L22,9.27l-5,4.87,1.18,6.88L12,17.77,5.82,21.02,7,14.14,2,9.27,8.91,8.26Z" transform="translate(-1 -1)"></path>\n' +
            '    </svg>'
    });

});

// input search
$(function () {
    $('.search_form__input').keydown(checkInput).keyup(checkInput);
});

function checkInput() {
    if ($('.search_form__input').val() === "") {
        $(this).parents('.search_wrp').removeClass('input-key');
    } else {
        $(this).parents('.search_wrp').addClass('input-key');
    }
}

// submenu
$(document).ready(function () {
    $(".category-menu__links").hover(function () {
        let id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.category-menu__links').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content').removeClass('active'); // 3
        content.addClass('active'); // 4
    });
});



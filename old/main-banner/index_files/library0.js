function strpos( haystack, needle, offset){	
	var i = haystack.indexOf( needle, offset );
	return i >= 0 ? i : false;
}

/*$(document).ready(function(){
	$(".filter-select").change(function(){  // Класс для тега select        
		var opt_id = $(this).find("option:selected").attr('id'); // Получаем id нажатого селекта, id равен скрытому чекбоксу		
		if($(this).attr('value')=="-1"){
			var splits = opt_id.split("_");
			$(".filtren").find('#ul_'+splits[1]).find('input[type="checkbox"]').each(function(){
				if($(this).attr('checked')=="checked"){
					$(this).click();
				}
			});
		}else{
			$("input#"+opt_id).parent().parent().find('input[type="checkbox"]').each(function(){
				if($(this).attr('checked')=="checked"){
					$(this).click();
				}
			});
			$("input#"+opt_id).click(); //Эмулируем нажатие на чекбокс равный выбранному option
		}
	});
});*/

$(document).ready(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();

	/* ++++++++++++++++++++++++++++ Menu Lighter ++++++++++++++++++++++++++++ */
    /*
	var objLighter = $('.menu .lighter');
	var objItems = $('.menu .items');
	var LighterPosition = 0;
	$(function(){
		function SaveLighterPosition()
		{
			s = $(objLighter).position();
			LighterPosition = s.left;
		}
		var wasFoundActive = false;
		var objElement = null;
		$('.menu .items a').first().each(function(){
			objElement = $(this);
		});
		$('.menu .items a[rel="active"]').each(function(){
			wasFoundActive = true;
			objElement = $(this);
		});
		p = $(objElement).position();
		c = $(objItems).position();
		s = $(objLighter).position();
		w = $(objElement).width();
		l = $(objLighter).width();
		d = (w - l) / 2;
		if(wasFoundActive)
		{
			m = p.left + d + c.left- s.left;
			$(objLighter).animate({left: '+='+m+'px'}, 'fast', function(){
				SaveLighterPosition();
			});
		} else {
			m = s.left;
			$(objLighter).animate({left: '-='+m+'px'}, 'fast', function(){
				SaveLighterPosition();
			});
		}
	});
	$('.menu .items a').hover(
		function(){
			$(objLighter).clearQueue();
			p = $(this).position();
			c = $(objItems).position();
			w = $(this).width();
			l = $(objLighter).width();
			d = (w - l) / 2;
			lp = $(objLighter).position().left;
			m = p.left + d + c.left - lp;
			if(m > 0)
			{
				$(objLighter).animate({left: '+='+m+'px'}, 'fast');
			} else {
				m = m * (-1);
				$(objLighter).animate({left: '-='+m+'px'}, 'fast');
			}
		},
		function(){
			s = $(objLighter).position();
			m = s.left - LighterPosition;
			if(m > 0)
			{
				$(objLighter).animate({left: '-='+m+'px'}, 'fast');
			} else {
				m = m * (-1);
				$(objLighter).animate({left: '+='+m+'px'}, 'fast');
			}
		}
	);
    */
	/* ---------------------------- Menu Lighter ---------------------------- */

	/* ++++++++++++++++++++++++++++++ Carousel ++++++++++++++++++++++++++++++ */
	$('#CarouselBlock').jCarouselLite({
		auto: 5000,
		speed: 1000,
		btnNext: "#moveNext",
		btnPrev: "#movePrev"
	});
	/* ------------------------------ Carousel ------------------------------ */

	/* ++++++++++++++++++++++++++++++ Gallery ++++++++++++++++++++++++++++++ */
	$('#GalleryBlock').jCarouselLite({
		speed: 700,
		btnNext: "#gMoveNext",
		btnPrev: "#gMovePrev",
		circular: false,
	});
    /* Комментим, т.к. Zoom отключен
	$('#GalleryBlock a').click(function(){
		if(!$(this).parent().hasClass("activeig"))
		{
			var elementID = $(this).attr("rel") + "_small";
			var elementIDLarge = $(this).attr("rel") + "_large";
			var ElementSW = $('#WallpaperPreview img').attr('width');
			var ElementSH = $('#WallpaperPreview img').attr('height');
			$('.content .clmn .drgt .gallery .scroll .item').removeClass("activeig");
			$(this).parent().addClass("activeig");
			$('#WallpaperPreview').animate({opacity: 0}, 700, function(){
				var opWidth = '+=';
				if(ElementSW <= $('#' + elementID).attr('width'))
				{
					opWidth = opWidth + ($('#' + elementID).attr('width') - ElementSW);
				} else {
					opWidth = '-=' + (ElementSW - $('#' + elementID).attr('width'));
				}
				var opHeight = '+=';
				if(ElementSH <= $('#' + elementID).attr('height'))
				{
					opHeight = opHeight + ($('#' + elementID).attr('height') - ElementSH);
				} else {
					opHeight = '-=' + (ElementSH - $('#' + elementID).attr('height'));
				}
				var imgHTML = '<img src="' + $('#' + elementID).attr('src') + '" width="' + ElementSW + '" height="' + ElementSH + '" alt="" /><span class="spacer"><!-- --></span>';
				$('#WallpaperPreview a').html(imgHTML);
				$('#WallpaperPreview').animate({opacity: 1}, 700);
				//$('#WallpaperPreview a').attr("href", $('#' + elementIDLarge).attr("src")).removeAttr("style").removeAttr("title").removeAttr("rel");
				$('#WallpaperPreview a img').attr('src', $('#' + elementID).attr('src')).animate({width: opWidth, height: opHeight}, 700, function(){
					$('#WallpaperPreview img').attr('width', $('#' + elementID).attr('width')).attr('height', $('#' + elementID).attr('height'));
					var codeHTML = '<a href="' + $('#' + elementIDLarge).attr("src") + '">' + imgHTML + '</a>';
					$('#WallpaperPreview').html(codeHTML);
					try {
						UpdateZoom();
					} catch(e) {}
				});
			});
		}
	});
	try {
		UpdateZoom();
	} catch(e) {}
    */
	/* ------------------------------ Gallery ------------------------------ */

	/* +++++++++++++++++++++++ DropDown Search Panel ++++++++++++++++++++++++ */
	$('.header .search input[name="InputSearch"]').focusin(function(){
		$('.ddsearch').animate({opacity:0}, 10, function(){
			$(this).css('display', 'block').animate({opacity: 0.93}, 'slow');
		});
	});
	$('.header .search input[name="InputSearch"]').focusout(function(){
		$('.ddsearch').animate({opacity:0}, 'slow', function(){
			$(this).css('display', 'none');
		});
	});
	$('.ddsearch .dditem a').click(function(){
		$('.header .search input[name="InputSearch"]').val($(this).text());
		$('.ddsearch').animate({opacity:0}, 'slow', function(){
			$(this).css('display', 'none');
		});
		return false;
	})
	/* ----------------------- DropDown Search Panel ------------------------ */

	/* ++++++++++++++++++++++++++ Filter CheckBox +++++++++++++++++++++++++++ */
	$('.filter input[type="checkbox"]').add('.filterprice input[type="checkbox"]').each(function(){
		var objCheckBox = $(this);
		$(objCheckBox).parent().addClass('chbxcntr');
		if($(objCheckBox).is(':checked'))
		{
			$(objCheckBox).parent().addClass('chbxcntrchecked');
		}
	});
	$('.filter .chbxcntr').add('.filterprice .chbxcntr').click(function(){
		$(this).toggleClass("chbxcntrchecked");
		var thisBlockChxb = $(this).parent();
		var objCheckBox = $('input', thisBlockChxb);
		if($(this).hasClass("chbxcntrchecked"))
		{
			objCheckBox.attr("checked", true);
		} else {
			objCheckBox.attr("checked", false);
		}
	});
	/* -------------------------- Filter CheckBox --------------------------- */

	/* ++++++++++++++++++++++++++ Filter SelectBox ++++++++++++++++++++++++++ */
	var paramsFilterSelectBox = {
		changedEl: '.colorpanel .params select',
		visRows: 7,
		scrollArrows: true
	}
	cuSel(paramsFilterSelectBox);
	/* -------------------------- Filter SelectBox -------------------------- */

	/* ++++++++++++++++++++++++++ Filter Gallery ++++++++++++++++++++++++++++ */
	var paramsGallery = {
		changedEl: '.drgt .gallery select',
		visRows: 4,
		scrollArrows: true
	}
	cuSel(paramsGallery);
	/* -------------------------- Filter Gallery ---------------------------- */

	/* ++++++++++++++++++++++++++++++ Review ++++++++++++++++++++++++++++++++ */
	$('#shw_rfld').click(function(){
		var ReviewField = $('#review_fld');
		var isHidden = $(ReviewField).is(":hidden");
		if(isHidden)
		{
			$(ReviewField).animate({opacity: 0}, 10, function(){
				$(this).slideDown(500, function(){
					$(this).animate({opacity: 1}, 700);
				});
			});
		} else {
			$(ReviewField).animate({opacity: 0}, 700, function(){
				$(this).slideUp(500);
			});
		}
	});
	/* ------------------------------ Review -------------------------------- */

	/* +++++++++++++++++++++++++++ Review Rating ++++++++++++++++++++++++++++ */
	$('#review_rating a').hover(
		function(){
			var CurrentPosition = $(this).attr("rel");
			if(CurrentPosition > 0 && CurrentPosition < 6)
			{
				for(indx = 1; indx <= CurrentPosition; indx++)
				{
					$('#review_rating a[rel="'+indx+'"]').addClass('hover');
				}
			}
		},
		function(){
			$('#review_rating a').removeClass('hover');
		}
	);
	$('#review_rating a').click(function(){
		var CurrentPosition = $(this).attr("rel");
		if(CurrentPosition > 0 && CurrentPosition < 6)
		{
			$('#review_rating a').removeClass('active');
			$('#review_ur').val(CurrentPosition);
			for(indx = 1; indx <= CurrentPosition; indx++)
			{
				$('#review_rating a[rel="'+indx+'"]').addClass('active');
			}
		}
	});
	/* --------------------------- Review Rating ---------------------------- */

	/* +++++++++++++++++++++++++++++ Question +++++++++++++++++++++++++++++++ */
	$('#shw_qfld').click(function(){
		var QuestionField = $('#question_fld');
		var isHidden = $(QuestionField).is(":hidden");
		if(isHidden)
		{
			$(QuestionField).animate({opacity: 0}, 10, function(){
				$(this).slideDown(500, function(){
					$(this).animate({opacity: 1}, 700);
				});
			});
		} else {
			$(QuestionField).animate({opacity: 0}, 700, function(){
				$(this).slideUp(500);
			});
		}
	});
	/* ----------------------------- Question ------------------------------- */

	/* +++++++++++++++++++++++++++++++ Tabs +++++++++++++++++++++++++++++++++ */
	$('.tabs .tlinks a').click(function(){
		var TabsCount = $('.tabs .tlinks a').length;
		var OpenPage = $(this).attr("rel");
		var TabPosition = -1;
		var CurrentTab = -1;
		$('.tabs .tlinks a').map(function(index){
			if($(this).attr("rel") == OpenPage)
			{
				TabPosition = index;
			}
		});
		if(TabPosition > -1)
		{
			TabPosition++;
			$('.tabs .tlinks a').map(function(index){
				if($(this).hasClass("activetab"))
				{
					CurrentTab = index;
				}
			});
			if(CurrentTab > -1)
			{
				CurrentTab++;
				if(CurrentTab != TabPosition && TabPosition <= TabsCount)
				{
					$('.tabs .tlinks a').removeClass("activetab");
					$('.tabs .tlinks .lc').removeClass("lcr");
					$('.tabs .tlinks .rclst').removeClass("rclstactive");
					$('.tabs .tlinks a').map(function(index){
						if((index+1) == TabPosition)
						{
							$(this).addClass("activetab");
							if(TabPosition == TabsCount)
							{
								$('.tabs .tlinks .rclst').addClass("rclstactive");
							}
						}
						if(index == TabPosition)
						{
							$('.lc', this).addClass("lcr");
						}
					});
					$('.tabs .tpages .page_define').css("display", "none");
					$('.tabs .tpages #' + OpenPage).css("display", "block");
				}
			}
		}
	});
	/* ------------------------------- Tabs --------------------------------- */

	/* +++++++++++++++++++++++++++++ Tooltips +++++++++++++++++++++++++++++++ */
	function SimpleTooltip(TargetItems, TooltipClassName){
		$(TargetItems).each(function(i){
			$('body').append('<div class="' + TooltipClassName + '" id="' + TooltipClassName + "_" + i + '"><span class="tms"><span class="tls"><!-- --></span><span class="tt_text">' + $(this).attr('title') + '</span><span class="trs"><!-- --></span></span></div>');
			var obTooltip = $("#" + TooltipClassName + "_" + i);
			if($(this).attr("title") != "" && $(this).attr("title") != "undefined")
			{
				$(this).removeAttr("title").mouseover(function(){
							obTooltip.css({opacity: 1, display: "none"}).fadeIn(400);
				}).mousemove(function(kmouse){
					var BorderTop = $(window).scrollTop();
					var BorderRight = $(window).width();
					var LeftPos;
					var TopPos;
					var LeftOffset = 15;
					var TopOffset = -39;
					if(BorderRight - (LeftOffset * 2) >= obTooltip.width() + kmouse.pageX){
						LeftPos = kmouse.pageX + LeftOffset;
					} else{
						LeftPos = BorderRight - obTooltip.width() - LeftOffset;
					}
					if(BorderTop + (TopOffset * 2) >= kmouse.pageY - obTooltip.height()){
						TopPos = BorderTop + TopOffset;
					} else{
						TopPos = kmouse.pageY - obTooltip.height() - TopOffset;
					}
					obTooltip.css({left: LeftPos, top: TopPos});
				}).mouseout(function(){
						obTooltip.css({left: "-9999px"});
				});
			}
		});
	}
	SimpleTooltip("a[rel='tooltip']", "tooltip");
	/* ----------------------------- Tooltips ------------------------------- */

	/* +++++++++++++++++++++++++++ Popup Window +++++++++++++++++++++++++++++ */
	$('.info .links .howmuch a').click(function(){
		var winTitle = $(this).text();
		OpenWindow(winTitle, 410, 305, 'HowMuchINeed');
	});
	$('.overlay').click(function(){
		var thisOverlay = $(this);
		var thisPopup = null;
		$('.popup').each(function(){
			thisPopup = $(this);
			$('.htmldata', thisPopup).add('.title', thisPopup).animate({opacity: 0}, 500, function(){
				$(thisPopup).animate({opacity: 0, width: '-='+$(thisPopup).width(), height: '-='+$(thisPopup).height(), marginLeft: '+='+($(thisPopup).width()/2-1), marginTop: '+='+($(thisPopup).height()/2-1)}, 500, function(){
					$(thisOverlay).animate({opacity: 0}, 500, function(){
						$(this).css('display', 'none');
						$(thisPopup).remove();
					});
				});
			});
		});
	});
	/* --------------------------- Popup Window ----------------------------- */

	$('.personal .sblock').hover(
		function(){
			$(this).css('background-position', 'left bottom');
		},
		function(){
			$(this).css('background-position', 'left top');
		}
	);
    
    /* ↓ FOOTER_MENU ↓ */
	$('.footer_menu ul.btns li').click(function(){
		var $this = $(this);
		var punkt_index = $this.index();
		
		if($this.hasClass('selected')){
			$this.removeClass('selected');
			$('.footer_menu ul.menu_content').children().eq(punkt_index).slideUp(300);
		}else{
			$this.addClass('selected').siblings().removeClass('selected');
			$('.footer_menu ul.menu_content').children().eq(punkt_index).slideDown(300).siblings().slideUp(300);
		}
	});
	/* ↑ FOOTER_MENU ↑ */
});

/* +++++++++++++++++++++++++++++++ Preloader ++++++++++++++++++++++++++++++++ */
var cSpeed=9;
var cWidth=32;
var cHeight=32;
var cTotalFrames=8;
var cFrameWidth=32;
var cImageSrc='/bitrix/templates/espartos/images/elements/preloader.png';
var cImageTimeout=false;
var cIndex=0;
var cXpos=0;
var SECONDS_BETWEEN_FRAMES=0;
function startAnimation()
{
	document.getElementById('loaderImage').style.backgroundImage='url('+cImageSrc+')';
	document.getElementById('loaderImage').style.width=cWidth+'px';
	document.getElementById('loaderImage').style.height=cHeight+'px';
	FPS = Math.round(100/cSpeed);
	SECONDS_BETWEEN_FRAMES = 1 / FPS;
	setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES/1000);
}
function continueAnimation()
{
	cXpos += cFrameWidth;
	cIndex += 1;
	if (cIndex >= cTotalFrames)
	{
		cXpos =0;
		cIndex=0;
	}
	if(document.getElementById('loaderImage'))
	{
		document.getElementById('loaderImage').style.backgroundPosition=(-cXpos)+'px 0';
		setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES*1000);
	}
}
function imageLoader(s, fun)
{
	clearTimeout(cImageTimeout);
	cImageTimeout=0;
	genImage = new Image();
	genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
	/*genImage.onerror=new Function('alert(\'Could not load the image\')');*/
	genImage.src=s;
}
/*new imageLoader(cImageSrc, 'startAnimation()');*/
/* ------------------------------- Preloader -------------------------------- */

/* +++++++++++++++++++++++++++ Preloader filter +++++++++++++++++++++++++++++ */
var cFilterSpeed=9;
var cFilterWidth=8;
var cFilterHeight=8;
var cFilterTotalFrames=22;
var cFilterFrameWidth=8;
var cFilterImageSrc='/bitrix/templates/espartos/images/elements/preloader_filter.png';
var cFilterImageTimeout=false;
var cFilterIndex=0;
var cFilterXpos=0;
var cFilterPreloaderTimeout=false;
var FILTER_SECONDS_BETWEEN_FRAMES=0;
function startFilterAnimation()
{
	document.getElementById('preloaderFilter').style.backgroundImage='url('+cFilterImageSrc+')';
	document.getElementById('preloaderFilter').style.width=cFilterWidth+'px';
	document.getElementById('preloaderFilter').style.height=cFilterHeight+'px';
	FILTER_FPS = Math.round(100/cFilterSpeed);
	FILTER_SECONDS_BETWEEN_FRAMES = 1 / FILTER_FPS;
	cFilterPreloaderTimeout=setTimeout('continueFilterAnimation()', FILTER_SECONDS_BETWEEN_FRAMES/1000);
}
function continueFilterAnimation()
{
	cFilterXpos += cFilterFrameWidth;
	cFilterIndex += 1;
	if (cFilterIndex >= cFilterTotalFrames) {
		cFilterXpos =0;
		cFilterIndex=0;
	}
	if(document.getElementById('preloaderFilter'))
		document.getElementById('preloaderFilter').style.backgroundPosition=(-cFilterXpos)+'px 0';
	cFilterPreloaderTimeout=setTimeout('continueFilterAnimation()', FILTER_SECONDS_BETWEEN_FRAMES*1000);
}
function stopFilterAnimation()
{
	clearTimeout(cFilterPreloaderTimeout);
	cFilterPreloaderTimeout=false;
}
function imageFilterLoader(s, fun)
{
	clearTimeout(cFilterImageTimeout);
	cFilterImageTimeout=0;
	genImage = new Image();
	genImage.onload=function (){cFilterImageTimeout=setTimeout(fun, 0)};
	genImage.onerror=new Function('alert(\'Could not load the image\')');
	genImage.src=s;
}
/*new imageFilterLoader(cFilterImageSrc, 'startFilterAnimation()');*/
/* ---------------------------- Preloader filter ----------------------------- */

function UpdateZoom()
{
	$('#WallpaperPreview a').jqzoom({
		zoomType: 'reverse',
		zoomWidth: 375,
		zoomHeight: $('#WallpaperPreview img').attr('height') - 10,
		xOffset: 20,
		preloadText: 'Загрузка',
		lens:true,
		preloadImages: false,
		alwaysOn:false
	});
}

function OpenWindow(winTitle, winWidth, winHeight, winIdentifier)
{
	$('.overlay').animate({opacity: 0}, 10, function(){
		$(this).css({'top': '0', 'left': '0', 'min-width': '1000px', 'width': '100%', 'height': $(document).height(), 'display': 'block'}).animate({opacity: 0.5}, 500, function(){
			var strHTMLCode = '<div class="popup"><div class="inside"><a href="javascript:void(0);" onclick="fClosePopup();" class="closepopup"></a><div class="title"><div class="txt">' + winTitle + '</div></div><div class="wrap" style="height:' + (winHeight-85) + 'px;"><div class="inner"><div class="htmlcode" style="height:' + (winHeight-85-20) + 'px;"><div class="htmldata"></div></div><div class="preloader"><div id="loaderImage"></div></div></div></div></div></div>';
			$('body').append(strHTMLCode);
			$('.popup').animate({opacity: 0}, function(){
				$(this).css('display', 'block').animate({opacity: 1, width: '+='+winWidth, height: '+='+winHeight, marginLeft: '-='+(winWidth/2), marginTop: '-='+(winHeight/2)}, 500, function(){
					$('.popup .title').animate({opacity: 0}, 10, function(){
						$(this).css({'display': 'block', 'height': '68px'}).animate({opacity: 1}, 500, function(){
							new imageLoader(cImageSrc, 'startAnimation()');
							if($('#' + winIdentifier).length)
							{
								setTimeout('InsertFromPage("' + winIdentifier + '")', 1000);
							}
						});
					});
				});
			});
		});
	});
}

function InsertFromPage(winIdentifier)
{
	$('.popup .preloader').animate({opacity: 0}, 300, function(){
		$(this).remove();
		$('.popup .htmldata').animate({opacity: 0}, 10, function(){
			$(this).css('display', 'block').html($('#' + winIdentifier).html()).each(function(){
				var paramsPopupSelectBox = {
					changedEl: '.popup .htmldata select',
					visRows: 5,
					scrollArrows: true
				}
				cuSel(paramsPopupSelectBox);
				$(this).animate({opacity: 1}, 500, function(){
				});
			});
		});
	});
};

function fPlusOne(strSelector)
{
	if(strSelector)
	{
		var curCount = parseInt($(strSelector).val());
		curCount++;
		if(curCount > 99) curCount = 99;
		$(strSelector).val(curCount);
	}
}

function fMinusOne(strSelector)
{
	if(strSelector)
	{
		var curCount = parseInt($(strSelector).val());
		curCount--;
		if(curCount < 1) curCount = 1;
		$(strSelector).val(curCount);
	}
}

function fClosePopup()
{
	var thisOverlay = $('.overlay');
	var thisPopup = null;
	$('.popup').each(function(){
		thisPopup = $(this);
		$('.htmldata', thisPopup).add('.title', thisPopup).animate({opacity: 0}, 500, function(){
			$(thisPopup).animate({opacity: 0, width: '-='+$(thisPopup).width(), height: '-='+$(thisPopup).height(), marginLeft: '+='+($(thisPopup).width()/2-1), marginTop: '+='+($(thisPopup).height()/2-1)}, 500, function(){
				$(thisOverlay).animate({opacity: 0}, 500, function(){
					$(this).css('display', 'none');
					$(thisPopup).remove();
				});
			});
		});
	});
}

function ya_goal(goal_name){
    if(typeof yaCounter26260449 !== 'undefined'){
        yaCounter26260449.reachGoal(goal_name);
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

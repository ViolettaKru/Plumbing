$(document).ready(function(){
	
	
	$('.telButton .telButton_background').hover(
		function() {
			var v = $('.telButton_hover');
			if(!v.hasClass('fHovered')) {
				v.stop().css('display','block').animate({'opacity':1},1000).addClass('fHovered');
			}
		},
		function () {
			var v = $('.telButton_hover');
			if(v.hasClass('fHovered')) {
				v.stop().animate({'opacity':0},1000,function() {
					$(this).css('display','none');
				}).removeClass('fHovered');
			}
		}
		
		);
	
 	
 	$('.telButton.anim').css({'position':'absolute','top':'-100px','right':'50px','transition': "top 0.9s cubic-bezier(.65, 1.95, .03, .32) 0.5s"});	
	
	
	telButtonReturn();
	
	$(window).scroll(function() {
		
		telButtonReturn();
		
	});
	
	$(window).resize(function() {
		
		telButtonReturn();
		
	});
	
	
	
	
	function telButtonReturn() {
		var wHeight = getWindowHeight();
		
		var sHeight = $(window).scrollTop();
		
		var result = wHeight + sHeight - 100;
		
		$('.telButton.anim').css({'position':'absolute','top' : result + 'px','right':'50px'});
	}
	
	
	function getWindowHeight() {
		
		var windowHeight;
		
		windowHeight = $(window).height();
		
		return windowHeight;
		
	}
});
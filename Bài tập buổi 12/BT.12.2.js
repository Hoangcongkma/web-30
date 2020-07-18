$(document).ready(function() {
	
	$('#menu li').on({
		mouseenter: function(){
			$(this).children('.sub-menu').slideDown();
		},
		mouseleave: function(){
			$(this).children('.sub-menu').slideUp();
		}
	});

	$('.sub-menu li').on({
		mouseenter: function(){
			$(this).children('.sub-sub-menu').slideDown();
		},
		mouseleave: function(){
			$(this).children('.sub-sub-menu').slideUp();
		}
	});
});
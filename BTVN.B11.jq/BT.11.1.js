$(document).ready(function(){
	
	$('.panel').on('click', function(){
		$('.panel').removeClass('add-color');
		$('.content').removeClass('show ');
		$('.panel').children('i').removeClass('fa-minus-square');
		$('.panel').children('i').addClass('fa-plus-square');

		$(this).next().toggleClass('show');
		$(this).toggleClass('add-color');
		$(this).children('i').removeClass('fa-plus-square');
		$(this).children('i').addClass('fa-minus-square');
		
	});

	
});
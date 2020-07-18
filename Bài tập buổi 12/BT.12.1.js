$(document).ready(function() {

	$('li img').on('click', function(){
		var src = $(this).attr('src');
		$('.light-box').toggle();
		$('.opan').toggle();
		$('.box-img img').attr('src', src);
		$('.caption').html(this.alt);
	});
	
	$('.close').on('click', function(){
		$('.light-box').toggle();
		$('.opan').toggle();
	});
});
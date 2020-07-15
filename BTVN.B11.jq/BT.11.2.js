$(document).ready(function(){
	$('.button-add').on('click', function(){
		if ($('.input-text').val() != '') {
			
			var addClassTask = $('<div class="task"></div>');
			var addText = $('<p></p>').text($('.input-text').val());
			var del = $('<i class="fa fa-trash" aria-hidden="true"></i>');

			$('.container').append(addClassTask);

			addClassTask.append(addText, del);

			
			$('.input-text').val('');
		} else {
			alert('Nhập nội dung !');
		}
	});

	$('.container').on('click', '.fa-trash', function(){
		$(this).parent('.task').remove();
	});

	$('.container').on('mouseenter', '.task', function(){
		$(this).toggleClass('mouse-in');;

		var check = $('<i class="fa fa-check" aria-hidden="true"></i>');

		$(this).prepend(check);
	}, );

	$('.container').on('mouseleave', '.task', function(){
		$(this).toggleClass('mouse-in');;

		var check = $('<i class="fa fa-check" aria-hidden="true"></i>');

		$(this).children('.fa-check').remove();
	});

	$('.container').on('click', '.fa-check', function(){
		$(this).next().toggleClass('deco');;
	});

	$('.container').find('.task:odd').css('background-color','red');
});
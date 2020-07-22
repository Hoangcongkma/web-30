	$(document).ready(function($){
		var text =$ ('#myText');
		console.log(text);
		console.log(text.parent());
		console.log(text.parents());//lấy cha trực tiếp
		console.log(text.parents('body'));//lấy cả selector cha
		console.log(text.parents('body'));

		var myDiv = $('.container');
		console.log(myDiv.find('.myText'));
		console.log(myDiv.children());//con trực tiếp

        console.log(text.next());//text 2
		console.log($('#myText-2').prev());//text 1
		console.log($('#myText-2').siblings());//tất cả anh em cùng cấp
		console.log($('#myText-2').siblings('a'));//lọc theo thẻ a

		console.log($('p').first());
		console.log($('p').last());
		console.log($('p').eq(2));

		console.log($('#myText-2').siblings().first());
		console.log($('#myText-2').siblings().filter('p'));
		console.log($('#myText-2').siblings().not('p'));

		$ ('.myDiv').hide(); 
		$ ('.myDiv').show(); 

		$('#btn-click').on('click',function(){
			$('.myDiv').toggle(6000,function(){
				$('.myDiv-2').toggle(7000,function(){
				alert('Đã xong thưa ông chủ');
			})
		})
	

		
	})
		// $('.myDiv-2').fadeIn(3000);//hiển thị ra đậm dần trong 3s
		// $('.myDiv-2').fadeOut(4000);//ẩn đi bằng mờ dần trong 3s;
		// $('.myDiv-2').fadeto(4000,0.6);//thay đổi độ mờ tới 0.6 trong 4 s;

		// $('.myDiv-2').slideDown(4000);//hiển thị bằng cách tăng height
		// $('.myDiv-2').slideUp(4000);//ẩn đi bằng cách giảm height




	})
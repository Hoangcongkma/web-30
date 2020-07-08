//Lấy danh sách tab-menu
var tabMenu = document.getElementsByClassName('tab-menu');
console.log(tabMenu);

// Lặp qua từng menu để gán click event
for (var i = 0; i < tabMenu.length; i++) {
	tabMenu[i].addEventListener('click', function(){
		
		// Ẩn content, background li màu trắng
		for (var j = 0; j < tabMenu.length; j++) {
			tabMenu[j].children[1].style.display = 'none';
			tabMenu[j].style.backgroundColor = '#fff';
			tabMenu[j].children[0].style.color = '#000';
		}

		// show content, this = div.tab-menu
		//children[1] = div.content, children[0] = p
		this.children[1].style.display = 'block';
		this.style.backgroundColor = "grey";
		this.children[0].style.color = '#fff';
	});
}
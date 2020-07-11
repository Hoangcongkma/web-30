
var tabMenu = document.getElementsByClassName('tab-menu');
console.log(tabMenu);

for (var i = 0; i < tabMenu.length; i++) {
	tabMenu[i].addEventListener('click', function(){
		
		for (var j = 0; j < tabMenu.length; j++) {
			tabMenu[j].children[1].style.display = 'none';
			tabMenu[j].style.backgroundColor = '#fff';
			tabMenu[j].children[0].style.color = '#000';
		}
		this.children[1].style.display = 'block';
		this.style.backgroundColor = "blue";
		this.children[0].style.color = '#fff';
	});
}
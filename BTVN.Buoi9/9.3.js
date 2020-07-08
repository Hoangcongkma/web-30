var text = document.getElementById('text');

function largeText() {
	if (text.style.fontSize == "") {
		text.style.fontSize = '1.0em';
	}
	text.style.fontSize = parseFloat(text.style.fontSize) + 0.4 + 'em'; 
}
function smallText() {
	if (text.style.fontSize == "") {
		text.style.fontSize = '1.0em';
	}
	text.style.fontSize = parseFloat(text.style.fontSize) - 0.4 + 'em';
}
function defaultText() {
	text.style.fontSize = '1.0em';
}
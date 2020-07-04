
function nGiaiThua(n) {
	var p = 1, sum = 0;
	for (var i = 1; i <= n; i++) {
		p = p * i;
		sum = sum + 1/p;
	}
	return sum;
}
var n = prompt('n = ', '');
var sum = nGiaiThua(n); 
document.write(sum); 
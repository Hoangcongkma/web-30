var n = prompt('N = ', '');
console.log(n);
var m = prompt('M = ', '');
console.log(m);
var k = prompt('K = ', '');
console.log(k);
var sum = 0;
if (n <= m) {
	for (var i = n; i <= m; i++) {
		if (i % k == 0) {
			sum = (parseInt(sum)) + i;
		}
	}
	document.write(sum);
	console.log(sum);
} else {
	console.log('N và M nhập ko hợp lệ!');
	document.write('N và M nhập ko hợp lệ!');
}
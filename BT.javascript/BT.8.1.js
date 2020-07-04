
var x = 0;
for (var i = 1; i <= 100; i++) {
	if ((i % 3) == 0 || (i % 7) == 0) {
		x += 1;
		document.write(i, '-');
	}
}
document.write('Số số chia hết cho 3 hoặc 7: ', x);
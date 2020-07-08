function selectAll() {
	var checkBoxs = document.getElementsByName('box');

	for (var i = 0; i < checkBoxs.length; i++) {
		checkBoxs[i].checked = true;
	}
}

function unselectAll() {
	var checkBoxs = document.getElementsByName('box');

	for (var i = 0; i < checkBoxs.length; i++) {
		checkBoxs[i].checked = false;
	}
}
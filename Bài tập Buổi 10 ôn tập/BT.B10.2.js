var thongbao = document.getElementsByClassName('thongbao');

document.frm.name.addEventListener('change', function() {
        var nameValue = this.value;
        var msg_error = '';

        if (nameValue == '') {
            msg_error = 'Yêu cầu nhập họ và tên';
        }
        else if (nameValue.length < 8) {
            msg_error = 'Độ dài phải hơn 8 ký tự';   
        }
        else {
            msg_error = '';
        };
        this.nextElementSibling.innerHTML = msg_error;

    });

document.frm.phonenumber.addEventListener('change', function() {
	var num = this.value;
	var msg_error = '';

    if (num == '') {
            msg_error = 'Yêu cầu nhập số điện thoại';
        }
    else {
    	msg_error = '';
    }
    this.nextElementSibling.innerHTML = msg_error;
});

document.frm.email.addEventListener('change', function() {
	var x = this.value;
	var msg_error = '';
     var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (x == ''){
        msg_error = 'Yêu cầu nhập email';
    }
    if (filter.test(String(x).toLowerCase())){
        msg_error = '' ;
    }
    else {
        msg_error= 'Email không hợp lệ';
    }
    this.nextElementSibling.innerHTML = msg_error;
});

document.frm.password.addEventListener('change', function() {
	var x = this.value;
	var msg_error = '';
	if (x == '') {
        msg_error = 'Yêu cầu nhập mật khẩu';
    }
    this.nextElementSibling.innerHTML = msg_error;
});

document.frm.testpass.addEventListener('change', function() {
	var x = this.value;
	var msg_error = '';
    
	if (x == '') {
        msg_error = 'Yêu cầu xác nhận mật khẩu';
    }
    if (x !== document.frm.password.value) {
        msg_error = 'Yêu cầu xác nhận mật khẩu';
    }
    this.nextElementSibling.innerHTML = msg_error;
});

function test() {
	if(document.frm.name.value == ''){
		document.frm.name.nextElementSibling.innerHTML= 'Yêu cầu nhập họ và tên';
	}
     if (document.frm.email.value == ''){
        document.frm.email.nextElementSibling.innerHTML= 'Yêu cầu nhập email';
    }
     if (document.frm.phonenumber.value == ''){
        document.frm.phonenumber.nextElementSibling.innerHTML= 'Yêu cầu nhập số điện thoại';
    }
     if (document.frm.password.value == ''){
        document.frm.password.nextElementSibling.innerHTML= 'Yêu cầu nhập mật khẩu';
    }
     if (document.frm.testpass.value == ''){
        document.frm.testpass.nextElementSibling.innerHTML= 'Yêu cầu xác nhận mật khẩu';
    }
     if (document.frm.testpass.value !== document.frm.password.value){
        document.frm.testpass.nextElementSibling.innerHTML = 'Mật khẩu khác nhau';
    }
    };

function test3(){   
    if (thongbao[0].innerHTML == '' && thongbao[1].innerHTML == '' && thongbao[2].innerHTML == '' && thongbao[3].innerHTML == '' && thongbao[4].innerHTML == '' && thongbao[5].innerHTML == ''){
        alert('Thành công');
    } else {
        test();
    }
}

function test2(){
    test() ;
    test3();
};   

function deleteAll(){
	document.frm.name.value == '';
	document.frm.email.value == '';
	document.frm.phonenumber.value == '';
	document.frm.password.value == '';
	document.frm.testpass.value == '';
}   
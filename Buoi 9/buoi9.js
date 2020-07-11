 var element=document.getElementById('myText');
 console.log(element);
 element.innerHTML='<h1>Xin chào cả thế giới nhé</h1>';
 var contentHTMl = element.innerHTML;
 console.log(contentHTMl);

 var elements=document.getElementsByClassName('content');
 console.log(elements[0]);

  var elements2=document.getElementsByClassName('h5');
 console.log(elements2[1]);

 var elements3=document.getElementById('link_fb');
 console.log(elements3.href);

elements3.style.color= "red";
elements3.style.fontSize= "25px";

function buttonclick(){
	elements3.style.color="blue";
}
var button =document.getElementById('button');
console.log('button');
button.addEventListener('click',buttonclick) ;

button.addEventListener('click',function(){
	this.style.color="green";
})

function changeColorOver(element){
	element.style.color = "red";

}

function changeColorOut(element){
	element.style.color ="green";
}
function loadPage (){
	alert('trang web đã được tải');
}
function onBlurTest(element){
	var val = element.value;
	val = val.toUpperCase();
	element.value=val;

}
function onFocusTest(element){
	element.style.background="red";
}
function onchangeTest(element){
	var val= element.value;
	alert(val);

}
function myFunctionSubmit(){
	alert('Bạn đang submit form');
}

var element_a =document.getElementById('link_fb')
console.log(element_a.parentNode.parentNode);

var element_body=document.getElementByTagName('body')
console.log(element_body.children[0]);




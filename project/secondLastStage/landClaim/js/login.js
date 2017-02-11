var line = new Vivus(
    'draw1', 
    {type: 'oneByOne', duration: 50, start: 'autostart', dashGap: 20, forceRender: false},
    function () {
        if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
        }
    })
var user = document.getElementById('user');
var txt1 = document.getElementById('txt1');
var pwd = document.getElementById('password');
var txt2 = document.getElementById('txt2');
var open1 = false,open2=false;
//var log=document.getElementById('log');
user.onblur = function(){
	var reg = /^[a-z]+$/i;
	if(reg.test(user.value)){
		txt1.innerHTML = "用户名输入正确";
		txt1.style.color = "#0f0"
		open1 = true;
	}else{
		txt1.innerHTML = "请输入正确的用户名格式";
		txt1.style.color = "#f00";
		open1 = false;
	}
}
pwd.onblur = function(){
	var reg1 = /^[a-z]+$/i;
	if(reg1.test(user.value)){
		txt2.innerHTML = "密码正确";
		txt2.style.color = "#0f0";
		open2 = true;
	}else{
		txt2.innerHTML = "密码错误，请重新输入";
		txt2.style.color = "#f00";
		open2 = false;
	}
}
/*if(open1 && open2){
	alert(2)
	$('#log').click(function(){
		txt2.innerHTML = "密码或用户名输入正确";
		txt2.style.color = "#f00";
		window.location='index.html';
	})
}else{
	$('#log').click(function(){
		txt2.innerHTML = "密码或用户名输入错误，请重新输入";
		txt2.style.color = "#f00";
		window.location='#';
	})
}*/
$('#log').click(function(){
	if(open1 && open2){
		txt2.innerHTML = "密码或用户名输入正确";
		txt2.style.color = "#0f0";
		window.location='index.html';
	}else{
		txt2.innerHTML = "密码或用户名输入错误，请重新输入";
		txt2.style.color = "#f00";
		window.location='#';
	}
		
	})
var guide=document.getElementById('guide');
var guide1=document.getElementsByClassName('guide1')[0];
var nav=document.getElementsByClassName('nav');
var backTop=document.getElementsByClassName('backTop')[0];
var userName=document.getElementById('userName');
var tip1=document.getElementsByClassName('tip1')[0];
var psw=document.getElementById('password');
var tip2=document.getElementsByClassName('tip2')[0];
var tPsw=document.getElementById('tPassword');
var tip3=document.getElementsByClassName('tip3')[0];
var idenNum=document.getElementById('idenNum');
var tip4=document.getElementsByClassName('tip4')[0];
var email=document.getElementById('email');
var tip5=document.getElementsByClassName('tip5')[0];
var telPhone=document.getElementById('telphone');
var tip6=document.getElementsByClassName('tip6')[0];
var uName=document.getElementById('name');
var tip7=document.getElementsByClassName('tip7')[0];
var check=document.getElementById('check');
var next=document.getElementById('next');
var ind=document.getElementsByClassName('ind')[0];


ind.onclick=function(){
	location.href='index.html';
}
window.onscroll = function() {
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollT > 200) {
		backTop.style.display = "block";
	} else {
		backTop.style.display = "none";
	}
	backTop.onclick=function(){
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
}
backTop.onmouseover=function(){
//	backTop.style.backgroundPosition=0 42px;
    this.style.backgroundColor='#f00'
	
}

guide1.onmouseleave=function(){
	guide1.style.display='none';
}
for(var i=0,len=nav.length;i<len;i++){
	//alert(len)
	nav[i].index=i;
	nav[i].onmouseover=function(){
		var _index=this.index;
		for(var j=1;j<len;j++){
			nav[j].className='fl nav';
		}
		nav[_index].className='fl nav active';
		if(_index===3){
			guide1.style.display='block';
		}
		if(_index===4){
			guide1.style.display='none';
		}
	}
	
}
var open1=false;
var open2=false;
var open3=false;
var open4=false;
var open5=false;
var open6=false;
var open7=false;
var open8=false;
var open9=false;
var open10=false;
userName.onblur=function(){
	var req1=/^[\w]{6,30}$/;
	if(req1.test(userName.value)){
		tip1.innerText='用户名格式正确';
		tip1.style.color='#333';
		open1=true;
	}else if(userName.value===''){
		tip1.innerText='用户名不能为空';
		tip1.style.color='#f00';
		open1=false;
	}else{
		tip1.innerText='请输入正确的6-30位字母、数字、_开头的用户名';
		open1=false;
	}
}

psw.onblur=function(){
	var req2=/^[\w]{6,20}$/;
	if(req2.test(psw.value)){
		if(psw.value.length<=6){
			tip2.innerText='密码安全等级较低,建议修改';
			tip2.style.color='#FB8508';
			open2=true;
		}else if(psw.value.length<=15){
			tip2.innerText='密码安全等级一般,建议修改';
			tip2.style.color='#FB8508';
			open2=true;
		}else if(psw.value.length>15){
			tip2.innerText='密码安全等级较高';
			tip2.style.color='#FB8508';
			open2=true;
		}
	}else if(psw.value===''){
		tip2.innerText='密码不能为空';
		tip2.style.color='#F00';
			open2=false;
	}else{
		tip2.innerText='请输入正确的6-20位字母、数字或符号';
		open2=false;
	}
}

tPsw.onblur=function(){
	if(psw.value===tPsw.value&&psw.value!=''&&tPsw.value!=''){
		tip3.innerText='密码输入正确！'
		tip3.style.color='#333'
		open3=true;
	}else if(tPsw.value===''){
		tip3.innerText='密码不能为空！'
		tip3.style.color='#f00'
		open3=false;
	}else{
		tip3.innerText='确认密码与密码不同，请重新输入！';
		tip3.style.color='#f00'
		open3=false;
	}
}
idenNum.onblur=function(){
	var req4=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
	if(req4.test(idenNum.value)){
		tip4.innerText='证件号码输入正确。';
		tip4.style.color="#333";
		open4=true;
	}else if(idenNum.value===''){
		tip4.innerText='证件号码不能为空';
		tip4.style.color="#f00";
		open4=false;
	}else{
		tip4.innerText='证件号码格式输入不正确，请重新输入！';
		tip4.style.color="#f00";
		open4=false;
	}
}
email.onblur=function(){
	var req5=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(req5.test(email.value)){
		tip5.innerText='邮箱输入正确';
		tip5.style.color="#333";
		open5=true;
	}else if(email.value===''){
		tip5.innerText='邮箱不能为空';
		tip5.style.color="#f00";
		open5=false;
	}
	else{
		tip5.innerText='邮箱格式输入不正确,请重新输入';
		tip5.style.color="#f00";
		open5=false;
	}
}
telPhone.onblur=function(){
	var req6=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	if(req6.test(telPhone.value)){
		tip6.innerText='手机号码格式输入正确';
		tip6.style.color="#333";
		open6=true;
	}else if(telPhone.value===''){
		tip6.innerText='手机号码不能为空';
		tip6.style.color="#f00";
		open6=false;
	}else{
		tip6.innerText='手机号码格式输入不正确，请重新输入';
		tip6.style.color="#f00";
		open6=false;
	}
}
uName.onblur=function(){
	if(uName.value!=''){
		tip7.innerText='姓名格式正确';
		tip7.style.color="#333";
		open7=true;
	}else{
		tip7.innerText='姓名不能为空，请重新输入';
		tip7.style.color="#f00";
		open7=false;
	}
}
	check.onclick=function(){
		if(open8===false){
			open8=true;
		}else{
			open8=false;
		}
	}

		next.onclick=function(){
			if(!(open1&&open2&&open3&&open4&&open5&&open6&&open7&&open8)){
				alert('请将信息补充完整');
			}else{
				location.href='wrong.html'
			}
		}
		
	
	
	

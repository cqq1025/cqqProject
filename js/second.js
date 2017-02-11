var guide=document.getElementById('guide');
var guide1=document.getElementsByClassName('guide1')[0];
var nav=document.getElementsByClassName('nav');
var exit=document.getElementsByClassName('exit')[0];
var tip=document.getElementsByClassName('tip')[0];
var goBack=document.getElementsByClassName('goback')[0];
var back=document.getElementsByClassName('back')[0];
var single=document.getElementsByClassName('single')[0];
var backTxt=document.getElementsByClassName('backTxt')[0];
var pos1=document.getElementsByClassName('pos1')[0];
var pos2=document.getElementsByClassName('pos2')[0];
var pos3=document.getElementsByClassName('pos3')[0];
var pos4=document.getElementsByClassName('pos4')[0];
var place1=document.getElementsByClassName('place1')[0];
var place2=document.getElementsByClassName('place2')[0];
var rili1=document.getElementsByClassName('rili1')[0];
var rili2=document.getElementsByClassName('rili2')[0];
var shift=document.getElementsByClassName('shift')[0];
var start=document.getElementsByClassName('start')[0];
var end=document.getElementsByClassName('end')[0];
var information=document.getElementsByClassName('information');
var detail=document.getElementsByClassName('detail');
var ind=document.getElementsByClassName('ind')[0];

//导航滑过
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
//提示信息
exit.onclick=function(){
	tip.style.display='none';
}
goBack.onclick=function(){
	back.style.color="#000";
	backTxt.readOnly=false;
}
single.onclick=function(){
	back.style.color="#ababab";
	backTxt.readOnly='readonly';
}
pos1.onclick=function(){
	place1.style.display='block';
}
pos2.onclick=function(){
	place2.style.display='block';
}
pos3.onclick=function(){
	rili1.style.display='block';
}
pos4.onclick=function(){
	rili2.style.display='block';
}
place1.onmouseleave=function(){
	place1.style.display='none';
}
place2.onmouseleave=function(){
	place2.style.display='none';
}
rili1.onmouseleave=function(){
	rili1.style.display='none';
}
rili2.onmouseleave=function(){
	rili2.style.display='none';
}
shift.onclick=function(){
	var t;
	t=start.value;
	start.value=end.value;
	end.value=t;
}

for(var m=0,len1=information.length;m<len;m++){
	information[m].index=m;
	information[m].onclick=function(){
		var _index1=this.index;
		for(var n=0;n<len1;n++){
			detail[n].style.display='none';
			information[n].className='information fl'
		}
		detail[_index1].style.display='block';
		information[_index1].className='information active1 fl';
	}
}
ind.onclick=function(){
	location.href='index.html';
}

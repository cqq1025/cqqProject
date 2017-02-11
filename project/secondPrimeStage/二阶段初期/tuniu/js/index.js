var nav1=document.getElementsByClassName('nav1');
var arrow=document.getElementsByClassName('arrow');
var proType=document.getElementsByClassName('proType');
var ico=document.getElementsByClassName('ico');
var aPic=['img/banner1.jpeg','img/banner2.jpeg','img/banner3.jpeg','img/banner4.jpeg','img/banner5.jpeg','img/banner7.jpeg']
var pic=document.getElementsByClassName('pic')[0];
var sBan1=document.getElementsByClassName('sBan1')[0];
var aList=sBan1.getElementsByTagName('li');
var lArrow=document.getElementsByClassName('lArrow')[0];
var rArrow=document.getElementsByClassName('rArrow')[0];
var btnClose=document.getElementsByClassName('btn-close')[0];
var fale=document.getElementsByClassName('fale')[0];
var btnCon=document.getElementsByClassName('btn-con')[0];
var btnOpen=document.getElementsByClassName('btn-open')[0];
var navChild=document.getElementsByClassName('nav-child')[0];
var cFirst=document.getElementsByClassName('cFirst')[0];
var proType=document.getElementsByClassName('proType');
var autNav=document.getElementsByClassName('autNav');
var nChild=document.getElementsByClassName('nChild');
var col2=document.getElementsByClassName('col2');
var scrollContent=document.getElementsByClassName('scroll-content')[0];
var content=scrollContent.getElementsByTagName('ul')[0];
var children=document.getElementsByClassName('cChild');
var nav=document.getElementsByClassName('nav')[0];
var ico=document.getElementsByClassName('ico');
var word=document.getElementsByClassName('word');
var scroll=document.getElementsByClassName('scrollInfor')[0];
var aScroll=scroll.getElementsByTagName('ul')[0];
var move=document.getElementsByClassName('move');
var tit=document.getElementsByClassName('tit');
var con=document.getElementsByClassName('f-content');
var place=document.getElementsByClassName('place')[0];
var fShade=document.getElementsByClassName('fshade')[0];


place.onclick=function(){
	fShade.style.display='none';
}

//用户信息
setInterval(function(){
	var curr=aScroll.offsetTop;
	if(curr<=-120){
		curr=5+'px';
	}
	curr=parseInt(curr)-6+'px';
	aScroll.style.top=curr;
},300)
//竖导航栏
for(var i=0,len=proType.length;i<len;i++){
	proType[i].index=i;
	var m,k;
	ico[i].style.backgroundPosition  = -20*i + 'px' + " 0";
	ico[0].style.backgroundPosition  = "0 -24px";
	var cur1=ico[i].style.backgroundPositionY;
	if(proType[i].className==='proType active1'){k=i;}
	proType[i].onmouseover=function(){
		var _index=this.index;
		ico[_index].style.backgroundPosition  = -20*_index + 'px' + " -24px";

	console.log(cur1)
	m=cur1;
			for(var j=0;j<len;j++){
				proType[j].className='proType';
				word[j].className='word';
				ico[j].style.backgroundPositionY=cur1;
			}
			proType[_index].className='proType active1';
			word[_index].className='word colo';
			proType[k].className='proType active1';
			word[k].className='word colo';
			var cur2=parseInt(cur1)-24+'px';
			ico[_index].style.backgroundPositionY=cur2;
			ico[k].style.backgroundPosition  = "0 -24px";
		}
	proType[i].onmouseleave=function(){
		var _index=this.index;
		for(var j=0;j<len;j++){
			proType[j].className='proType';
			word[j].className='word';
		}
		proType[k].className='proType active1';
		word[k].className='word colo';
		ico[_index].style.backgroundPositionY=m;
		ico[k].style.backgroundPosition  = "0 -24px";
	}
}
//横导航栏
for(var i=0,len1=nav1.length;i<len1;i++){
	nav1[i].index=i;
	nav1[i].onmouseover=function(){
		var _index1=this.index;
		if(this.className!="fl nav1 active"){
			nav1[ _index1].style.background='#f0f1f3';
		}
		if(children[ _index1].innerHTML!=''){
			navChild.style.display='block';
			for(var j=0;j<len1;j++){
				children[j].style.display='none';
			}
			children[ _index1].style.display='block';
		}else{
			navChild.style.display='none';
		}
	}
	nav1[i].onmouseleave=function(){
		var  _index1=this.index;
		children[ _index1].style.display='none';
		navChild.style.display='none';
		if(this.className!="fl nav1 active"){
			for(var j=1;j<len1;j++){
				nav1[j].style.background='#fff';
			}
		}
		
	}
}
//banner
var n=0;
var timer1;
change();
function change(){
	timer1=setInterval(function(){
		n++;
		if(n>=6){n=0;}
		pic.src=aPic[n];
		clearIn();
		reSet(n);
	},1000)
}
function clearIn(){
	for(var j=0;j<6;j++){
			aList[j].style.background='#E3F8E1';
			aList[j].style.color='#333';
		}
}
function reSet(m){
	aList[m].style.background='rgba(0,0,0,.3)';
	aList[m].style.color='#fff';
}
for(var i=0,len3=aPic.length;i<len3;i++){
	aList[i].index=i;
	aList[i].onmouseover=function(){
		var _index4=this.index;
		clearInterval(timer1);
		clearIn();
		reSet(_index4);
		pic.src=aPic[_index4];
	}
	aList[i].onmouseleave=function(){
		var _index3=this.index;
		n=_index3;
		change();
	}
}
lArrow.onclick=function(){
			n=n-1;
			if(n<0){n=5;}
			pic.src=aPic[n];
			clearInterval(timer1)
			clearIn();
			reSet(n);
			change();
}
rArrow.onclick=function(){
			n=n+1;
			if(n>5){n=0;}
			pic.src=aPic[n];
			clearInterval(timer1)
			clearIn();
			reSet(n);
			change();
}

//提示信息
btnClose.onclick=function(){
	fale.style.display='none';
	btnOpen.style.display='block'
}
btnOpen.onclick=function(){
	fale.style.display='block';
	btnOpen.style.display='none';
}
//侧栏
var app=document.getElementsByClassName('app')[0];
var cApp=document.getElementsByClassName('cApp')[0];
var login=document.getElementsByClassName('login')[0];
var cLogin=document.getElementsByClassName('cLogin')[0];
var attention=document.getElementsByClassName('attention')[0];
var cAttention=document.getElementsByClassName('cAttention')[0];
var order=document.getElementsByClassName('order')[0];
var cOrder=document.getElementsByClassName('cOrder')[0];
var coupons=document.getElementsByClassName('coupons')[0];
var cCoupons=document.getElementsByClassName('cCoupons')[0];
var msg=document.getElementsByClassName('msg')[0];
var cMsg=document.getElementsByClassName('cMsg')[0];
var research=document.getElementsByClassName('research')[0];
var cResearch=document.getElementsByClassName('cResearch')[0];
var advise=document.getElementsByClassName('advise')[0];
var cAdvise=document.getElementsByClassName('cAdvise')[0];
var top1=document.getElementsByClassName('top1')[0];
var cTop=document.getElementsByClassName('cTop')[0];
app.onmouseover=function(){
	cApp.style.display='block';
	app.style.backgroundPosition='-62px 14px';
}
app.onmouseleave=function(){
	cApp.style.display='none';
	app.style.backgroundPosition='6px 18px';
}
login.onmouseover=function(){
	cLogin.style.display='block';
	login.style.backgroundPosition='-64px -36px';
}
login.onmouseleave=function(){
	cLogin.style.display='none';
	login.style.backgroundPosition='5px -34px';
}
attention.onmouseover=function(){
	cAttention.style.display='block';
	attention.style.backgroundPosition='-61px -97px'
}
attention.onmouseleave=function(){
	cAttention.style.display='none';
	attention.style.backgroundPosition='6px -94px'
}
order.onmouseover=function(){
	cOrder.style.display='block';
	order.style.backgroundPosition='6px -97px';
}
order.onmouseleave=function(){
	cOrder.style.display='none';
	order.style.backgroundPosition='8px -222px';
}
coupons.onmouseover=function(){
	cCoupons.style.display='block';
	coupons.style.backgroundPosition='-59px -288px';
}
coupons.onmouseleave=function(){
	cCoupons.style.display='none';
	coupons.style.backgroundPosition='10px -286px';
}
msg.onmouseover=function(){
	cMsg.style.display='block';
	msg.style.backgroundPosition='-60px -785px';
}
msg.onmouseleave=function(){
	cMsg.style.display='none';
	msg.style.backgroundPosition='8px -782px';
}
research.onmouseover=function(){
	cResearch.style.display='block';
	research.style.backgroundPosition='-60px -846px';
}
research.onmouseleave=function(){
	cResearch.style.display='none';
	research.style.backgroundPosition='8px -844px';
}
advise.onmouseover=function(){
	cAdvise.style.display='block';
	advise.style.backgroundPosition='-60px -544px';
}
advise.onmouseleave=function(){
	cAdvise.style.display='none';
	advise.style.backgroundPosition='9px -544px';
}
top1.onmouseover=function(){
	cTop.style.display='block';
	top1.style.backgroundPosition='-59px -600px';
}
top1.onmouseleave=function(){
	cTop.style.display='none';
	top1.style.backgroundPosition='10px -600px';
}

//选择显示
for(var i=0,len5=autNav.length;i<len5;i++){
	autNav[i].index=i;
	autNav[i].onmouseover=function(){
		var _index5=this.index;
		for(var j=0;j<len5;j++){
			nChild[j].style.display='none';
		}
		nChild[_index5].style.display='block';
		for(var k=0;k<len5;k++){
			autNav[k].className='fl autNav';
			
		}
		if(autNav[_index5].className!='fl autNav autActive'){
			autNav[_index5].className='fl autNav autActive';
		}
	}
	
}

//旅游局
setInterval(function(){
	var cur=content.offsetTop;
	cur=parseInt(cur)-100+'px';
	if(parseInt(cur)<-100){cur=0;}
	content.style.top=cur;
},1000)
//二楼交替显示
for(var i=0,len6=tit.length;i<len6;i++){
	tit[i].index=i;
	tit[i].onmouseover=function(){
		
		var _index6=this.index;
		for(var j=0;j<len6;j++){
			con[j].style.display='none';
			tit[j].style.color='#333';
		}
		con[_index6].style.display='block';
		tit[_index6].style.color='#d74568';
	}
}

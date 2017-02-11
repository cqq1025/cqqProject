var time=new Date();
var weekArry=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var iYear=time.getFullYear();
var iMonth=time.getMonth()+1;
var iDate=time.getDate();
var iWeek=weekArry[time.getDay()];
var currentDate=document.getElementById('time');
var lPic=['img/l1.jpg','img/l2.jpg','img/l3.jpg'];
var rPic=['img/r1.jpg','img/r2.jpg','img/r3.jpg'];
var lImage=document.getElementsByClassName('lImage')[0];
var radius1=document.getElementsByClassName('radiu1');
var intK=document.getElementById('intK');
var information=document.getElementsByClassName('information')[0];
var problem=document.getElementsByClassName('problem')[0];
var deal=document.getElementsByClassName('deal')[0];
var know=document.getElementsByClassName('knowledge')[0];
var row5=document.getElementsByClassName('row5-top')[0];
var lRow5=row5.getElementsByTagName('li');
var listShow=document.getElementsByClassName('listShow');
var radiu2=document.getElementsByClassName('radiu2');
var leftPic=document.getElementsByClassName('leftPic')[0];
var rightPic=document.getElementsByClassName('rightPic')[0];
var rImage=document.getElementsByClassName('rImage')[0];



//输出日期	
currentDate.innerHTML=iYear+'年'+iMonth+'月'+iDate+'日'+'&nbsp;'+iWeek;
//	图片轮播
var time3;
var s=0;

	time3=setInterval(function(){
			s++;
			if(s==3){s=0;}
			
			lImage.src=lPic[s];
		},2000)
	
var time4;
var r=0;

	time4=setInterval(function(){
			r++;
			if(r==3){r=0;}
			rImage.src=rPic[r];
		},2000)
	
	
/*var time3;
var s=0;
	function picChange(obj,arr){
		s++;
			if(s==3){s=0;}
			
			obj.src=arr[s];
	}
	time3=setInterval(picChange(obj,arr),2000)
picChange(lImage,lPic);
picChange(rImage,rPic);*/

//数字轮播
var w=0;
var time1;
 time1=setInterval(function()
	{
		w++;
		if(w>=3){w=0;}
		for(var j=0;j<3;j++){
			radius1[j].className='fl radiu1';
		}
		radius1[w].className='fl radiu1 active';
	}
,2000)
		
var v=0;
var time2=setInterval(function()
{
	v++;
	if(v>=3){v=0;}
	for(var j=0;j<3;j++){
		radiu2[j].className='fl radiu2';
	}
	radiu2[v].className='fl radiu2 active';
}
,2000)

//点击事件
	for(var c=0;c<3;c++){
		radiu2[c].index=c;
		radiu2[c].onclick=function(){
			clearInterval(time2);
			clearInterval(time4);
			var _index=this.index;
			for(var j=0;j<3;j++){
				radiu2[j].className='fl radiu2';
			}
			this.className='fl radiu2 active';
			rImage.src=rPic[_index];
			r=_index;
			v=_index;
			time4=setInterval(function(){
				r++;
				if(r==3){r=0;}
				rImage.src=rPic[r];
			},2000)
			 time2=setInterval(function()
				{
					v++;
					if(v>=3){v=0;}
					for(var j=0;j<3;j++){
						radiu2[j].className='fl radiu2';
					}
					radiu2[v].className='fl radiu2 active';
				}
			,2000)
		}
	}
	for(var d=0;d<3;d++){
		radius1[d].index=d;
		radius1[d].onclick=function(){
			clearInterval(time1);
			clearInterval(time3);
			var _index=this.index;
			for(var j=0;j<3;j++){
				radius1[j].className='fl radiu1';
			}
			this.className='fl radiu1 active';
			lImage.src=lPic[_index];
			s=_index;
			w=_index;
			time3=setInterval(function(){
				s++;
				if(s==3){s=0;}
				lImage.src=lPic[s];
			},2000)
			 time1=setInterval(function()
				{
					w++;
					if(w>=3){w=0;}
					for(var j=0;j<3;j++){
						radius1[j].className='fl radiu1';
					}
					radius1[w].className='fl radiu1 active';
				}
			,2000)
		}
	}
intK.onclick=function(){
	intK.value='';
}

//信息查询
for(var i=0, len=lRow5.length;i<len;i++){
	lRow5[i].index=i;
	
	lRow5[i].onclick=function(){
		var _index=this.index;
		//alert(_index);
		for(var j=0;j<len;j++){
			lRow5[j].className='fl';
		}
		this.className='fl active1';
		if(_index===0){
			information.style.display='block';
			problem.style.display='none';
			know.style.display='none';
			deal.style.display='none';
		}else if(_index===1){
			information.style.display='none';
			problem.style.display='block';
			know.style.display='none';
			deal.style.display='none';
		}else if(_index===2){
			information.style.display='none';
			problem.style.display='none';
			know.style.display='block';
			deal.style.display='none';
		}else{
			information.style.display='none';
			problem.style.display='none';
			know.style.display='none';
			deal.style.display='block';
		}
	}
}
	

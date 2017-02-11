$(function() {
	//页的父容器.fullpage()，每页都有section类
	var seventhVideo = document.querySelector('.seventhVideo video');
	$('#container').fullpage({
		//设置section的背景色
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆'],
		showActiveTooltip: true,
		scrollOverflow: true,
		fitToSection: false,

		'afterLoad': function(anchorLink, index) {
			if(index == 1) {
				$(".video-fill").eq(0).trigger("play").fadeIn();
				$('.one-word').eq(0).addClass('active');


			} else {
				$('.one-word').removeClass('active');
			}
			if(index === 3) {
				$('.thirdBox img').addClass('active');
				$('.thirdLeft').addClass('active');
			}
			else{
				$('.thirdLeft').removeClass('active');
				$('.thirdBox img').removeClass('active');
			}
			if(index == 2) {
				$('.secondApproach img').addClass('active');
				$('.secondApproach .txtBox').addClass('active');
				
			}else{
				$('.secondApproach img').removeClass('active');
				$('.secondApproach .txtBox').removeClass('active');

			}
			if(index === 4) {
				$('.fifthDes div').addClass('animated fadeInDownBig active')
				$('.fifth img').addClass('active')
				$('.fifthDes h1').addClass('animated fadeInUpBig active')
			} else {
				$('.fifthDes div').removeClass('animated fadeInDownBig active')
				$('.fifthDes h1').removeClass('animated fadeInUpBig active')
				$('.fifth img').removeClass('active')
			}
			if(index === 5){
				document.querySelector('.sixImg').classList.add('active')
			}
			if(index === 6) {
				$('.seventh video').trigger('play');
				$('.seventhDes h1').addClass('animated rollIn')
				$('.seventhDescripte').addClass('animated bounceInRight')
			} else {
				seventhVideo.currentTime = 0;
				$('.seventhDes h1').removeClass('animated rollIn')
				$('.seventh video').trigger('pause');
				$('.seventhDescripte').removeClass('animated bounceInRight')

			}
		}
		
	})
	var _coverH = document.documentElement.clientHeight;
	$('.cover').css({
		height: _coverH
	})
	$('.coverGo').on('click', function() {
		$('.cover video').trigger('play');
		$('.coverBottom').css('display', 'none');
		$('#container').show();
		setTimeout(function(){
			$('.cover').fadeOut()
		},4000)
	})
	var _coverH = document.documentElement.clientHeight;
	$('.cover').css({
		height: _coverH
	})
	var line1 = new Vivus(
		'topLeftCover', {
			type: 'oneByOne',
			duration: 100,
			start: 'autostart',
			dashGap: 20,
			forceRender: false
		},
		function() {
			if(window.console) {
				console.log('Animation finished. [log triggered from callback]');
			}
		}
	)

});

$(function() {
	//视频的代码，第一页
	var first=document.querySelector(".first");
	var firstVideo = document.querySelectorAll(".video-fill");
	var firstBtn = document.querySelector(".firstBtn");
	var num = 0;
	first.addEventListener('click', function() {
		num++;
		for(var i = 0, len = firstVideo.length; i < len; i++) {
			firstVideo[i].classList.remove("active")
		}
		if(num % 3 === 0) {
			$('.one-word').eq(2).removeClass("active");
			$('.one-word').eq(0).addClass("active");
			$(".video-fill").eq(0).addClass("active");
			$(".video-fill").eq(0).trigger("play");			
		}
		if(num % 3 === 1) {
			$('.one-word').eq(0).removeClass("active");
			$(".video-fill").eq(1).addClass("active");
			$(".video-fill").eq(1).trigger("play");	
			setTimeout(function(){
				$('.video-fill').eq(1).removeClass('active')
				$(".video-fill").eq(2).addClass("active");
				$('.video-fill').eq(2).trigger("play");
				$('.one-word').eq(1).addClass("active");
			},2000)
		}
		if(num % 3 === 2) {
			$('.one-word').eq(1).removeClass("active");
			$(".video-fill").eq(3).addClass("active");
			$(".video-fill").eq(3).trigger("play");
			setTimeout(function(){
				$('.video-fill').eq(3).removeClass('active')
				$(".video-fill").eq(4).addClass("active");
				$('.video-fill').eq(4).trigger("play");
				$('.one-word').eq(2).addClass("active");
			},2000)
		}
		
		
	})
}());

$(function() {
	//quality-life模块的代码
	var chairArr = ["img/qualityLife/seat-1-orange.jpg",
			"img/qualityLife/seat-1-blue.jpg",
			"img/qualityLife/seat-1-green.jpg",
			"img/qualityLife/seat-1-white.jpg",
			"img/qualityLife/seat-1-grey.jpg"
		],
		loveseatArr = ["img/qualityLife/seat-2-orange.jpg",
			"img/qualityLife/seat-2-blue.jpg",
			"img/qualityLife/seat-2-green.jpg",
			"img/qualityLife/seat-2-white.jpg",
			"img/qualityLife/seat-2-grey.jpg"
		],
		sofaArr = ["img/qualityLife/seat-3-orange.jpg",
			"img/qualityLife/seat-3-blue.jpg",
			"img/qualityLife/seat-3-green.jpg",
			"img/qualityLife/seat-3-white.jpg",
			"img/qualityLife/seat-3-grey.jpg"
		];
	var colorArr = ["日落橙色", "午夜蓝", "柑橘绿", "白色", "军校灰色"];

	var chairLi = document.querySelectorAll('.chair li'),
		loveseatLi = document.querySelectorAll('.loveseat li'),
		sofaLi = document.querySelectorAll('.sofa li');
	var chairImg = document.querySelector('.chair img'),
		loveseatImg = document.querySelector('.loveseat img'),
		sofaImg = document.querySelector('.sofa img');
	var chairTxt = document.querySelector('.chair span'),
		loveseatTxt = document.querySelector('.loveseat span'),
		sofaTxt = document.querySelector('.sofa span');

	changeColor(chairLi, chairImg, chairArr, chairTxt, colorArr);
	changeColor(loveseatLi, loveseatImg, loveseatArr, loveseatTxt, colorArr);
	changeColor(sofaLi, sofaImg, sofaArr, sofaTxt, colorArr);

	function changeColor(obj, objImg, arr, txt, txtArr) {
		for(var i = 0; i < obj.length; i++) {
			obj[i].index = i;
			obj[i].addEventListener('click', function() {
				var _index = this.index;
				for(var j = 0; j < obj.length; j++) {
					obj[j].classList.remove('active');
				}
				obj[_index].classList.add('active');
				objImg.src = arr[_index];
				txt.innerText = txtArr[_index];
			})

		}
	}
}());

$(function() {

	var d = document;
	var sixImg = d.querySelectorAll('.sixImg');
	var txtBox = d.querySelectorAll('.txtBox');
	var sixTxt = d.querySelectorAll('.sixTxt');
	var sixRight = d.querySelectorAll('.sixRight');
	var sixLast = d.querySelectorAll('.sixLast');
	for(var i = 0, len = sixImg.length; i < len; i++) {
		if(i == len - 1) {
			sixImg[i].index = i;
			sixImg[i].addEventListener('click', function() {
				var _index = this.index;
				this.classList.remove('active')
				sixImg[0].classList.add('active')
				txtBox[1].classList.add('active1')
			})
		} else {
			sixImg[i].index = i;

			sixImg[i].addEventListener('mouseenter', function() {
				var _index = this.index;
				this.classList.remove('active')
				sixImg[_index + 1].classList.add('active')
				if(_index == 1) {
					txtBox[1].classList.add('active')
				} else if(_index == 8) {
					sixTxt[0].classList.add('active')
				} else if(_index == 10) {
					sixTxt[0].classList.add('active1')
				} else if(_index == 15) {
					sixRight[0].classList.add('active')
				} else if(_index == 20) {
					sixLast[0].classList.add('active')
				}

			})

		}

	}
}());
$(function() {
	var inputBox=document.querySelector(".inputBox");
	var inputTxt=document.querySelector("input");
	inputTxt.onfocus=function(){
		inputBox.style.borderColor="#cccccc";
	}
	inputTxt.onblur=function(){
		inputBox.style.borderColor="#f2ede4";
	}
}());
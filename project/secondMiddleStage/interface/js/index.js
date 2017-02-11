var colorBar = document.getElementsByClassName('colockBar')[0];
var container = document.getElementsByClassName('container');
var foot = document.getElementsByClassName('foot');
var searchBar = document.getElementsByClassName('searchBar');

var time = new Date();
var iHourse = time.getHours();
var iMinuttes = time.getMinutes();
colorBar.innerHTML = iHourse + ":" + iMinuttes;
//轮播图
var swiper = new Swiper('.bannerBar', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationClickable: true,
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: 2500,
	autoplayDisableOnInteraction: false
});

var myScroll;

function loaded() {
	myScroll = new IScroll('#wrapper', {
		keyBindings: true
	});
}
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);

for(var i = 0; i < foot.length; i++) {
	(function(index) {
		foot[index].addEventListener('click', function() {
			for(var j = 0; j < foot.length; j++) {
				container[j].classList.remove('active');
				foot[j].classList.remove('active');
				searchBar[j].classList.remove('active');
			}
			container[index].classList.add('active');
			searchBar[index].classList.add('active');
			this.classList.add('active');
		}, false)
	})(i)
}


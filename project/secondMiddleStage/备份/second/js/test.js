$(function() {
	//页的父容器.fullpage()，每页都有section类
	var seventhVideo = document.querySelector('.seventhVideo video');
	$('#container').fullpage({
		//设置section的背景色
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆'],
		showActiveTooltip: true,
		scrollOverflow: true
		
	})

});
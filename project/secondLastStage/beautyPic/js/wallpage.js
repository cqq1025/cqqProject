var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 2.5,
    paginationClickable: true,
    spaceBetween: 3
});
   $(".button-collapse").sideNav();
 $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
//$('.button-collapse').sideNav('show');
//$('.button-collapse').sideNav('hide');
//$('.button-collapse').sideNav('destroy');
$('.mhtp').click(function(){
	window.location='mhtp.html';
})
$('.rxmr').click(function(){
	window.location='mhtp.html';
})
$('.yjmt').click(function(){
	window.location='yjmt.html';
})
$('.sczx').click(function(){
	window.location='sczx.html';
})
$('.sygl').click(function(){
	window.location='sygl.html';
})
$('.pt').click(function(){
	window.location='mhtp.html';
})
$('.modal-trigger').leanModal();
$('#modal1').openModal();
$('#modal1').closeModal();
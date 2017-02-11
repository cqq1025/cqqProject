$(".button-collapse").sideNav();
var line = new Vivus(
    'draw1', 
    {type: 'oneByOne', duration: 50, start: 'autostart', dashGap: 20, forceRender: false},
    function () {
        if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
        }
    })

 $(document).ready(function(){
    $('.slider').slider({full_width: true});
	$('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('#modal1').openModal();
    $('#modal1').closeModal();
    $('.tooltipped').tooltip({delay: 50});
})
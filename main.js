$(document).ready(function(){
	$('#idontknow').click(function(){
		$('body, html').animate({
			scrollTop: '400px'
		}, 300 );
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		};
	});
});
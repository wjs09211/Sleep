$(function(){

 	var pre_pos = 0
 	$(window).scroll(function() {
 		if($(document).scrollTop() - pre_pos > 0){
 			$('.navbar').addClass('hide').removeClass('show');
 		}
 		else{
 			$('.navbar').addClass('show').removeClass('hide');
 		}
 		pre_pos = $(document).scrollTop();
	});

});
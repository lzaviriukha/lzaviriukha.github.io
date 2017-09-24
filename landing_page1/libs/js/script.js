$(document).ready(function(){
	$("#menu").on("click","a", function (event)
		
	 {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


	$(window).scroll(function() {
    $('.cardwrapper__container--background').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('cardwrapper__container--scale');
      }
    });
  });

	$(window).scroll(function() {
    $('.progress-box').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('progress-box--width');
      }
    });
  });

	$(window).scroll(function(){
		if ($(window).scrollTop() > '100'){
			$('#header').css({ background:'white'});
		}
		if ($(window).scrollTop() < '100'){
			$('#header').css({ background:'none'});
		}
	});
});


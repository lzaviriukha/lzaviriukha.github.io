$(function(){

	"use strict";

	$('.title_box').click(function(){   //при нажатии активирвоать функции

		$('this').toggleClass('open'); //добавить класс
		$('this').next('div.list_link').toggleClass('open'); //добавить класс
	});


	$('#slider_price').slider({
		max: 1000,
		min: 0,
		range: true,
		values: [190,728],
		slide: function( event, ui ) {
			$('input[name="minPrice"]').val( '$' + ui.values[0] );
			$('input[name="maxPrice"]').val(  '$' + ui.values[1] );
		}
	});

	$('input[name="minPrice"]').val( '$' +
	$('#slider_price').slider('values',0) );
	$('input[name="maxPrice"]').val( '$' +
	$('#slider_price').slider('values',1) );


});
$(function(){

	"use strict";

	$('.title_box').click(function(){   //при нажатии активирвоать функции

		$('.title_box').toggleClass('open'); //добавить класс
		$('.title_box').next('div.list_link').toggleClass('open'); //добавить класс
	});


});
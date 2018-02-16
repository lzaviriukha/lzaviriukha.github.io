$(function(){

	"use strict";

	$('.title_box').click(function(){   //при нажатии активирвоать функции

		$(this).toggleClass('open'); //добавить класс
		$(this).next('div.list_link').toggleClass('open'); //добавить класс
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
	$('#cart, .title_cart').click(function(){
		$('#cart_box').toggleClass('open');
	});

	$('#sign').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});

	$('#close_modal, #black_fill').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});

	$('#search_button').click(function(){
		$('#search_pannel').toggleClass('open');
	});

	$('#load_more').click(function(event){
		event.preventDefault();
		$('.list_product').append('<a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center">	<div class="tag box">new</div><div class="img_product">	<img src="img/01.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2>	<p>Black Grey Plants</p><p class="price">$290</p></a><a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center">	<div class="tag box">new</div><div class="img_product">	<img src="img/01.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2>	<p>Black Grey Plants</p><p class="price">$290</p></a><a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center">	<div class="tag box">new</div><div class="img_product">	<img src="img/01.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2>	<p>Black Grey Plants</p><p class="price">$290</p></a>');
	});

	

});
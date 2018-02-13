$(function(){

	'use strict';

// Плавный переход по якроям

	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
		{
			scrollTop:$(target).offset().top 
		},
		800
		);
	});


// Фиксация меню при скролле

	var offset = $('#bottom_header').offset();

	$(window).scroll( function(){

		if( $(window).scrollTop() > offset.top ) {
			$('#bottom_header').addClass('fixedNav');
		} else {
			$('#bottom_header').removeClass('fixedNav');
		}

	} );


// Плагин Slick

	if( window.innerWidth > 1024 ) {
		$('#slide').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	} else {
		$('#slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}

// Добавление галлереи при клике на кнопку view

	$('#view_all_gallery').click(function(){
		let content = '<div class="gllery_line main_flex__nowrap flex__jcontent_between"> <div class="box_img_gllery ig_1"><img src="img/1ig.jpg" alt=""></div><div class="box_img_gllery ig_2"><img src="img/2ig.jpg" alt=""></div></div><div class="name_gallery">Marina Palms / <span class="blue">North Miami Beach, FL 33162</span></div>';
		$('#gallery_box').append(content); 
		$(this).remove();
	});


// Модальное окно

	$('#modal_box, #black_fill').hide(); //спрятать мдальное окно и затемнённый фон
    
    $('#call').click(function(){     //вызвать модальное окно при нажатии на  call to order
    	$('#modal_box, #black_fill').show();  
    })

    $('#close_modal, #black_fill').click(function(){  //прятать модальное окно при нажатии на крестик или заливку
  		$('#modal_box, #black_fill').hide();
    }) 

});
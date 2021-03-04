$(function() {

	$ ('a[data-modal]').click( function(event) {
		$ (this).modal();
		return false;
	 });




	// $(document).ready(function(){
  //   $("#button_top_line").click(function () {
  //       if ($("#bookform_castom").is(":hidden")) {
	// 					$("#bookform_castom").show("slow");
						
  //       } else {
	// 					$("#bookform_castom").hide("slow");
  //       }
  //       return false;
	// 	});
	// 	$('a.button').on('click', function () {
	// 		if ($(this).text() == 'Закрыть') {
	// 				$(this).text('Записаться');
	// 		}
	// 		else {
	// 				$(this).text('Закрыть');
	// 		}
	// 		// $('#bookform_castom').toggle('normal');
	// 	});
	// });




	// (function($) {
	// 	$(function() {
	// 		$("ul.tabs_caption").on("click", "li:not(.active)", function() {
	// 			$(this)
	// 				.addClass("active")
	// 				.siblings()
	// 				.removeClass("active")
	// 				.closest("div.tabs_price")
	// 				.find("div.tabs_content")
	// 				.removeClass("active")
	// 				.eq($(this).index())
	// 				.addClass("active");
	// 		});
	// 	});
	// })(jQuery);

	$(function(){
		$('.slider-owl-carousel').height($('.slider-owl-carousel').width()/1.00);
	
		$(window).resize(function(){
			$('.slider-owl-carousel').height($('.slider-owl-carousel').width()/1.00);
		});
	});


	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 0,
			// URLhashListener: false,
			// startPosition: 'URLHash',
			animateOut: 'bounceOut',
			animateIn: 'bounceInRight',
			// rewind: true,// возврощает к начальному элементу, при достижение конца
			loop: true, //Зацикливаем слайдер
			margin: 0, //Отступ от элемента справа в 50px
			dots: true,
			nav: false, //Отключение навигации 
			autoplay: true, //Автозапуск слайдера
			smartSpeed: 2000, //Время движения слайда
			autoplayTimeout: 15000, //Время смены слайда
			autoplayHoverPause: true,	//Пауза при наведении.
			// navText : ["<img src='img/@2x/owl-prev.png'>","<img src='img/@2x/owl-next.png'>"],
			// responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
			// 			0:{
			// 					items:1
			// 			},
			// 			600:{
			// 					items:2
			// 			},
			// 			1000:{
			// 					items:4
			// 			}
			// 	}
	
			
		});
	});


	$(function () {
		$('.fotorama').fotorama();
	});




});



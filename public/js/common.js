$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-114 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Меню при скроле
	/*$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".posf").addClass('show');
		} else {
			$(".posf").removeClass('show');
		};
	});*/

	// Клик по гамбургеру на моб версии
	$('.mob-btn').click(function() {
		$('.nav-list').toggleClass('show');
	});
	$('.nav-list__item a').click(function() {
		$('.nav-list').removeClass('show');
	});

	// Формирование полей и заголовков формы в мод окне
	$('.model-photo__link').click(function(){
		var link = $(this).data('link');
		var car = $(this).data('name');
		$('.car').val(car);
		$('.price-form').val(link);
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		//var goalId = $(this).find('input[ name="goal"]').val();
		var price = $(this).data('price');
		var link = $(this).find('.price-form').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				if (price == true) {
					window.open(link, "_blank");
					$.fancybox.close();
					$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				} else {
					$.fancybox.close();
					$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				}
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox();

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top-114
		}, 300);
		e.preventDefault();
	});

	$('.head-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		fade: true,
		autoplay: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					autoplay: false,
				},
			},
		]
	});

	$('.model-photo').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
		fade: true,
		autoplay: false,
		dots: false
	});

	$('.model-info__half').matchHeight();
	if (screen.width > 475) {
		$('.official-item-half').matchHeight();
	}
	if (screen.width > 575) {
		$('.autoHeight').matchHeight();
	}

});

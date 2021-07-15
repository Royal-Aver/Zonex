$(function () {
	$('.slider__inner').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	})

	$('.header__burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

	$('.marketing__close').on('click', function () {
		$('.marketing--visible').remove('.marketing--visible')
	})

	// $(".menu__list a, .logo").on("click", function (event) {
	// 	event.preventDefault();
	// 	var id = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({ scrollTop: top }, 1500);
	// });

	// 	$(window).on("scroll", function () {
	// 		var wn = $(window).scrollTop();
	// 		if (wn > 120) {
	// 			$(".header__top").css("background-color", "#02373f");
	// 		}
	// 		else {
	// 			$(".header__top").css("background-color", "transparent");
	// 		}
	// 	});

	// 	$(window).on("scroll", function () {
	// 		if ($(window).scrollTop() > 50) {
	// 			$('.header__nav').addClass('header__nav--scroll')
	// 		}
	// 		else
	// 			$('.header__nav').removeClass('header__nav--scroll')
	// 	});

	// 	})

});
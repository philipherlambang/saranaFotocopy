/*!
 * Main Scripts
 * Copyright 2016 Sarana Fotocopy
 */

(function() {
	// Navigation Scripts to Show Header on Scroll-Up
	var MQL = 1170;

	// Primary Navigation Slide-in Effect
	if ($(window).width() > MQL) {
		var headerHeight = $('.header > .navbar-default').height();
		$(window).on('scroll', { previousTop: 0 }, function() {
			var currentTop = $(window).scrollTop();
			// Check If User Is Scrolling Up
			if (currentTop < this.previousTop) {
				// If Scrolling Up...
				if (currentTop > 0 && $('.header > .navbar-default').hasClass('is-fixed')) {
					$('.header > .navbar-default').addClass('is-visible');
				} else {
					$('.header > .navbar-default').removeClass('is-visible is-fixed');
				}
			} else {
				// If Scrolling Down...
				$('.header > .navbar-default').removeClass('is-visible');
				if (currentTop > headerHeight && !$('.header > .navbar-default').hasClass('is-fixed')) $('.header > .navbar-default').addClass('is-fixed');
			}
			this.previousTop = currentTop;
		});
	}

	if (document.querySelector('.owl-single')) {
		$('.owl-single').owlCarousel({
			singleItem: true,
			autoPlay: 3000,
			stopOnHover: true,
			pagination : false
		});
	}

	/* var chatEl = document.querySelector('.chat');
	var chatHeadEl = chatEl.querySelector('.head');
	var chatContentEl = chatEl.querySelector('.content');
	var chatInputEl = chatEl.querySelector('.input');

	chatHeadEl.addEventListener('click', function() {
		if (chatEl.style.bottom == '0px') {
			chatEl.removeAttribute('style');
		} else {
			chatEl.style.bottom = '0px';
			chatContentEl.scrollTop = chatContentEl.scrollHeight;
			chatInputEl.querySelector('input').focus();
		}
	}); */
}());

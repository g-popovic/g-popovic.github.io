/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile) $body.addClass('is-mobile');
	else {
		breakpoints.on('>medium', function () {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function () {
			$body.addClass('is-mobile');
		});
	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1500,
		offset: $header.outerHeight()
	});

	// Menu.
	$('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'right',
		target: $body,
		visibleClass: 'is-menu-visible'
	});

	// Header.
	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', function () {
			$window.trigger('scroll');
		});

		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: function () {
				$header.removeClass('alt');
			},
			enter: function () {
				$header.addClass('alt');
			},
			leave: function () {
				$header.removeClass('alt');
			}
		});
	}
})(jQuery);

function copyEmail(text, event) {
	var dummy = document.createElement('input');
	document.body.appendChild(dummy);

	dummy.setAttribute('id', 'dummy_id');
	document.getElementById('dummy_id').value = text;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
	event.getElementsByClassName('tooltiptext')[0].innerHTML = 'Copied!';
}

function resetTooltip(event) {
	event.getElementsByClassName('tooltiptext')[0].innerHTML = 'Copy';
}

const emailForm = document.getElementById('emailForm');

// emailForm.addEventListener('submit', e => {
// 	e.preventDefault();

// 	const request = new XMLHttpRequest();
// 	request.open('post', 'https://formspree.io/xeqpoowe');
// 	request.setRequestHeader('Accept', 'application/json');
// 	request.onreadystatechange = () => {
// 		if (request.readyState === 4) {
// 			if (request.status === 200) {
// 				alert('Success!');
// 			} else {
// 				alert('Message not sent: There was an unexpected error.');
// 			}
// 		}
// 	};
// 	request.send(new FormData(emailForm));
// });

emailForm.addEventListener('submit', e => {
	e.preventDefault();

	const button = document.getElementById('sendButton');
	button.className += ' button-loading';

	setTimeout(() => {
		button.classList.remove('button-loading');
	}, 5000);
});

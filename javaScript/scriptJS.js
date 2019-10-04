
//Hamburger menu
$(document).ready(function () {

	let hamburgerClicked = false;
	let navBar = $(".navigation__item");
	$(".navigation__icon").on("click", function hamburgerClick() {
		if (!hamburgerClicked) {
			for (let i = 0; i < navBar.length; i++) {
				//navBar[i].style.display = "block";
				navBar.eq(i).attr("style", "display:block");
			}
			hamburgerClicked = true;
		} else {
			for (let i = 0; i < navBar.length; i++) {
				//navBar[i].removeAttribute("style");
				navBar.eq(i).removeAttr("style");
			}
			hamburgerClicked = false;
		}
	});

	//Clear open menu//
	var tomek = $(".navigation__item");
	for (let i = 0; i < tomek.length; i++) {
		tomek.eq(i).on("click", function () {
			for (let i = 0; i < tomek.length; i++) {
				//tomek[i].removeAttribute("style");
				tomek.removeAttr("style");
				hamburgerClicked = false;
			}
		}
		)
	}
})

//Parallax Effect
window.ParallaxBG = (function () {
	var images;

	function init() {
		images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));
		if (!images.length) { return }

		$(window).on('scroll', doParallax);
		$(window).on('resize', doParallax);
		doParallax();
	}

	function getViewportHeight() {
		var a = document.documentElement.clientHeight, b = window.innerHeight;
		return a < b ? b : a;
	}

	function getViewportScroll() {
		if (typeof window.scrollY != 'undefined') {
			return window.scrollY;
		}
		if (typeof pageYOffset != 'undefined') {
			return pageYOffset;
		}
		var doc = document.documentElement;
		doc = doc.clientHeight ? doc : document.body;
		return doc.scrollTop;
	}

	function doParallax() {
		var el, elOffset, elHeight,
			offset = getViewportScroll(),
			vHeight = getViewportHeight();

		for (var i in images) {
			el = images[i];
			elOffset = el.offsetTop;
			elHeight = el.offsetHeight;

			if ((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }

			el.style.backgroundPosition = '50% ' + Math.round((elOffset - offset) * 4 / 8) + 'px';
		}
	}

	return {
		init: init
	}
})();

ParallaxBG.init();


//Add owlCarousel
$(document).ready(function () {

	var awards = $('.owl-carousel--awards');
	//owl.owlCarousel();

	//$(".owl-carousel").owlCarousel({
	awards.owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: true,
		autoHeight: true,
		URLhashListener: true,
		autoplayHoverPause: true,
		startPosition: 'URLHash'
	});



	//Variables for dots under slider
	var dots_awards = $('.owl-dot--awards');
	let item_awards = 0;


	//Signed slider dot as active
	let changeDots = function (item) {
		dots_awards.removeClass('active')
			.eq(item)
			.trigger('to.owl.carousel', [item, 300])
			.addClass('active');
		console.log(item);
	}
	//Signed first dot as default
	changeDots(item_awards);

	// Go to the next item
	$('.owl-next').click(function () {
		awards.trigger('next.owl.carousel');
		if (item_awards >= 4) item_awards = 0;
		else item_awards++;
		changeDots(item_awards);
	})
	// Go to the previous item
	$('.owl-prev').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		awards.trigger('prev.owl.carousel', [300]);
		if (item_awards <= 0) item_awards = 4;
		else item_awards--;
		changeDots(item_awards);
	})

	//Add sign dots under slider
	dots_awards.on('click', function () {
		if (this == dots_awards[0]) {
			item_awards = 0;
		} else if (this == dots_awards[1]) {
			item_awards = 1;
		} else if (this == dots_awards[2]) {
			item_awards = 2;
		} else if (this == dots_awards[3]) {
			item_awards = 3;
		} else if (this == dots_awards[4]) {
			item_awards = 4;
		}

		changeDots(item_awards);
	})
})

//Add toggle buttons show/hide galleries
document.addEventListener('DOMContentLoaded', function () {
	let buttons = document.querySelectorAll('.offer__btn');
	let galleries = document.querySelectorAll('.offer__box-gallery');

	//console.log(buttons[0]);
	//console.log("Buttony",button);
	buttons.forEach(function (index, item) {
		//console.log(index, item);
		index.addEventListener('click', function () {
			if (galleries[item].style.maxHeight == "2000px") {
				galleries[item].style.maxHeight = "0px";
				index.innerHTML = "Zobacz galerię";
				index.classList.remove('icon-angle-double-up');
				index.classList.add('icon-angle-double-down');
			} else {
				galleries[item].style.maxHeight = "2000px";
				index.innerHTML = "Zwiń galerię";
				index.classList.remove('icon-angle-double-down');
				index.classList.add('icon-angle-double-up');
			}
		}, false);
	});
}, false);

//Smootch scroll
document.addEventListener("DOMContentLoaded", function () {
	//let sGlowna = document.querySelector("#strona_glowna");
	//let aktualnosci = document.querySelector("#section1");
	//let oferta = document.querySelector("#section2");
	//let kontakt = document.querySelector("#section3");


//płynne przewijanie strony po kliknięciu w opcję w menu//
	function smoothScroll(myTarget, duration) {
		let target = document.querySelector(myTarget);
		let targetPosition = target.getBoundingClientRect().top -39;
		let startPosition = window.pageYOffset;
		let startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			//console.log(timeElapsed);
			var run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);

			if (timeElapsed < duration) requestAnimationFrame(animation);
		};

		function ease(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};
		requestAnimationFrame(animation);
	}

	document.querySelector(".item-home")
			.addEventListener("click", function () {
				smoothScroll("#strona_glowna", 1000);
	});
	document.querySelector(".item-news")
			.addEventListener("click", function () {
				smoothScroll("#section2", 1000);
	});
	document.querySelector(".item-offer")
			.addEventListener("click", function () {
				smoothScroll("#section3", 1000);
	});
	document.querySelector(".item-contact")
			.addEventListener("click", function () {
				smoothScroll("#section4", 1000);
	});
	document.querySelector(".btn__transparent")
			.addEventListener("click", function () {
				smoothScroll("#section3", 1000);
	});
});



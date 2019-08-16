
let hamburgerClicked = false;
let navBar = document.querySelectorAll(".navigation__item");

function hamburgerClick(){
    if(!hamburgerClicked){
        for(let i = 0; i<navBar.length; i++){
            navBar[i].style.display = "block";
        }
        hamburgerClicked = true;
    }else{
        for(let i = 0; i<navBar.length; i++){
            navBar[i].removeAttribute("style");
        }
        hamburgerClicked = false;
    }
}
//Clear open menu//
var tomek = document.querySelectorAll(".navigation__item");
    for(let i = 0; i<tomek.length; i++){
    tomek[i].addEventListener("click", function(){
        for(let i = 0; i<tomek.length; i++){
        tomek[i].removeAttribute("style");
        hamburgerClicked = false;
}}
)}
//Parallax Effect

window.ParallaxBG = (function() {
	var images;

	function init() {
		images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));
		if(!images.length) { return }

		Gator(window).on('scroll', doParallax);
		Gator(window).on('resize', doParallax);
		doParallax();
	}

	function getViewportHeight() {
		var a = document.documentElement.clientHeight, b = window.innerHeight;
		return a < b ? b : a;
	}

	function getViewportScroll() {
		if(typeof window.scrollY != 'undefined') {
			return window.scrollY;
		}
		if(typeof pageYOffset != 'undefined') {
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

		for(var i in images) {
			el = images[i];
			elOffset = el.offsetTop;
			elHeight = el.offsetHeight;

			if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }

			el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*4/8)+'px';
		}
	}

	return {
		init: init
	}
})();

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		items:1,
		dots:true,
		autoHeight:true,
		URLhashListener:true,
        autoplayHoverPause:true,
		startPosition: 'URLHash'
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	//Variables for dots under slider
	var dots = $('.owl-dot');
	let item = 0;


	//Signed active slider dot
	let changeDots = function(item){
		dots.removeClass('active');
		dots.eq(item).trigger('to.owl.carousel', [item,300])
		.addClass('active');
		console.log(item);
	}
	//Signed first dot as default
	changeDots(item);

	// Go to the next item
	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel');
		if(item>=4) item=0;
		else item++;
		changeDots(item);
	})
	// Go to the previous item
	$('.owl-prev').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
		if(item<=0) item =4;
		else item--;
		changeDots(item);
	})

	//Add sign dots under slider
	dots.on('click',function(){
		if(this==dots[0]){
			item =0;
		}else if(this==dots[1]){
			item =1;
		}else if(this==dots[2]){
			item =2;
		}else if(this==dots[3]){
			item =3;
		}else if(this==dots[4]){
			item =4;
		}

		changeDots(item);
	})
})
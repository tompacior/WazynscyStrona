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

			el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
		}
	}

	return {
		init: init
	}
})();
// generic javascript
// ------------------------------------------------------------
$(document).ready(function(){

// global vars
// ------------------------------------------------------------
// ------------------------------------------------------------
var window_width = Number;
var window_height = Number;
var mobile = Boolean;


	
// update screen height
// ------------------------------------------------------------	
function update_window_size() {
	window_width = $(window).innerWidth();
	window_height = $(window).innerHeight();
	
	// set breakpoints
	if (window_width > 912) {
		mobile = false;
	} else {
		mobile = true;
	};
	
	parallax_settings();
};
update_window_size();
	
// update when resizing
$(window).resize(function() {
	update_window_size();
});	




// functionality that"s on linked on scroll
// ------------------------------------------------------------

var scrolled = false;

$(window).scroll(function() {
	scrolled = true;
	update_animation();
});

function update_animation() {
	if (scrolled && mobile == false) {
		requestAnimationFrame(parallax_scroll);
	};
};

function parallax_settings() {
	$(".js-parallax--front").css({"position" : "relative", "top" : $(".js-parallax--back").innerHeight()});
};

function parallax_scroll() {
	var pos = $(window).scrollTop();
	
	// move background at slower speed
	if (pos < window_height * 2) {
		$(".js-parallax--back").css({"transform" : "translate3d(0," + Math.round(0 - pos / 2) + "px, 0)"});
	};
	if (pos < 0) {
		$(".js-parallax--back").css({"transform" : "translate3d(0," + Math.round(0 - pos) + "px, 0)"});
	};
	
	// fade arrow scroll down button
	if (pos > 60) {
		$(".js-hero-scroll-down--round").addClass("alpha-0");
	} else {
		$(".js-hero-scroll-down--round").removeClass("alpha-0");
	};
	
	scrolled = false;
};




// scroll magic
// ------------------------------------------------------------

// init controller
var controller = new ScrollMagic.Controller();

// intro scroll trigger
function scroll_trigger_intro() {
	var scrll = new ScrollMagic.Scene({
		triggerElement:	"#flx-s0",
		duration: 999999,
	})
	.triggerHook(0.64)
	.offset(0)
	.on("start", function(){
		$(".flx-bg__container-fixed").toggleClass("is-active");
		$(".js-bg-0").toggleClass("alpha-1");
		$(".js-hero-content").toggleClass("alpha-0");
		$("#flx-s0 .tr").toggleClass("is-active");
	})
	//.addIndicators()
	.addTo(controller);
};
scroll_trigger_intro();

// section scroll constructor
function scroll_trigger(i, bgToggle) {
	
	var el = "#flx-s" + i;
	var el_prev = "#flx-s" + (i-1);
	var bg = ".js-bg-" + i;
	
	var scrll = new ScrollMagic.Scene({
		triggerElement:	el,
		duration: 999999,
	})
	.triggerHook(0.64)
	.offset(0)
	.on("start", function(){
		$(bg).toggleClass(bgToggle);
		$(el + " .tr").toggleClass("is-active");
		$(el_prev + " .tr").toggleClass("is-ended");
	})
	//.addIndicators()
	.addTo(controller);
};
// init section scroll events
for (i = 1; i <= 5; i++) {
	scroll_trigger(i, "alpha-1");
};






// scrollto
// ------------------------------------------------------------
$(".js-hero-scroll-down").click(function(){
	TweenLite.to(window, 1, {
		ease: Power3.easeInOut,
		scrollTo: {
			y: "#flx-s0",
			offsetY: window_width * 0.15,
			autoKill: false,
		},
	});
});




// include html
// ------------------------------------------------------------
function include_html() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include");
        if (file) {
        	/*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("include");
                    include_html();
                };
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        };
    };
};
include_html();

});
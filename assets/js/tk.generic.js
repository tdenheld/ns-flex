// generic javascript
// ------------------------------------------------------------
$(document).ready(function(){

// global vars
// ------------------------------------------------------------
// ------------------------------------------------------------
var window_width = Number;
var window_height = Number;
var mobile = Boolean;
var scrolled = false;


	
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
};
update_window_size();
	
// update when resizing
$(window).resize(function() {
	update_window_size();
});




// functionality that"s on linked on scroll
// ------------------------------------------------------------

$(window).scroll(function() {
	scrolled = true;
	if (scrolled) {
		requestAnimationFrame(scrolling);
	};
});

function scrolling() {
	var pos = $(window).scrollTop();
	// fade arrow scroll down button
	if (pos > 60) {
		$(".js-scroll-down").addClass("alpha-0");
	} else {
		$(".js-scroll-down").removeClass("alpha-0");
	};
	scrolled = false;
};




// scroll magic
// ------------------------------------------------------------

// init controller
var controller = new ScrollMagic.Controller();

// section scroll constructor
function scroll_trigger(i) {
	var id = document.getElementById("flx-s" + i);
	var el = "#flx-s" + i;
	var el_prev = "#flx-s" + (i-1);
	var bg = ".js-bg-" + i;
	
	if (id) {
		var scrll = new ScrollMagic.Scene({
			triggerElement:	el,
			duration: 999999,
		})
		.triggerHook(0.8)
		.offset(0)
		.on("start", function(){
			$(bg).toggleClass("alpha-1");
			$(el + " .tr").toggleClass("is-active");
			//$(el_prev + " .tr").toggleClass("is-ended");
		})
		//.addIndicators()
		.addTo(controller);
	};
};
// init section scroll events
var sections = $(".flx-section");
for (i = 0; i <= sections.length; i++) {
	scroll_trigger(i);
};





// scrollto
// ------------------------------------------------------------
$(".js-scroll-down").click(function(){
	TweenLite.to(window, 1, {
		ease: Power3.easeInOut,
		scrollTo: {
			y: "#flx-s0",
			offsetY: window_width * 0.15,
			autoKill: false,
		},
	});
});




// read more
// ------------------------------------------------------------
$(".js-more").click(function(){
	var btn = $(".js-more-btn", this);
	var content = $(".js-more-content", this);
	TweenLite.set(btn, {autoAlpha:0});
	TweenLite.to(btn, 0.1, {display:"none"});
	content.slideDown(250);
});




// show ROS items
// ------------------------------------------------------------
$(".js-show-ros-abos").click(function(){
	$(".js-ros-abos").slideDown(200, function(){
		TweenLite.to(window, 1, {
			ease: Power3.easeInOut,
			scrollTo: {
				y: "#ros-abos",
				offsetY: 60,
				autoKill: false,
			},
		});
	});
});

$(".js-ros-btn").click(function(){;
	var content = $(".js-ros-content");
	content.fadeIn(250);
	TweenLite.to(this, 0.25, {
		ease: Power3.easeInOut,
		autoAlpha: 0,
	});
	TweenLite.to(window, 0.7, {
		ease: Power3.easeInOut,
		scrollTo: {
			y: $(window).scrollTop() + 180,
			autoKill: false,
		},
	});
});

$(".js-ros-btn-hide").click(function(){;
	var content = $(".js-ros-content");
	content.fadeOut(250);
	TweenLite.to(".js-ros-btn", 0.25, {
		ease: Power3.easeInOut,
		autoAlpha: 1,
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
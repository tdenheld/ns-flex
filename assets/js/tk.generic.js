// generic javascript
// ------------------------------------------------------------
$(function () {


    // global vars
    // ------------------------------------------------------------
    // ------------------------------------------------------------
    var vw = Number;
    var vh = Number;
    var mobile = Boolean;
    var scrolled = false;
    var trigger = Number;



    // update screen height
    // ------------------------------------------------------------	
    function update_window_size() {
        vw = $(window).innerWidth();
        vh = $(window).innerHeight();

        // set breakpoints
        if (vw > 912) {
            mobile = false;
            trigger = 0.83;
        } else {
            mobile = true;
            trigger = 0.76;
        };
    };
    update_window_size();

    // update when resizing
    $(window).resize(function () {
        update_window_size();
    });




    // functionality that"s on linked on scroll
    // ------------------------------------------------------------

    $(window).scroll(function () {
        scrolled = true;
        if (scrolled) {
            requestAnimationFrame(scrolling);
        };
    });

    function scrolling() {
        var pos = $(window).scrollTop();

        // fade arrow scroll down button
        if (pos > 60) {
            $(".js-scroll-down").addClass("o-0");
            $(".js-subnav").addClass("is-sticky");
        } else {
            $(".js-scroll-down").removeClass("o-0");
            $(".js-subnav").removeClass("is-sticky");
        };

        scrolled = false;

        $(".js-subnav-toggle").removeClass("is-active");
        $(".js-subnav, .js-subnav-items").removeClass("is-active");
    };



    // subnav
    // ------------------------------------------------------------
    $(".js-subnav-toggle").click(function () {
        $(this).toggleClass("is-active");
        $(".js-subnav, .js-subnav-items").toggleClass("is-active");
    });




    // scroll magic
    // ------------------------------------------------------------

    // init controller
    var controller = new ScrollMagic.Controller();

    // section scroll constructor
    function scroll_trigger(i) {
        var id = document.getElementById("flx-s" + i);
        var el = "#flx-s" + i;
        var el_prev = "#flx-s" + (i - 1);
        var bg = ".js-bg-" + i;

        if (id) {
            var scrll = new ScrollMagic.Scene({
                    triggerElement: el,
                    duration: 999999,
                })
                .triggerHook(trigger)
                .offset(0)
                .on("start", function () {
                    $(bg).toggleClass("is-active");
                    $(el + " .js-tr").toggleClass("is-active");
                })
                //.addIndicators()
                .addTo(controller);
        };
    };
    // init section scroll events
    var sections = $(".flx-section");
    sections.each(function (i) {
        $(this).attr("id", "flx-s" + i);
        scroll_trigger(i);
    });





    // scrollto
    // ------------------------------------------------------------
    $(".js-scroll-down").click(function () {
        TweenLite.to(window, 1, {
            ease: Power3.easeInOut,
            scrollTo: {
                y: "#flx-s0",
                offsetY: vw * 0.15,
                autoKill: false,
            },
        });
    });




    // read more
    // ------------------------------------------------------------
    $(".js-more").click(function () {
        var btn = $(".js-more-btn", this);
        var content = $(".js-more-content", this);
        TweenLite.set(btn, {
            autoAlpha: 0
        });
        TweenLite.to(btn, 0.1, {
            display: "none"
        });
        content.slideDown(250);
    });




    // show ROS items
    // ------------------------------------------------------------
    $(".js-ros-btn").click(function () {;
        var content = $(".js-ros-content");
        content.fadeIn(250);
        TweenLite.to(this, 0.25, {
            ease: Power3.easeInOut,
            autoAlpha: 0,
        });
        TweenLite.to(window, 0.7, {
            ease: Power3.easeInOut,
            scrollTo: {
                y: $(window).scrollTop() + 240,
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
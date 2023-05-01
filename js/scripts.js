$(document).ready(function(){



    function boxSlider() {

        const gap = 4;

        const carousel = document.getElementById("carousel"),
            content = document.getElementById("content"),
            next = document.getElementById("next"),
            prev = document.getElementById("prev");

        next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
        });
        prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        });

        let width = carousel.offsetWidth;
        window.addEventListener("resize", e => (width = carousel.offsetWidth));

    };

    function youtubeSlider() {

        const gap = 2;

        const carousel = document.getElementById("carousel-youtube"),
            content = document.getElementById("content--youtube"),
            next = document.getElementById("next--youtube"),
            prev = document.getElementById("prev--youtube");

        next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
        });
        prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        });

        let width = carousel.offsetWidth;
        window.addEventListener("resize", e => (width = carousel.offsetWidth));

    };


    if($("body").hasClass("is--homepage")){

        youtubeSlider();
        boxSlider();

    };

    function headerPopups(){
        $("body").click(function(e){
            event.stopPropagation();
            $(".language--shops").removeClass("is--active");
            $('.account--popup--panel').removeClass('is--active');
            $('.registration--modal').removeClass('is--active');
            $('.menu--button').removeClass('is--active');
        });

        $(".selected--language").click(function(e){
            event.stopPropagation();
            $('.account--popup--panel').removeClass('is--active');
            $('.menu--button').removeClass('is--active');
            if(!$(".language--shops").hasClass("is--active")) {
                $(".language--shops").addClass("is--active");
            }else {
                $('.language--shops').removeClass('is--active');
            };
        });

        $(".btn--sing-in").click(function(e){
            event.stopPropagation();
            $('.log--in').removeClass('is--active');
            $('.language--shops').removeClass('is--active');
            $('.mobile--navigation').removeClass('is--active');
            $('.menu--button').removeClass('is--active');
            if(!$(".sing--in").hasClass("is--active")) {
                $(".sing--in").addClass("is--active");
            }else {
                $('.sing--in').removeClass('is--active');
            };
        });

        $(".btn--login").click(function(e){
            event.stopPropagation();
            $('.sing--in').removeClass('is--active');
            $('.language--shops').removeClass('is--active');
            $('.menu--button').removeClass('is--active');
            $('.mobile--navigation').removeClass('is--active');
            if(!$(".log--in").hasClass("is--active")) {
                $(".log--in").addClass("is--active");
            }else {
                $('.log--in').removeClass('is--active');
            };
        });

        $(".btn--sign-up").click(function(e){
            event.stopPropagation();
            $('.account--popup--panel').removeClass('is--active');
            $('.language--shops').removeClass('is--active');
            $('.menu--button').removeClass('is--active');
            if(!$(".registration--modal").hasClass("is--active")) {
                $(".registration--modal").addClass("is--active");
            }else {
                $('.registration--modal').removeClass('is--active');
            };
            if(!$(".user--register").hasClass("is--active")) {
                $(".user--register").addClass("is--active");
            }else {
                $('.user--register').removeClass('is--active');
            };
        });

        $(".menu--button").click(function(e){
            event.stopPropagation();
            $('.log--in').removeClass('is--active');
            $('.sing--in').removeClass('is--active');
            if(!$(".menu--button").hasClass("is--active")) {
                $(".menu--button").addClass("is--active");
            }else {
                $('.menu--button').removeClass('is--active');
            };

            if(!$(".mobile--navigation").hasClass("is--active")) {
                $(".mobile--navigation").addClass("is--active");
            }else {
                $('.mobile--navigation').removeClass('is--active');
            };
        });



        $(".account--popup--panel").click(function(e){
            event.stopPropagation();
        });
    };

    $(".filter-panel--title").click(function(e){

        if(!$(this).hasClass("is--active")) {
            $(this).addClass("is--active");
        }else {
            $(this).removeClass('is--active');
        };
    });


    $(".flight--box .open--flight-details").click(function(e){
        event.stopPropagation();


        if(!$(this).parents(".flight--box").hasClass("is--active")) {
            $(this).parents(".flight--box").addClass("is--active");
        }else {
            $(this).parents(".flight--box").removeClass('is--active');
        };
    });














    headerPopups();

});


$(function () {
    /*fixed header*/
    let header = $("#header");
    let intra = $("#intra");
    let intraH = intra.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, intraH);

    $(window).on("scroll load resize", function () {
        intraH = intra.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, intraH);
    });

    function checkScroll(scrollPos, intraH) {
        if (scrollPos > intraH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*smooth scroll*/

    $("[data-scroll]").on("click", function (event) {

        event.preventDefault();
        let elementId = $(this).data('scroll');
        nav.removeClass("show");
        let elementOffset = $(elementId).offset().top;

        $("html,body").animate({
            scrollTop: elementOffset - 70

        }, 900);


    });


    /*Nav Toggle section*/

    navToggle.on("click", function (event){
        event.preventDefault();
        nav.toggleClass("show");
    });

    /*Reviews slider* https://cdn.jsdelivr.net/npm/slick-carousel*/

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots:true
    });


});
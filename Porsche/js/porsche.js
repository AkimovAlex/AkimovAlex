$(document).ready(function() {
    $('.slick-one').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        arrows: false
    });
});
$(document).ready(function() {
    $('.slider-two').bxSlider({
        pager: false,
        controls: true,
        auto: false,
        pause: 10000,
        minSlides: 3,
        maxSlides: 3,
        // slideMargin: 20,
        touchEnabled: true,
        slideWidth: 300

    });
});
let anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
};
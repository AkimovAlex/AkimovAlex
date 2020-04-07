document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
/*slider*/
$(document).ready(function() {
    $('.main-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
// card-product-slider
$(document).ready(function() {
    $('.card-product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-thumbnails'
    });
});
// slider-thumbnails
$(document).ready(function() {
    $('.slider-thumbnails').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.card-product-slider'
    });
});
// lightbox

lightbox.option({
    'positionFromTop': 200,
    'resizeDuration': 200,
    'wrapAround': true
});
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');

$(document).ready(function() {
    $(".burger").click(function() {
        $(".bottom-ul").toggleClass("active");
    });
});

// .slider-one
$('.slider-one').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});
// .slider-two
$('.slider-two').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
// .manufacturers - slider - one
$('.manufacturers-slider-one').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});
// .stocks-slider
$('.stocks-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
// .new-items-slider
$('.new-items-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('#main-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    adaptiveHeight: true,
    autoplay: true,
    mobileFirst: true,
    accessibility: false,
    focusOnSelect: true
});
$('.catalog-slider').slick({
    infinite: true,
    // centerMode: true,
    adaptiveHeight: true,
    mobileFirst: true,
    accessibility: false,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                // infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$(".p-cena").click(function() {
    $(".polzunok").slideToggle();
});

// range
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});
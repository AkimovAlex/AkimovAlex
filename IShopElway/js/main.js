document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
/*content-right-slider*/
$(document).ready(function() {
    $('.content-right-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
// header-burger
$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-link-block').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// object-slider
$(document).ready(function() {
    $('.content-object-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.content-object-slider-two'
    });
});
// object-slider-two
$(document).ready(function() {
    $('.content-object-slider-two').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.content-object-slider'
    });
});
// .showe-active
$(document).ready(function() {
    $(".showe-button").click(function() {
        $(".showe-active").fadeToggle();
    });
});
// .sort-link-active
$(document).ready(function() {
    $(".sort-link").click(function() {
        $(this).toggleClass("sort-link-active")
    });
});
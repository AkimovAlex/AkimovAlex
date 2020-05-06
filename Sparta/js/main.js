document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
// slider
$(document).ready(function() {
    $('.slider-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // centerMode: true,
        dots: true,
    });
});
// popap
$(document).ready(function() {
    $(".text-left-button,.test-button,.prog-button,.clos").click(function() {
        $(".popap").fadeToggle()
    })
});
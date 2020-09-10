var a = $(".nav").offset().top;

$(document).scroll(function() {
    if ($(this).scrollTop() > a) {
        $('.navbar').css({ "background": "#000" });
    } else {
        $('.navbar').css({ "background": "transparent" });
    }
});
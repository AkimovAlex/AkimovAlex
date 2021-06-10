$(window).scroll(function() {
    $('#animatedElement').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideUp");
        }
    });
});
window.onload = function() { document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ''); }
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
// times
var target_date = new Date().getTime() + (1000 * 3600 * 16); // установить дату обратного отсчета
var hours, minutes, seconds; // переменные для единиц времени

var countdown = document.getElementById("tiles"); // получить элемент тега

getCountdown();

setInterval(function() { getCountdown(); }, 1000);

function getCountdown() {

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // строка обратного отсчета  + значение тега
    countdown.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
};
// time2
var target_date = new Date().getTime() + (1000 * 3600 * 16); // установить дату обратного отсчета
var hours, minutes, seconds; // переменные для единиц времени

var countdown1 = document.getElementById("tiles1"); // получить элемент тега

getCountdown1();

setInterval(function() { getCountdown1(); }, 1000);

function getCountdown1() {

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // строка обратного отсчета  + значение тега
    countdown1.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
};
// character-slider
$(document).ready(function() {
    $('.character-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.character-slider-two'
    });
    $('.character-slider-two').slick({
        focusOnSelect: true,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        asNavFor: '.character-slider'
    });
});
$(document).ready(function() {
    $('.popup-btn1').click(function(e) {
        $('.subhamm').fadeIn(500);
        $('.mishra').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });
    $('.popup-btn2').click(function(e) {
        $('.subham').fadeIn(500);
        $('.pradhan').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });
    $('.popup-btn3').click(function(e) {
        $('.ananya').fadeIn(500);
        $('.ghosh').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });
    $('.popup-btn4').click(function(e) {
        $('.rajesh').fadeIn(500);
        $('.rout').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-close').click(function(e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');

        e.preventDefault();
    });
});
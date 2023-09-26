$(document).ready(function () {

    // navbar hover tab link on desktop
    if ($(window).width() >= 992) {
        $('.navbar .nav > .nav-item > .nav-link').removeAttr('data-bs-toggle');

        $('.nav > .nav-item > .nav-link').hover(function () {
            $(this).tab('show');
        });
    }

    // add class on-scroll when window scrolled
    $(window).scroll(function () {
        if ($(document).scrollTop() > 80) {
            $('#topbar').addClass('on-scroll');
        } else {
            $('#topbar').removeClass('on-scroll');
        }
    });

});
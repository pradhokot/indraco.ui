$(document).ready(function () {

    if ($(window).width() >= 992) {

        $('.navbar .nav > .nav-item > .nav-link').removeAttr('data-bs-toggle');

        $('.nav > .nav-item > .nav-link').hover(function () {
            $(this).tab('show');
        });
    }

});
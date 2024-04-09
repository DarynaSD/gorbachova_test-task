$(function() {
    $('.open-burger').on('click', function() {
        $('.header-wrapper').toggleClass('visually-hidden');
    });
});

$(function() {
    $('.close-burger').on('click', function() {
        $('.header-wrapper').toggleClass('visually-hidden');
    });
});

$(function() {
    $('.menu__item').on('click', function() {
        $('.header-wrapper').addClass('visually-hidden');
    });
});


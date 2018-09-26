$(document).ready(function () {
$(window).scroll(function() {
$('#ui_ux').LineProgressbar({
    percentage: 75,
    ShowProgressCount: true,
    duration: 3000,
    fillBackgroundColor: '#101010',
    backgroundColor: '#d8d8d8',
    height: '5px',
    width: '85%'


});
});


$(window).scroll(function() {
$('#web').LineProgressbar({
    percentage: 90,
    ShowProgressCount: true,
    duration: 3000,
    fillBackgroundColor: '#101010',
    backgroundColor: '#d8d8d8',
    height: '5px',
    width: '85%'

});

});


$(window).scroll(function() {
$('#marketing').LineProgressbar({
    percentage: 65,
    ShowProgressCount: true,
    duration: 3000,
    fillBackgroundColor: '#101010',
    backgroundColor: '#d8d8d8',
    height: '5px',
    width: '85%'


});
});


//
// числовой счетчик
$(".spincrement").spincrement({
    from: 0,                // Стартовое число
    duration: 4000          // Продолжительность анимации в миллисекундах
});



// slick

$('.slider').slick({
    arrows: false,
    infinite: false,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    dotsClass: "dots",

});

    $(".wrapper").masonry({
        columnWidth: 350,
        itemSelector: '.item',
        resize: true
    });

});
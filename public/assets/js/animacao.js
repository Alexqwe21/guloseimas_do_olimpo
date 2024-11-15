// Carrosel Pag Home
$(document).ready(function(){
    $('.box_carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    });
});
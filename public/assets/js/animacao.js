// Carrosel Pag Home
$(document).ready(function () {
    $('.box_carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Carrosel pag Sobre
    $('.produtos_carrosel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Inicializa o número
    let number = 2;

    // Obtém os elementos do DOM
    const numberElement = document.getElementById('number');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    // Funções para aumentar e diminuir
    incrementButton.addEventListener('click', () => {
        number++;
        numberElement.textContent = number;
    });
});
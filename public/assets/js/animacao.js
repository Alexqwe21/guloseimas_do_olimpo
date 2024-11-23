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

    // Funções para aumentar e diminuir
    incrementButton.addEventListener('click', () => {
        number++;
        numberElement.textContent = number;
    });
});

// Contator da tela "reserva"
document.addEventListener("DOMContentLoaded", () => {
    const numberDisplay = document.getElementById("number-display");
    const incrementButton = document.getElementById("increment-button");
    const decrementButton = document.getElementById("decrement-button");

    let currentNumber = parseInt(numberDisplay.textContent.trim(), 10);
    if (isNaN(currentNumber)) {
        currentNumber = 1;
        numberDisplay.textContent = currentNumber;
    }

    // Func.addNumber
    incrementButton.addEventListener("click", () => {
        currentNumber += 1;
        numberDisplay.textContent = currentNumber;
    });

    // Fun.dimuirNumber(valor minimo = 1)
    decrementButton.addEventListener("click", () => {
        if (currentNumber > 1) {
            currentNumber -= 1;
            numberDisplay.textContent = currentNumber;
        }
    });
});

// favoritar produto
document.addEventListener("DOMContentLoaded", () => {
    const heartIcon = document.getElementById("heart-icon");

    heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("favorited"); 
    });
});
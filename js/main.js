$(document).ready(function () {
    $('.slider').slick({
        prevArrow: '<div class="slider-arrow slider-prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-next"><i class="fa-solid fa-chevron-right"></i></div>',
        dots: false,
        adaptiveHeight: true,
    });
});

// Проверка номера телефона
let inp = document.getElementById('inputPassword3');

inp.addEventListener('focus', _ => {
    if (!/^\+\d*$/.test(inp.value))
        
        inp.value = '+';
});

inp.addEventListener('keypress', e => {
    
    if (!/\d/.test(e.key))
        e.preventDefault();
});
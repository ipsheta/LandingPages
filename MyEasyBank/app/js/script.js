const btnHamburger = document.querySelector('#btnHamburger');
const body=document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has_fade');

btnHamburger.addEventListener('click', function () {
    console.log('click hamburger');
    if (header.classList.contains('open')) {
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade_in');
            element.classList.add('fade_out');
        });  
    } else {
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade_out');
            element.classList.add('fade_in');
        });
    }

});
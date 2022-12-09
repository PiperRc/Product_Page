// hidden navbar
const hamburger = document.querySelector('.hamburger');
const hiddenNavbar = document.querySelector('.hidden-navbar');
const hiddenLinks = document.querySelector('.hidden-links');
const x = document.querySelector('.x-icon');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {

    hiddenNavbar.classList.add('hidden-navbar-reveal');
    hiddenLinks.classList.add('hidden-links-reveal')

    container.classList.add('container-opacity');

})

x.addEventListener('click', () => {
    hiddenNavbar.classList.remove('hidden-navbar-reveal');
    hiddenLinks.classList.remove('hidden-links-reveal')
    container.classList.remove('container-opacity');

})


// hero image
const leftArrow = document.querySelector('.previous-icon');

const rightArrow = document.querySelector('.next-icon');

const productImage = document.querySelector('.product-image img');

let imgNum = 1;

const imgSrc = {
    1: 'images/image-product-1.jpg',
    2: 'images/image-product-2.jpg',
    3: 'images/image-product-3.jpg',
    4: 'images/image-product-4.jpg',

}
leftArrow.addEventListener('click', () => {
    if (imgNum > 1) {
        --imgNum;
    }
    else if (imgNum === 1) {
        imgNum = 4;
    }

    productImage.src = imgSrc[imgNum];

})

rightArrow.addEventListener('click', () => {
    if (imgNum < 4) {
        ++imgNum;
    }

    else if (imgNum === 4) {
        imgNum = 1;
    }

    productImage.src = imgSrc[imgNum];

})


// cart
const minusSign = document.querySelector('.minus-sign');
const plusSign = document.querySelector('.plus-sign');

const cartSpan = document.querySelector('.nav-cart-span');

const cartNumSpan = document.querySelector('.product-amount span');

let cartNum = parseInt(document.querySelector('.product-amount span').textContent);

const cartAddition = document.querySelector('.cart-addition')


minusSign.addEventListener('click', () => {

    if (cartNum > 0) {
        --cartNum;
    }

    cartNumSpan.textContent = cartNum;


})

plusSign.addEventListener('click', () => {

    ++cartNum
    cartNumSpan.textContent = cartNum;

})

cartAddition.addEventListener('click', () => {
    cartSpan.innerHTML=cartNum;
    cartSpan.classList.add('nav-cart-span-reveal');

})


const hamburger = document.querySelector('.hamburger');
const mobileNavbar = document.querySelector('.mobile-navbar');
const mobileLinks = document.querySelector('.mobile-links');
const x = document.querySelector('.x-icon');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
    mobileNavbar.classList.add('mobile-navbar-reveal');
    mobileLinks.classList.add('mobile-links-reveal')
    container.classList.add('container-opacity');

})

x.addEventListener('click', () => {
    mobileNavbar.classList.remove('mobile-navbar-reveal');
    mobileLinks.classList.remove('mobile-links-reveal')
    container.classList.remove('container-opacity');

})


// hero image
const leftArrow = document.querySelector('.previous-icon');
const rightArrow = document.querySelector('.next-icon');
const heroImage = document.querySelector('.hero-image');

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

    heroImage.src = imgSrc[imgNum];

})

rightArrow.addEventListener('click', () => {
    if (imgNum < 4) {
        ++imgNum;
    }

    else if (imgNum === 4) {
        imgNum = 1;
    }

    heroImage.src = imgSrc[imgNum];

})


// cart
const minusSign = document.querySelector('.minus-sign');
const plusSign = document.querySelector('.plus-sign');

const navCartQuantity = document.querySelector('.cart-quantity');
const productQuantity = document.querySelector('.product-amount span');

let productQuantityNum = parseInt(document.querySelector('.product-amount span').textContent);
let thumbnail = document.querySelector('.cart-fill img:nth-child(1)')

const productAddition = document.querySelector('.product-addition');

// modal
let numProducts = document.querySelector('.cart-fill div p:nth-child(2) span:nth-child(1)')
let totalAmount = document.querySelector('.cart-fill div p:nth-child(2) span:nth-child(2)');

// modal content
const cartFill = document.querySelector('.cart-fill');


minusSign.addEventListener('click', () => {
    if (productQuantityNum > 0) {
        --productQuantityNum;
    }
    // the number in the middle of the div
    productQuantity.textContent = productQuantityNum;
})

plusSign.addEventListener('click', () => {
    ++productQuantityNum
    // the number in the middle of the div
    productQuantity.textContent = productQuantityNum;
})
// two main buttons:

// add number to cart
productAddition.addEventListener('click', () => {
    if (productQuantityNum > 0) {
        // the cart symbol in the navbar
        navCartQuantity.innerHTML = productQuantityNum;
        navCartQuantity.classList.add('cart-quantity-reveal');
        // modal
        numProducts.innerHTML = productQuantityNum;
        totalAmount.innerHTML = `$${productQuantityNum * 125}.00`;
        thumbnail.src = imgSrc[imgNum];
    }

})
// navCart button

const navCart = document.querySelector('.nav-cart')
const modal = document.querySelector('.modal');

navCart.addEventListener('click', () => {

    if (parseInt(navCartQuantity.innerHTML) > 0 && productQuantityNum != 0) {
        if (modal.classList.contains('modal-reveal')) {
            modal.classList.remove('modal-reveal');
        }
        else {
            modal.classList.add('modal-reveal');
            thumbnail.src = imgSrc[imgNum];
        }
    }
})

// bin
const bin = document.querySelector('.bin');


bin.addEventListener('click', () => {
    navCartQuantity.classList.remove('cart-quantity-reveal');
    productQuantityNum = 0;
    productQuantity.innerHTML = productQuantityNum;
    modal.classList.remove('modal-reveal');

})

// lighbox

const img1 = document.querySelector('.lightbox-1');
const img2 = document.querySelector('.lightbox-2');
const img3 = document.querySelector('.lightbox-3');
const img4 = document.querySelector('.lightbox-4');

img1.addEventListener('mouseover', () => {
    heroImage.src = "images/image-product-1.jpg";
})

img2.addEventListener('mouseover', () => {
    heroImage.src = "images/image-product-2.jpg";
})

img3.addEventListener('mouseover', () => {
    heroImage.src = "images/image-product-3.jpg";
})

img4.addEventListener('mouseover', () => {
    heroImage.src = "images/image-product-4.jpg";

})
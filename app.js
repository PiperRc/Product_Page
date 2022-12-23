// hidden navbar
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

const navCartSpan = document.querySelector('.nav-cart-span');
const cartNumSpan = document.querySelector('.product-amount span');

let cartNum = parseInt(document.querySelector('.product-amount span').textContent);

const cartAddition = document.querySelector('.cart-addition');

// modal
let numProducts = document.querySelector('.cart-fill div p:nth-child(2) span:nth-child(1)')
let totalAmount = document.querySelector('.cart-fill div p:nth-child(2) span:nth-child(2)');

// modal content
const cartFill =document.querySelector('.cart-fill');
const cartFillInfo=cartFill.innerHTML;

minusSign.addEventListener('click', () => {
    if (cartNum > 0) {
        --cartNum;
    }
    // the number in the middle of the div
    cartNumSpan.textContent = cartNum;
})

plusSign.addEventListener('click', () => {
    ++cartNum
    // the number in the middle of the div
    cartNumSpan.textContent = cartNum;
})
// two main buttons:

// add number to cart
cartAddition.addEventListener('click', () => {
    if (cartNum > 0) {

        // the cart symbol in the navbar
        navCartSpan.innerHTML = cartNum;
        navCartSpan.classList.add('nav-cart-span-reveal');
        // modal
        numProducts.innerHTML = cartNum;
        totalAmount.innerHTML = `$${cartNum * 125}.00`
        
    }

})
// navCart button

const navCart = document.querySelector('.nav-cart')
const cartModal = document.querySelector('.cart-modal');

navCart.addEventListener('click', () => {

    if (parseInt(navCartSpan.innerHTML) > 0 && cartNum !=0) {
        if (cartModal.classList.contains('cart-modal-reveal')) {
            cartModal.classList.remove('cart-modal-reveal');
        }
        else {
            cartModal.classList.add('cart-modal-reveal');
        }
    }
})

// bin
const bin=document.querySelector('.bin');


bin.addEventListener('click',()=>{
    navCartSpan.classList.remove('nav-cart-span-reveal');
    cartNum=0;
    cartNumSpan.innerHTML=cartNum;
    cartModal.classList.remove('cart-modal-reveal');

    
})
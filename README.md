# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![DESKTOP SCREENSHOT](https://github.com/PiperRc/Product_Page/blob/main/screenshots/desktop.png)
![MOBILE SCREENSHOT](https://github.com/PiperRc/Product_Page/blob/main/screenshots/mobile.png)


### Links

- [Solution URL](https://github.com/PiperRc/Product_Page)
- [Live Site URL]](https://piperrc.github.io/Product_Page/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [lightgallery.js](https://www.lightgalleryjs.com/)


### What I learned
Creating a gallery

```js
const minusSign = document.querySelector('.minus-sign');
const plusSign = document.querySelector('.plus-sign');

const navCartQuantity = document.querySelector('.cart-quantity');
const productQuantity = document.querySelector('.product-amount span');

let productQuantityNum = parseInt(document.querySelector('.product-amount span').textContent);
let thumbnail = document.querySelector('.cart-fill img:nth-child(1)')

const productAddition = document.querySelector('.product-addition');

```


### Continued development
Create a lightbox without external tools


### Useful resources

- [CSS GRID](https://css-tricks.com/snippets/css/complete-guide-grid/) - Invaluable resources

## Author

- Frontend Mentor - [@PiperRc](https://www.frontendmentor.io/profile/PiperRc)


## Acknowledgments

Frontend Mentor

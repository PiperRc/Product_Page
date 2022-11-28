const hamburger=document.querySelector('.hamburger');
const hiddenNavbar=document.querySelector('.hidden-navbar');

hamburger.addEventListener('click',()=>{
    hiddenNavbar.classList.add('hidden-navbar-reveal');
})


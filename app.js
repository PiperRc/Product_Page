const hamburger = document.querySelector('.hamburger');
const hiddenNavbar = document.querySelector('.hidden-navbar');
const x =document.querySelector('.hidden-navbar img');
const body=document.querySelector('body');

hamburger.addEventListener('click', () => {
  
    hiddenNavbar.classList.add('hidden-navbar-reveal');
    // body.classList.add('body-opacity')
   
})

x.addEventListener('click',()=>{
    hiddenNavbar.classList.remove('hidden-navbar-reveal');
    
})




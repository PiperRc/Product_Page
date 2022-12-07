const body=document.querySelector('body');

const hamburger = document.querySelector('.hamburger');

const hiddenNavbar = document.querySelector('.hidden-navbar');

const hiddenLinks=document.querySelector('.hidden-links');

const container= document.querySelector('.container')


const x =document.querySelector('.x-icon');


hamburger.addEventListener('click', () => {
  
    hiddenNavbar.classList.add('hidden-navbar-reveal');
    hiddenLinks.classList.add('hidden-links-reveal')
  
    container.classList.add('container-opacity');
   
})

x.addEventListener('click',()=>{
    hiddenNavbar.classList.remove('hidden-navbar-reveal');
    hiddenLinks.classList.remove('hidden-links-reveal')
    container.classList.remove('container-opacity');
    
})

// container.addEventListener('click',()=>{
//     if(hiddenNavbar.classList.remove('hidden-navbar-reveal');
//         hiddenLinks.classList.remove('hidden-links-reveal');
//         container.classList.remove('container-opacity')  ; ){

//     }
// })




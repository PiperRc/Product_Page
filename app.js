const body=document.querySelector('body');

const hamburger = document.querySelector('.hamburger');

const hiddenNavbar = document.querySelector('.hidden-navbar');

const hiddenLinks=document.querySelector('.hidden-links');

const container= document.querySelector('.container');

const leftArrow=document.querySelector('.previous-icon');

const rightArrow=document.querySelector('.next-icon');

const productImage=document.querySelector('.product-image img');

const x =document.querySelector('.x-icon');

let num=1;

const imgSrc={
    1:'images/image-product-1.jpg',
    2:'images/image-product-2.jpg',
    3:'images/image-product-3.jpg',
    4:'images/image-product-4.jpg',
}

// container.addEventListener('click',()=>{
//     if(hiddenNavbar.classList.contains('hidden-navbar-reveal')){
//         hiddenNavbar.classList.remove('hidden-navbar-reveal');
//         hiddenLinks.classList.remove('hidden-links-reveal')
//         container.classList.remove('container-opacity');
//     }
// }
// )



// When the left arrow is clicked, decrease the imgSrc number,but cannot be less than 1
// Whe the right arrow is clicked,increase the imgSrc number ,but cannot be more than 4


productImage.addEventListener('click',()=>{
    
})

leftArrow.addEventListener('click',()=>{
    if(num>1){
        --num;
    }
    productImage.src=imgSrc[num];
})

rightArrow.addEventListener('click',()=>{
    if(num<4){
        ++num
    }

    productImage.src=imgSrc[num];
})





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





/**botoes */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    busca.classList.remove('active');
    loginFormulario.classList.remove('active');
}

let loginFormulario = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()=>{
    loginFormulario.classList.toggle('active');
    busca.classList.remove('active');
    navbar.classList.remove('active');
}


let busca = document.querySelector('.busca');

document.querySelector('#busca-btn').onclick = ()=>{
    busca.classList.toggle('active');
    loginFormulario.classList.remove('active');
    navbar.classList.remove('active');
}


/** scroll */

window.onscroll = ()=>{
    busca.classList.remove('active');
    loginFormulario.classList.remove('active');
    navbar.classList.remove('active');
}
/**thema */
 let themaBtn = document.querySelector('#theme-btn');

 themaBtn.onclick = ()=>{
     themaBtn.classList.toggle('fa-sun');

     if(themaBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
     }else{
        document.body.classList.remove('active');         
     }

 }

 /*swipper*/

 var swiper = new Swiper(".review-slide", {
     loop:true,
     spaceBetween:30,
     centeredSlides:true,
     autoplay:{
        delay:5500,
        disableOnInteraction:false
     },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

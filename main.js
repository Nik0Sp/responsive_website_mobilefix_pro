let swiper = new Swiper(".testimonials-slider", {
    spaceBetween:30,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:6390,
     disableOnInteraction:false,
    },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
        slidesPerView: 1,
      },
       768: {
         slidesPerView:2,
       },
       1024: {
        slidesPerView:3,
      },
     },
   });


//    change navbar background on scroll
window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY> 90)
})
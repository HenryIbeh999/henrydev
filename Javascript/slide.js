

// slider javascript section

var counter = 2;
setInterval(function(){
    document.getElementById('radio' + counter).checked= true;
    counter++;
    if(counter> 6){
        counter = 1;
    }
}, 5000);

// Swiper Script//

var swiper = new Swiper(".service-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // const menuButton = document.getElementsByClassName('menu-button');
  // const menu = document.getElementsByClassName('header-navigation');

  // menuButton.addEventListener('click', () => {
  //     menuButton.classList.toggle('active');
  //     menu.classList.toggle('active');
  // });

  let swiper = new Swiper(".mySwiper", {
    lazy: true,
    loop: true,
    speed: 3500,
    slidesPerView: window.innerWidth <= 400  ? 1 : 2,
    spaceBetween: 5,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,        // stop autoplay when hovering
        disableOnInteraction: false,    // restart autoplay when hover is removed
        reverseDirection: true,         // reverse the autoplay direction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   });


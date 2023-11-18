s
  const menuButton = document.getElementsByClassName('menu-button');
  const menu = document.getElementsByClassName('header-navigation');

  menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      menu.classList.toggle('active');
  });

// //  Initialize Swiper
// let swiper = new Swiper(".mySwiper", {
//   lazy: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   keyboard: {
//     enabled: true,
//   },
//   mousewheel: true,
//   grabCursor: true,

//  });

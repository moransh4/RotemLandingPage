
  // const menuButton = document.getElementsByClassName('menu-button');
  // const menu = document.getElementsByClassName('header-navigation');

  // menuButton.addEventListener('click', () => {
  //     menuButton.classList.toggle('active');
  //     menu.classList.toggle('active');
  // });

  let swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   });

s
  const menuButton = document.getElementsByClassName('menu-button');
  const menu = document.getElementsByClassName('header-navigation');

  menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      menu.classList.toggle('active');
  });


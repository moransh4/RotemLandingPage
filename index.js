let section = document.querySelectorAll('section');
let menu = document.querySelectorAll('#navbar .links a');
document.querySelector('#navbar .links a').classList.add('active');
menu.forEach((link) => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      // document.querySelector('#navbar .links a.active').classList.remove('active');
      // link.classList.add('active');
      link.classList.remove('active');
      var sectionId = link.name;
      document.getElementById(sectionId).scrollIntoView();
  });
});

  section.forEach(i => {
    let top = window.scrollY;
    let offset = i.offsetTop;
    let height = i.offsetHeight;
    let id = i.getAttribute('id');
    if (top >= offset && top < offset + height) {
      menu.forEach(link => {
        link.classList.remove('active');
        document.querySelector('#navbar .links a[href*=' + id + ']').classList.add('active');
      });
    }
  });

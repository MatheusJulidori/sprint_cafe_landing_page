document.addEventListener('DOMContentLoaded', function () {
  const sideMenuToggle = document.getElementById('side-menu');
  const menuLinks = document.querySelectorAll('.menu a');

  
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      sideMenuToggle.checked = false;
      sideMenuToggle.style.display = none;
    });
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    header.style.top = "-100px"; /* Esconda o cabeçalho quando o usuário faz scroll para baixo */
  } else {
    header.style.top = "0"; /* Mostre o cabeçalho quando o usuário está no topo da página */
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const headerWrapper = document.querySelector(".header-wrapper");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerWrapper.classList.add("scrolled");
    } else {
      headerWrapper.classList.remove("scrolled");
    }
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }),
  );

  const gridToggle = document.querySelector('.grid-toggle');
  const rightDrawer = document.querySelector('.right-drawer');
  const closeDrawer = document.querySelector('.close-drawer');

  if (gridToggle && rightDrawer) {
    gridToggle.addEventListener('click', () => {
      rightDrawer.classList.add('active');
    });
  }

  if (closeDrawer && rightDrawer) {
    closeDrawer.addEventListener('click', () => {
      rightDrawer.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (rightDrawer && rightDrawer.classList.contains('active') && 
        !rightDrawer.contains(e.target) && 
        !gridToggle.contains(e.target)) {
      rightDrawer.classList.remove('active');
    }
  });
});

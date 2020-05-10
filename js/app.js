const hamburger = document.querySelector(".main-header-hamburger");
const nav = document.querySelector(".main-header-nav__item");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("main-header-nav__item__active");
});

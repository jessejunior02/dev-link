const navMenu = document.querySelector("#nav-menu");
const navBuger = document.querySelector("#menu-buger");

navBuger.addEventListener("click", () => {
  navBuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

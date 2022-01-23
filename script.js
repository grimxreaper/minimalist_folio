const menuButton = document.getElementsByClassName("menu_button")[0];
const mobileMenu = document.getElementsByClassName("mobile_menu")[0];

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("displayBlock");

  setTimeout(() => {
    mobileMenu.classList.toggle("opacityOne");
  }, 100);
});

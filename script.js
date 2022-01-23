const menuButton = document.getElementsByClassName("menu_button")[0];
const mobileMenu = document.getElementsByClassName("mobile_menu")[0];
const closeButton = document.getElementsByClassName("close_button")[0];

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("displayBlock");
  closeButton.classList.toggle("displayBlock");
  menuButton.classList.toggle("displayBlock");

  setTimeout(() => {
    mobileMenu.classList.toggle("opacityOne");
    closeButton.classList.toggle("opacityOne");
  }, 100);
});

closeButton.addEventListener("click", () => {
  menuButton.classList.toggle("displayBlock");
  mobileMenu.classList.toggle("displayBlock");
  closeButton.classList.toggle("displayBlock");
});

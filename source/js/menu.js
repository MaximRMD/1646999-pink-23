var navMain = document.querySelector(".main-nav");
var navButtonOpen = document.querySelector(".nav-toggle_open");
var navButtonClose = document.querySelector(".nav-toggle_closed");

navMain.classList.remove("main-nav_nojs");

navButtonOpen.addEventListener("click", function() {
  navMain.classList.remove("main-nav_closed");
});

navButtonClose.addEventListener("click", function() {
  navMain.classList.add("main-nav_closed");
});

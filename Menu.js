const tabBar = document.querySelector(".nav_bars_mobile i");
const menu = document.querySelector(".menu");
tabBar.addEventListener("click", function (e) {
  e.target.classList.toggle("fa-timers");
  menu.classList.toggle("is-show");
});

//nút esc trên pc laptop
document.addEventListener("keydown", function () {
  menu.classList.toggle("is-show");
});

//nút click bên ngoài menu để thoát menu
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".nav_bars_mobile i")) {
    menu.classList.remove("is-show");
  }
});

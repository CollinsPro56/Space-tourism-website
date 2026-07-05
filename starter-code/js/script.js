const iconHamburger = document.getElementById("icon-hamburger");
const Navigator = document.getElementById("nav");
const closeBtn = document.getElementById("icon-close");

iconHamburger.addEventListener("click", () => {
  //   Navigator.style.display = "block";
  Navigator.style.opacity = 1;
  Navigator.style.transform = "translate(0%)";
});

closeBtn.addEventListener("click", () => {
  //   Navigator.style.display = "none";
  Navigator.style.opacity = 0;
  Navigator.style.transform = "translate(100%)";
});

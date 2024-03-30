// document.querySelector(".hamburger")?.addEventListener("click", () => {
//   document.querySelector(".nav-links")?.classList.toggle("expanded");
//   console.log("click compa");
// });

const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");

function toggleHamburger() {
  navMenu?.classList.toggle("show");
  hamburgerBtn?.setAttribute(
      "aria-expanded",
      hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
}

hamburgerBtn?.addEventListener("click", toggleHamburger)
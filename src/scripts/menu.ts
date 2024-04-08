const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const body = document.getElementsByTagName("body")[0];

function toggleHamburger() {
  navMenu?.classList.toggle("show");
  body?.classList.toggle("show");
  hamburgerBtn?.setAttribute(
      "aria-expanded",
      hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  hamburguerAnimation();
}

const lineA = document.querySelector('.l1');
const lineB = document.querySelector('.l2');
const lineC = document.querySelector('.l3');
function hamburguerAnimation() {
  lineA?.classList.toggle("a");
  lineB?.classList.toggle("b");
  lineC?.classList.toggle("c");
}

hamburgerBtn?.addEventListener("click", toggleHamburger)
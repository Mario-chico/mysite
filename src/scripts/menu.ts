// const hamburgerBtn = document.querySelector("#hamburger");
// const navMenu = document.querySelector(".menu");
// const body = document.getElementsByTagName("body")[0];

function toggleHamburger() {
  try {
    document.querySelector(".menu")?.classList.toggle("show");
    document.getElementsByTagName("body")[0]?.classList.toggle("show");
    document.querySelector("#hamburger")?.setAttribute(
        "aria-expanded",
        document.querySelector("#hamburger")?.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
    hamburguerAnimation();
  } catch (error) {
    console.error(error);
  }
}

// const lineA = document.querySelector('.l1');
// const lineB = document.querySelector('.l2');
// const lineC = document.querySelector('.l3');
function hamburguerAnimation() {
  document.querySelector('.l1')?.classList.toggle("a");
  document.querySelector('.l2')?.classList.toggle("b");
  document.querySelector('.l3')?.classList.toggle("c");
}
document.addEventListener('astro:page-load', () => {
  
  document.querySelector("#hamburger")?.addEventListener("click", toggleHamburger);
});